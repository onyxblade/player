import React from 'react'
import Slider from './slider'
import styles from '../style/control_panel.css'
import classNames from 'classnames'

class ControlPanel extends React.Component {
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
				<h3 className={styles.line} style={{
					fontSize: '14px',
					margin: '0px'
				}}>{this.props.currentSong.title}</h3>
				<p className={styles.line} style={{
					fontSize: '12px',
					color: '#ccc',
					margin: '5px 0 0 0'
				}}>{this.props.currentSong.artist}</p>
				<p className={styles.line} style={{
					fontSize: '12px',
					color: '#ccc',
					margin:'5px 0 0 0'
				}}>{this.props.currentSong.album}</p>
			</div>
			<div style={{
				position: 'absolute',
				marginLeft: '155px',
				width: '345px',
				bottom: '20px'
			}} className="control">
				<div style={{float: 'left'}}>
					<button key="rewind" className={classNames(styles.button, styles.rewind)}
						onClick={this.props.functions.handlePrevSong} ></button>
					<button key="pause" className={classNames(styles.button, (this.props.isPaused ? styles.play : styles.pause ))}
						onClick={this.props.functions.handlePause} ></button>
					<button key="fastforward" className={classNames(styles.button, styles.fastforward)}
						onClick={this.props.functions.handleNextSong} ></button>
				</div>
				<div style={{float: 'right'}}>
					<button key="mute" className={classNames(styles.button, (this.props.isMuted ? styles.mute : styles.volume ))}
						style={{float: 'left'}}
						onClick={this.props.functions.mute}></button>
					<div style={{float: 'left', width: '100px'}}>
						<Slider width={`${this.props.volume * 100}%`}
								handleSlide={this.props.functions.handleVolumeSlide} />
					</div>
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<Slider width={this.calcPercent(this.props.currentTime, this.props.duration)}
							handleSlide={this.props.functions.handleProgressSlide} />
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<div style={{
						float: 'left',
						fontSize: '12px',
						color: '#ccc',
						marginTop: '8px'
					}}>{this.formatTime(this.props.currentTime)}</div>
					<button key="repeat" className={`${styles.button} ${styles.repeatBtn}`} style={this.getLoopIconStyle()} onClick={this.props.functions.handleLoopModeChange}>
						<span style={{
							position: 'absolute',
							top: '3px',
							right: '-2px',
							fontSize: '8px',
							display: (this.props.loopMode == 'single' ? 'block' : 'none'),
							color: '#fff'
						}}>1</span>
					</button>
				</div>
			</div>
		</div>;
	}
}

export default ControlPanel