import React from 'react';

class ModeBar extends React.Component {
	render() {
		return(
			<div id ="bottomBar" className="modebar">
				<a className="modebar-btn">
					<span className="modebaricon fa fa-th-list"></span>
					<span className="modebar-text">Feed</span>
				</a>
				<a className="modebarbtn">
					<span className="modebar-icon fa fa-history"></span>
					<span className="modebar-text">Rounds</span>
				</a>
				<a className="modebarbtn">
					<span className="modebar-icon fa fa-flag"></span>
					<span className="modebar-text">Courses</span>
				</a>
			</div>
		);
	}
}

export default ModeBar;