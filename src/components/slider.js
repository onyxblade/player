import React, {PropTypes} from 'react'
import styles from '../style/slider.css'

class Slider extends React.Component {
	static propTypes = {
		width: PropTypes.string,
		handleSlide: PropTypes.func
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
		dragging: false,
		width: this.props.width
	}

	documentEventListener = [this.mouseUp.bind(this), this.mouseMove.bind(this)]

	componentWillReceiveProps({width}){
		this.setState({width})
	}

	render() {
		return(
			<div className={styles.bar}
				onMouseDown={this.mouseDown.bind(this)}
				onMouseUp={this.mouseUp.bind(this)}
				onClick={this.mouseClick.bind(this)}
				ref="bar">
				<div className={styles.elapsed} style={{width: this.state.width}}></div>
				<div className={styles.indicator} style={{left: this.state.width}}></div>
			</div>
		);
	}
}

export default Slider