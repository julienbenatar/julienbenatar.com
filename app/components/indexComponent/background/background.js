var BackgroundComponent = React.createClass({
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
					autoPlay="autoplay"
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
				<div className="playerButton playerButton--play"></div>
				<div className="playerButton playerButton--contrast"></div>
			</div>
		);
	}
})