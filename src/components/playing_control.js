import React, {PropTypes} from 'react'
import styles from '../style/control_panel.css'
import cn from 'classnames'

class PlayingControl extends React.Component{
	static contextTypes = {
		handlePause: PropTypes.func,
		handlePrevSong: PropTypes.func,
		handleNextSong: PropTypes.func,
		isPaused: PropTypes.bool
	}

	render(){
		return(
			<div style={{float: 'left'}}>
				<button key="rewind"
					className={cn(styles.button, styles.rewind)}
					onClick={this.context.handlePrevSong}></button>
				<button key="pause"
					className={cn(styles.button, (this.context.isPaused ? styles.play : styles.pause ))}
					onClick={this.context.handlePause}></button>
				<button key="fastforward"
					className={cn(styles.button, styles.fastforward)}
					onClick={this.context.handleNextSong}></button>
			</div>
		)
	}
}

export default PlayingControl