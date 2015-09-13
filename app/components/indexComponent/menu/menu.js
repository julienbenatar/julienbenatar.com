var MenuComponent = React.createClass({
	render: function() {
		return (
			<div className="menuComponent">
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