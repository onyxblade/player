import React, { PropTypes } from 'react'
import Slider from './slider'
import styles from '../style/control_panel.css'
import cn from 'classnames'

class ControlPanel extends React.Component {
	static propTypes = {
		loopMode: PropTypes.string,
		currentSong: PropTypes.object.isRequired,
		functions: PropTypes.object.isRequired,
		isPaused: PropTypes.bool,
		isMuted: PropTypes.bool,
		duration: PropTypes.number,
		volume: PropTypes.number,
		currentTime: PropTypes.number
	}

	formatTime(time){
		var min = Math.floor(time / 60).toString()
		var sec = Math.floor(time % 60).toString()
		if(sec.length == 1) sec = '0' + sec
		return `${min}:${sec}`
	}
	calcPercent(a, b){
		return `${(a / b) * 100}%`
	}
	getLoopIconStyle(){
		if(this.props.loopMode == 'list'){
			return {opacity: 1}
		} else if(this.props.loopMode == 'single'){
			return {opacity: 1}
		} else if(this.props.loopMode == 'none'){
			return {}
		}
	}
	render() {
		return <div className={styles.panel}>
			<img src={this.props.currentSong.cover} className={styles.cover} />
			<div className={styles.songInfo}>
				<h3 className={cn(styles.line, styles.songTitle)}>{this.props.currentSong.title}</h3>
				<p className={cn(styles.line, styles.songArtist)}>{this.props.currentSong.artist}</p>
				<p className={cn(styles.line, styles.songAlbum)}>{this.props.currentSong.album}</p>
			</div>
			<div className={styles.control}>
				<div style={{float: 'left'}}>
					<button key="rewind"
						className={cn(styles.button, styles.rewind)}
						onClick={this.props.functions.handlePrevSong}></button>
					<button key="pause"
						className={cn(styles.button, (this.props.isPaused ? styles.play : styles.pause ))}
						onClick={this.props.functions.handlePause}></button>
					<button key="fastforward"
						className={cn(styles.button, styles.fastforward)}
						onClick={this.props.functions.handleNextSong}></button>
				</div>
				<div style={{float: 'right'}}>
					<button key="mute"
						className={cn(styles.button, (this.props.isMuted ? styles.mute : styles.volume ))}
						onClick={this.props.functions.handleMute}></button>
					<div className={styles.volumeSlider}>
						<Slider width={`${this.props.volume * 100}%`}
								handleSlide={this.props.functions.handleVolumeSlide} />
					</div>
				</div>
				<div className={styles.progressSlider}>
					<Slider width={this.calcPercent(this.props.currentTime, this.props.duration)}
							handleSlide={this.props.functions.handleProgressSlide} />
				</div>
				<div className={styles.progressSlider}>
					<div className={styles.currentTime}>{this.formatTime(this.props.currentTime)}</div>
					<button key="repeat"
							className={cn(styles.button, styles.repeatBtn)}
							style={this.getLoopIconStyle()}
							onClick={this.props.functions.handleLoopModeChange}>
						<span className={styles.loopSingleIndicator}
							style={{display: (this.props.loopMode == 'single' ? 'block' : 'none')}}>1</span>
					</button>
				</div>
			</div>
		</div>;
	}
}

export default ControlPanel