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

var xhr = new XMLHttpRequest()
xhr.onload = function(e){
	var list = JSON.parse(e.target.responseText).map(({album, artist, cover, name, url}) => ({album, artist, title: name, cover, url}))
	init(list)
}
xhr.open('GET', 'http://xiami.carp.mopaasapp.com/collection/226294947')
xhr.send()

function init(list){
	ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight) }} songs={list}/>, document.querySelector('#player'))

	window.onresize = function(){
		ReactDOM.render(<Player style={{ marginTop: calcMargin(document.body.clientHeight)}} songs={list}/>, document.querySelector('#player'))
	}
}