import Radium from 'radium'
import React from 'react'
import ControlPanel from './control_panel'
import SongList from './song_list'
import Audio from './audio'

@Radium
class Player extends React.Component {
	style = {
		font: '14px "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
		color: '#fff'
	}

	state = {
		songs: this.props.songs,
		currentSong: this.props.songs[0],
		isPaused: false,
		isMuted: false,
		currentTime: 0,
		duration: 1,
		volume: 0.7,
		loopMode: 'none',
		setTime: 0
	}

	loopModes = ['list', 'single', 'none']

	handleNextSong(){
		var currentIndex = this.props.songs.findIndex(e => e == this.state.currentSong)
		var currentSong = this.props.songs[currentIndex + 1 >= this.props.songs.length ? 0 : currentIndex + 1]
		this.setState({currentSong})
	}

	handlePrevSong(){
		var currentIndex = this.props.songs.findIndex(e => e == this.state.currentSong)
		var currentSong = this.props.songs[currentIndex - 1 < 0 ? this.props.songs.length - 1 : currentIndex - 1]
		this.setState({currentSong})
	}

	handlePause(){
		this.setState({isPaused: !this.state.isPaused})
	}

	handleTimeUpdate(audio){
		var currentTime = audio.currentTime
		var duration = audio.duration
		this.setState({currentTime, duration})
	}

	handleProgressSlide(percent){
		var setTime = (percent / 100) * this.state.duration
		//this.setState({setTime, setTimeSign: Date.now()})
		//rerender is slow..
		document.querySelector('#audio').currentTime = setTime
	}

	handleVolumeSlide(percent){
		var volume = percent / 100
		this.setState({volume})
	}

	handleMute(){
		this.setState({isMuted: !this.state.isMuted})
	}

	handleEnded(){
		if(this.state.loopMode != 'single'){
			if(this.state.loopMode == 'none' && this.state.currentSong == this.props.songs[this.props.songs.length - 1]){
				this.setState({isPaused: true})
			} else {
				this.handleNextSong()
			}
		}
	}

	handleLoopModeChange(){
		var currentIndex = this.loopModes.findIndex(e => e == this.state.loopMode)
		var loopMode = this.loopModes[currentIndex + 1 >= this.loopModes.length ? 0 : currentIndex + 1]
		this.setState({loopMode})
	}

	handleSelectSong(song){
		this.setState({currentSong: song})
	}

	render(){
		return <div style={this.style}>
			<ControlPanel currentSong={this.state.currentSong}
				functions={{
					handleNextSong: this.handleNextSong.bind(this),
					handlePrevSong: this.handlePrevSong.bind(this),
					handlePause: this.handlePause.bind(this),
					handleMute: this.handleMute.bind(this),
					handleLoopModeChange: this.handleLoopModeChange.bind(this),
					handleProgressSlide: this.handleProgressSlide.bind(this),
					handleVolumeSlide: this.handleVolumeSlide.bind(this)
				}}
				isPaused={this.state.isPaused}
				currentTime={this.state.currentTime}
				duration={this.state.duration}
				volume={this.state.volume}
				isMuted={this.state.isMuted}
				loopMode={this.state.loopMode} />
			<Audio src={this.state.currentSong.url}
				muted={this.state.isMuted}
				volume={this.state.volume}
				paused={this.state.isPaused}
				setTime={this.state.setTime}
				setTimeSign={this.state.setTimeSign}
				handleTimeUpdate={this.handleTimeUpdate.bind(this)}
				handleEnded={this.handleEnded.bind(this)} />
			<SongList songs={this.state.songs} 
				currentSong={this.state.currentSong}
				handleSelectSong={this.handleSelectSong.bind(this)} />
		</div>;
	}
}

export default Player