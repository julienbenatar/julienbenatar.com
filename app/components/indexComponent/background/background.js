var BackgroundComponent = React.createClass({

	getInitialState: function() {
		return {
			isLoaded: false,
			isPlaying: true
		};
	},

	componentDidMount: function() {
		var that = this;
		var video = React.findDOMNode(this.refs.video_tag);
		video.oncanplaythrough = function() {
			that.state.isLoaded = true;
			video.loop = true;
			that.playVideo();
		};

		video.onended = function() {
			that.playVideo();
		}
	},

	playVideo: function() {
		var video = React.findDOMNode(this.refs.video_tag);
		this.setState({
			isPlaying: true
		});
		video.play();
	},

	pauseVideo: function() {
		var video = React.findDOMNode(this.refs.video_tag);
		this.setState({
			isPlaying: false
		});
		video.pause();
	},

	clickButton: function() {
		if (this.state.isPlaying === true) {
			this.pauseVideo();
		}
		else {
			this.playVideo();
		}
	},

	render: function() {
		return (
			<div className="backgroundComponent">
				<img
					className="backgroundPlaceholder"
					src="assets/images/background/background.jpg"
				/>
				<video
					className="backgroundVideo"
					loop="loop"
					ref="video_tag"
					play="{this.state.isLoaded === 1}"
				>
					<source
						src="assets/images/background/background.mp4"
						type="video/mp4"
					/>
					<source
						src="assets/images/background/background.ogv"
						type="video/ogg"
					/>
					<source
						src="assets/images/background/background.webm"
						type="video/webm"
					/>
				</video>
				<div
					onClick={this.clickButton}
					className={this.state.isPlaying ? 'playerButton -typePause' : 'playerButton -typePlay'}
				></div>
			</div>
		);
	}
})