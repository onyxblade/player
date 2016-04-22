import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/player'


function calcMargin(height){
	if(height > 950){
		return height * 0.5311542390194075
	} else if(height > 860){
		return height * 0.4902962206332993
	} else {
		return height * 0.34
	}
}

ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight) }} 
	songs={[
	{
		cover: "http://p3.music.126.net/b5P2i1-Zzg2bCJpEMQwkoQ==/2412328511400856.jpg?param=130y130",
		title: "ミラクル・ガール",
		artist: "Rasmus Faber",
		url: 'http://7mj4yb.com1.z0.glb.clouddn.com/miracle_girl.mp3',
		album: "ラスマス・フェイバー・プレゼンツ・プラチナ・ジャズ ～アニメ・スタンダード Vol.4～"
	},
	{
		cover: "http://img.xiami.net/images/album/img35/10235/533041374829256_2.jpg",
		title: "Knockin' on Heaven's Door",
		artist: "Guns N' Roses",
		url: 'http://m5.file.xiami.com/235/10235/53304/1036009_2461126_l.mp3?auth_key=c686933bcad00feef82aec254fbd3cf3-1461369600-0-null',
		album: "Use Your Illusion II"
	},
]}/>, document.querySelector('#player'))

window.onresize = function(){
	ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight)}}/>, document.querySelector('#player'))
}