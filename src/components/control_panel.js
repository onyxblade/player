import React from 'react'
import Radium from 'radium'
import Slider from './slider'

@Radium
class ControlPanel extends React.Component {
	lineStyle = {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	}
	buttonStyle = {
		opacity: '0.5',
		transition: '0.3s',
		cursor: 'pointer',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		width: '24px',
		height: '24px',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		border: 'none',
		marginRight: '3px',
		outline: 'none',
		':hover': {
			opacity: '1'
		}
	}
	formatTime(time){
		var min = Math.floor(time / 60).toString()
		var sec = Math.floor(time % 60).toString()
		if(sec.length == 1) sec = '0' + sec
		return `${min}:${sec}`
	}
	calcPercent(a, b){
		return `${(a / b) * 100}%`
	}
	getLoopIconStyle(){
		var defaults = {backgroundImage: 'url(img/repeat.png)', float: 'right', position: 'relative'}
		if(this.props.loopMode == 'list'){
			return [this.buttonStyle, defaults, {opacity: 1}]
		} else if(this.props.loopMode == 'single'){
			return [this.buttonStyle, defaults, {opacity: 1}]
		} else if(this.props.loopMode == 'none'){
			return [this.buttonStyle, defaults]
		}
	}
	render() {
		return <div style={{
			width: '500px',
			height: '130px',
			padding: '25px',
			margin: '0 auto 30px',
			position: 'relative',
			textShadow: '0 1px 2px #000'
		}} className="control-panel">
			<img src={this.props.currentSong.cover}
				style={{
					borderRadius: '10px',
					width: '130px',
					height: '130px',
					border: '1px solid #333',
					position: 'absolute',
					boxShadow: '0 2px 10px black'
				}}/>
			<div style={{
				position: 'absolute',
				marginLeft: '155px',
				width: '345px'
			}} className="song-info">
				<h3 style={[{
					fontSize: '14px',
					margin: '0px'
				}, this.lineStyle]}>{this.props.currentSong.title}</h3>
				<p style={[{
					fontSize: '12px',
					color: '#ccc',
					margin: '5px 0 0 0'
				}, this.lineStyle]}>{this.props.currentSong.artist}</p>
				<p style={[{
					fontSize: '12px',
					color: '#ccc',
					margin:'5px 0 0 0'
				}, this.lineStyle]}>{this.props.currentSong.album}</p>
			</div>
			<div style={{
				position: 'absolute',
				marginLeft: '155px',
				width: '345px',
				bottom: '20px'
			}} className="control">
				<div style={{float: 'left'}}>
					<button key="rewind"
						style={[this.buttonStyle, {backgroundImage: 'url(img/rewind.png)'}]}
						onClick={this.props.functions.handlePrevSong} ></button>
					<button key="pause"
						style={[this.buttonStyle, {backgroundImage: (this.props.isPaused ? 'url(img/play.png)' : 'url(img/pause.png)')}]}
						onClick={this.props.functions.handlePause} ></button>
					<button key="fastforward"
						style={[this.buttonStyle, {backgroundImage: 'url(img/fastforward.png)'}]}
						onClick={this.props.functions.handleNextSong} ></button>
				</div>
				<div style={{float: 'right'}}>
					<button key="mute"
						style={[this.buttonStyle, {backgroundImage: (this.props.isMuted ? 'url(img/mute.png)' : 'url(img/volume.png)'), float: 'left'}]}
						onClick={this.props.functions.mute}></button>
					<div style={{float: 'left', width: '100px'}}>
						<Slider width={`${this.props.volume * 100}%`}
								handleSlide={this.props.functions.handleVolumeSlide} />
					</div>
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<Slider width={this.calcPercent(this.props.currentTime, this.props.duration)}
							handleSlide={this.props.functions.handleProgressSlide} />
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<div style={{
						float: 'left',
						fontSize: '12px',
						color: '#ccc',
						marginTop: '8px'
					}}>{this.formatTime(this.props.currentTime)}</div>
					<button key="repeat" style={this.getLoopIconStyle()} onClick={this.props.functions.handleLoopModeChange}>
						<span style={{
							position: 'absolute',
							top: '3px',
							right: '-2px',
							fontSize: '8px',
							display: (this.props.loopMode == 'single' ? 'block' : 'none'),
							color: '#fff'
						}}>1</span>
					</button>
				</div>
			</div>
		</div>;
	}
}

export default ControlPanel