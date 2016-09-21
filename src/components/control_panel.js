import React, { PropTypes } from 'react'
import styles from '../style/control_panel.css'
import SongInfo from './song_info'
import PlayingControl from './playing_control'
import ProgressControl from './progress_control'
import VolumeControl from './volume_control'

class ControlPanel extends React.Component {
	static contextTypes = {
		currentSong: PropTypes.object
	}

	render() {
		return(
			<div className={styles.panel}>
				<img src={this.context.currentSong.cover} className={styles.cover} />
				<SongInfo />
				<div className={styles.control}>
					<div style={{overflow: 'hidden'}}>
						<PlayingControl />
						<VolumeControl />
					</div>
					<ProgressControl />
				</div>
			</div>
		);
	}
}

export default ControlPanel