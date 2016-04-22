import React from 'react'

class Slider extends React.Component {
	mouseEnter(e){
		this.setState({hovering: true})
	}
	mouseLeave(e){
		this.setState({hovering: false})
	}
	mouseDown(e){
		this.setState({dragging: true})
		document.addEventListener('mousemove', this.documentEventListener[1])
		document.addEventListener('mouseup', this.documentEventListener[0])
	}
	mouseUp(){
		this.setState({dragging: false})
		document.removeEventListener('mousemove', this.documentEventListener[1])
		document.removeEventListener('mouseup', this.documentEventListener[0])
	}
	mouseMove(e){
		if(this.state.dragging){
			var barRect = this.refs.bar.getClientRects()[0]
			var width = (e.clientX - barRect.left) / (barRect.right - barRect.left)
			if(width > 1) width = 1;
			if(width < 0) width = 0;
			this.setState({width: `${width * 100}%`})
			this.props.handleSlide(width * 100)
		}
		e.preventDefault()
	}
	mouseClick(e){
		var barRect = this.refs.bar.getClientRects()[0]
		var width = (e.clientX - barRect.left) / (barRect.right - barRect.left)
		if(width > 1) width = 1;
		if(width < 0) width = 0;
		this.setState({width: `${width * 100}%`})
		this.props.handleSlide(width * 100)
	}
	state = {
		hovering: false,
		dragging: false,
		width: this.props.width
	}
	documentEventListener = [this.mouseUp.bind(this), this.mouseMove.bind(this)]
	componentWillReceiveProps({width}){
		this.setState({width})
	}
	render() {
		return <div style={{
			float: 'left',
			background: 'rgba(0,0,0,0.3)',
			width: '100%',
			marginTop: '11px',
			height: '5px',
			borderRadius: '5px',
			boxShadow: '0 1px 2px rgba(0,0,0,0.5) inset',
			cursor: 'pointer',
			position: 'relative' }}
			onMouseEnter={this.mouseEnter.bind(this)}
			onMouseLeave={this.mouseLeave.bind(this)}
			onMouseDown={this.mouseDown.bind(this)}
			onMouseUp={this.mouseUp.bind(this)}
			onClick={this.mouseClick.bind(this)}
			ref="bar">
			<div style={{
				position: 'absolute',
				width: this.state.width,
				opacity: '0.7',
				borderRadius: '5px',
				background: '#258fb8',
				height: '5px'
			}}></div>
			<div style={{
				background: '#fff',
				position: 'absolute',
				opacity: (this.state.hovering || this.state.dragging) ? '1' : '0',
				width: '5px',
				height: '5px',
				borderRadius: '50%',
				transition: 'opacity 0.3s',
				left: this.state.width,
				marginLeft: '-2px'
			}}>
			</div>
		</div>;
	}
}

export default Slider