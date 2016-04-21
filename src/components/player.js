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
		currentPlaying: this.props.songs[0],
		songs: new Zipper(this.props.songs)
	}

	nextSong(){
		this.setState({songs: this.state.songs.next(), currentPlaying: this.state.songs.current})
	}

	prevSong(){
		this.setState({songs: this.state.songs.prev(), currentPlaying: this.state.songs.current})
	}

	pause(){
		
	}

	render(){
		return <div style={this.style}>
			<ControlPanel currentPlaying={this.state.currentPlaying}
				functions={{
					nextSong: this.nextSong.bind(this),
					prevSong: this.prevSong.bind(this),
					pause: this.pause.bind(this)
				}} />
			<SongList songs={this.state.songs} 
				currentPlaying={this.state.currentPlaying} />
		</div>;
	}
}

export default Player