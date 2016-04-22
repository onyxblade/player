import Radium from 'radium'
import React from 'react'
import ControlPanel from './control_panel'
import SongList from './song_list'
import Zipper from '../zipper'

@Radium
class Player extends React.Component {
	style = {
		font: '14px "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
		color: '#fff'
	}

	state = {
		songs: new Zipper(this.props.songs, true),
		currentPlaying: this.props.songs[0],
		isPlaying: true,
		isMuted: false,
		currentTime: 0,
		duration: 1,
		volume: 0.7
	}

	nextSong(){
		this.setState({songs: this.state.songs.next(), currentPlaying: this.state.songs.current})
	}

	prevSong(){
		this.setState({songs: this.state.songs.prev(), currentPlaying: this.state.songs.current})
	}

	pause(){
		if(this.refs.audioPlayer.paused){
			this.refs.audioPlayer.play()
			this.setState({isPlaying: true})
		} else {
			this.refs.audioPlayer.pause()
			this.setState({isPlaying: false})
		}
	}

	handleTimeUpdate(){
		var currentTime = this.refs.audioPlayer.currentTime
		var duration = this.refs.audioPlayer.duration
		this.setState({currentTime, duration})
	}

	handleProgressSlide(percent){
		this.refs.audioPlayer.currentTime = (percent / 100) * this.refs.audioPlayer.duration
		this.handleTimeUpdate()
	}

	handleVolumeSlide(percent){
		var volume = percent / 100
		this.refs.audioPlayer.volume = volume
		this.setState({volume})
	}

	componentDidMount(){
		this.refs.audioPlayer.addEventListener('ended', this.nextSong.bind(this))
		this.refs.audioPlayer.addEventListener('timeupdate', this.handleTimeUpdate.bind(this))
	}

	handleMute(){
		var muted = !this.refs.audioPlayer.muted
		this.refs.audioPlayer.muted = muted
		this.setState({isMuted: muted})
	}

	render(){
		return <div style={this.style}>
			<ControlPanel currentPlaying={this.state.currentPlaying}
				functions={{
					nextSong: this.nextSong.bind(this),
					prevSong: this.prevSong.bind(this),
					pause: this.pause.bind(this),
					mute: this.handleMute.bind(this)
				}}
				isPlaying={this.state.isPlaying}
				currentTime={this.state.currentTime}
				duration={this.state.duration}
				handleProgressSlide={this.handleProgressSlide.bind(this)}
				handleVolumeSlide={this.handleVolumeSlide.bind(this)}
				volume={this.state.volume}
				isMuted={this.state.isMuted} />
			<audio ref="audioPlayer" src={this.state.currentPlaying.url} autoPlay volume="0.7"></audio>
			<SongList songs={this.state.songs} 
				currentPlaying={this.state.currentPlaying} />
		</div>;
	}
}

export default Player