import './index.html'

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

function xhr(method, url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest()
		xhr.onload = function(e){
			resolve(e.target)
		}
		xhr.open(method, url)
		xhr.send()
	})
}

xhr('GET', 'http://xiami.butterfly.mopaasapp.com/collection/226294947').then(function(res){
	var list = JSON.parse(res.responseText).map(({album, artist, cover, name, url}) => ({album, artist, title: name, cover, url}))
	init(list)
})

function init(list){
	//ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight) }} songs={list}/>, document.querySelector('#player'))
	ReactDOM.render(<Player songs={list}/>, document.querySelector('#player'))
	//window.onresize = function(){
	//	ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight)}} songs={list}/>, document.querySelector('#player'))
	//}
}
