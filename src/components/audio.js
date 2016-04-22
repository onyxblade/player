import React from 'react'

class Audio extends React.Component {

	state = {
		setTimeSign: null
	}

	shouldComponentUpdate(){
		return false
	}

	componentWillReceiveProps(props){
		var audio = this.refs.audio
		if(props.src != audio.src) audio.src = props.src;
		if(props.paused != audio.paused){
			props.paused ? audio.pause() : audio.play()
		}
		if(props.muted != audio.muted) audio.muted = props.muted;
		if(props.volume != audio.volume) audio.volume = props.volume;
		if(this.props.setTimeSign != this.state.setTimeSign){
			audio.currentTime = props.setTime
			this.state.setTimeSign = this.props.setTimeSign
		}
	}

	componentDidMount(){
		var audio = this.refs.audio
		audio.addEventListener('ended', e => (this.props.handleEnded && this.props.handleEnded(audio)))
		audio.addEventListener('timeupdate', e => (this.props.handleTimeUpdate && this.props.handleTimeUpdate(audio)))
		this.componentWillReceiveProps(this.props)
	}

	render(){
		return <audio ref="audio" id="audio"></audio>;
	}
}

export default Audio