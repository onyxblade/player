import React, {PropTypes} from 'react'
import styles from '../style/song_info.css'
import cn from 'classnames'

class SongInfo extends React.Component {
	static contextTypes = {
		currentSong: PropTypes.object.isRequired
	}

	render(){
		return(
			<div className={styles.songInfo}>
				<h3 className={cn(styles.line, styles.songTitle)}>{this.context.currentSong.title}</h3>
				<p className={cn(styles.line, styles.songArtist)}>{this.context.currentSong.artist}</p>
				<p className={cn(styles.line, styles.songAlbum)}>{this.context.currentSong.album}</p>
			</div>
		)
	}
}

export default SongInfo