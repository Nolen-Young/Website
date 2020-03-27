import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<span className="navbar-items">
					<button className="sidemenu-btn">
					<span className="fa fa-bars sidemenu-btn-icon">
					</span>
					</button>
					<img src="http://tiny.cc/sslogo" alt="Speed Score Logo" height="38px"
					width="38px" />
					<span className="navbar-title">
						&nbsp;{this.props.title}
					</span>
				</span>
			</div>
		);
	}
}

export default NavBar;