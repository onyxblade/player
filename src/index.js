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

var xhr = new XMLHttpRequest()
xhr.onload = function(e){
	var list = JSON.parse(e.target.responseText).map(({album, artist, cover, name, url}) => ({album, artist, title: name, cover, url}))
	init(list)
}
xhr.open('GET', 'http://xiami.carp.mopaasapp.com/collection/226294947')
xhr.send()

function init(list){
	ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight) }}
		songs={[
		{
			cover: "http://p3.music.126.net/b5P2i1-Zzg2bCJpEMQwkoQ==/2412328511400856.jpg?param=130y130",
			title: "ミラクル・ガール",
			artist: "Rasmus Faber",
			url: 'http://7mj4yb.com1.z0.glb.clouddn.com/miracle_girl.mp3',
			album: "ラスマス・フェイバー・プレゼンツ・プラチナ・ジャズ ～アニメ・スタンダード Vol.4～"
		}
	].concat(list)}/>, document.querySelector('#player'))

	window.onresize = function(){
		ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight)}}/>, document.querySelector('#player'))
	}
}