import React from 'react'
import Radium from 'radium'

@Radium
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
		return (<li 
			style={[{
					textOverflow: 'ellipsis',
					transition: '0.3s',
					fontSize: '12px',
					lineHeight: '2',
					paddingLeft: '25px',
					cursor: 'pointer',
					color: '#aaa',
					whiteSpace: 'nowrap',
					':hover': {
						color: '#fff'
					}
				}, (this.isItemPlaying(item) ? {
					background: 'url(./img/playing.png) no-repeat 0 center',
					fontWeight: 'bold',
					color: '#fff'
				} : {})]}
			key={item.title}
			onClick={this.selectSongHandler(item).bind(this)}
		>
				{item.artist} - {item.title}
		</li>);
	}
	render() {
		return <div style={{
			background: 'rgba(0,0,0,0.5)',
			width: '470px',
			margin: '0 auto 30px',
			padding: '10px 15px',
			position: 'relative',
			borderRadius: '5px',
			boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
			overflowX: 'hidden'
		}}>
			<ul style={{
				height: '130px',
				width: '520px',
				overflowY: 'auto',
				listStyle: 'none',
				margin: 0,
				padding: 0
			}}>
				{this.props.songs.map(this.renderListItem.bind(this))}
			</ul>
		</div>;
	}
}

export default SongList