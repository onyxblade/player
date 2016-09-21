import React, {PropTypes} from 'react'
import styles from '../style/control_panel.css'
import cn from 'classnames'
import Slider from './slider'

class ProgressControl extends React.Component{
	static contextTypes = {
		currentTime: PropTypes.number,
		duration: PropTypes.number,
		handleProgressSlide: PropTypes.func,
		handleLoopModeChangee: PropTypes.func,
		loopMode: PropTypes.string
	}

	getLoopIconStyle(){
		if(this.context.loopMode == 'list'){
			return {opacity: 1}
		} else if(this.context.loopMode == 'single'){
			return {opacity: 1}
		} else if(this.context.loopMode == 'none'){
			return {}
		}
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

	render(){
		return(
			<div>
				<div className={styles.progressSlider}>
					<Slider width={this.calcPercent(this.context.currentTime, this.context.duration)}
							handleSlide={this.context.handleProgressSlide} />
				</div>
				<div className={styles.progressSlider}>
					<div className={styles.currentTime}>{this.formatTime(this.context.currentTime)}</div>
					<button key="repeat"
							className={cn(styles.button, styles.repeatBtn)}
							style={this.getLoopIconStyle()}
							onClick={this.context.handleLoopModeChange}>
						<span className={styles.loopSingleIndicator}
							style={{display: (this.context.loopMode == 'single' ? 'block' : 'none')}}>1</span>
					</button>
				</div>
			</div>
		)
	}
}

export default ProgressControl