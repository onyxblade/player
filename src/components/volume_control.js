import React, {PropTypes} from 'react'
import styles from '../style/control_panel.css'
import cn from 'classnames'
import Slider from './slider'

class VolumeControl extends React.Component{
	static contextTypes = {
		isMuted: PropTypes.bool,
		handleMute: PropTypes.func,
		volume: PropTypes.number,
		handleVolumeSlide: PropTypes.func
	}

	render(){
		return(
			<div style={{float: 'right'}}>
				<button key="mute"
					className={cn(styles.button, (this.context.isMuted ? styles.mute : styles.volume ))}
					onClick={this.context.handleMute}></button>
				<div className={styles.volumeSlider}>
					<Slider width={`${this.context.volume * 100}%`}
							handleSlide={this.context.handleVolumeSlide} />
				</div>
			</div>
		)
	}
}

export default VolumeControl