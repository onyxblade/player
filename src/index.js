import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/player'
import Zipper from './zipper'

ReactDOM.render(<Player songs={[
	{
		cover: "http://p3.music.126.net/b5P2i1-Zzg2bCJpEMQwkoQ==/2412328511400856.jpg?param=130y130",
		title: "ミラクル・ガール",
		artist: "Rasmus Faber",
		album: "ラスマス・フェイバー・プレゼンツ・プラチナ・ジャズ ～アニメ・スタンダード Vol.4～"
	},
	{
		cover: "http://p3.music.126.net/b5P2i1-Zzg2bCJpEMQwkoQ==/2412328511400856.jpg?param=130y130",
		title: "Knockin' on Heaven's Door",
		artist: "GNR",
		album: ""
	},
]}/>, document.querySelector('#player'))
