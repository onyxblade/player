import React from 'react'
import styles from '../style/song_list.css'
import classNames from 'classnames'

class SongList extends React.Component {
	isItemPlaying(item){
		return this.props.currentSong == item
	}

	selectSongHandler(song){
		return function(){
			this.props.handleSelectSong(song)
		}
	}

	renderListItem(item){
		var className = classNames({
			[styles.listItem]: true,
			[styles.playing]: this.isItemPlaying(item)
		})
		return (<li className={className}
			key={item.title}
			onClick={this.selectSongHandler(item).bind(this)}
		>
				{item.artist} - {item.title}
		</li>);
	}
	render() {
		return <div className={styles.list}>
			<ul className={styles.ul}>
				{this.props.songs.map(this.renderListItem.bind(this))}
			</ul>
		</div>;
	}
}

export default SongList