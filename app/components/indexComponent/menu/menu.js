var MenuComponent = React.createClass({
	getInitialState: function() {
		return {
			visible: false
		};
	},

	componentDidMount: function() {
		var that = this;
		setTimeout(function() {
			that.setState({
				visible: true
			});
		}, 200);
	},

	render: function() {
		return (
			<div
				className={this.state.visible ? 'menuComponent -visible' : 'menuComponent'}
			>
				<div className="menu__logo"></div>
				<ul className="menuList">
					<li className="menuItem">
						<span
							className="menuItem__title"
							title="Home"
						>Home</span>
					</li>
					<li className="menuItem">
						<span
							className="menuItem__title"
							title="Music"
						>Music</span>
					</li>
					<li className="menuItem">
						<span
							className="menuItem__title"
							title="Contact"
						>Contact</span>
					</li>
				</ul>
			</div>
		);
	}
});