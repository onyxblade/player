import Radium from 'radium'
import React from 'react'
import ControlPanel from './control_panel'
import SongList from './song_list'


@Radium
class Player extends React.Component {
	style = {
		font: '14px "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
		color: '#fff'
	}

	render(){
		return <div style={this.style}>
			<ControlPanel currentPlaying={{
				cover: "http://p3.music.126.net/b5P2i1-Zzg2bCJpEMQwkoQ==/2412328511400856.jpg?param=130y130",
				title: "ミラクル・ガール",
				artist: "Rasmus Faber",
				album: "ラスマス・フェイバー・プレゼンツ・プラチナ・ジャズ ～アニメ・スタンダード Vol.4～"
			}} />
			<SongList />
		</div>;
	}
}

export default Player