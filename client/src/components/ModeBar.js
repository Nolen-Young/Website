import React from "react";
import AppMode from "../AppMode.js";

// *****************************************************
// This class defines the rendering of the bottom mode bar
// *****************************************************
class ModeBar extends React.Component {
	// handler for when a mode bar item is clicked
	handleModeBtnClick = (newMode) => {
		if (this.props.mode !== newMode) {
			this.props.changeMode(newMode);
		}
	};

	// render the bar and each button in the bar
	render() {
		return (
			<div
				className={
					"modebar" +
					(this.props.mode === AppMode.LOGIN ? " invisible" : " visible")
				}>
				<button
					className={
						"modebar-btn" +
						(this.props.mode === AppMode.PROFESSIONAL
							? " modebar-item-selected"
							: "")
					}
					onClick={
						this.props.menuOpen
							? null
							: () => this.handleModeBtnClick(AppMode.PROFESSIONAL)
					}>
					<span
						className={
							"nonMenuItem fa fa-user " +
							(this.props.mode === AppMode.PROFESSIONAL
								? "modebar-icon-selected"
								: "modebar-icon")
						}></span>
					<span
						className={
							"modebar-text " +
							(this.props.mode === AppMode.PROFESSIONAL
								? "modebar-text-selected"
								: "modebar-text")
						}>
						My Portfolio
					</span>
				</button>

				<button
					className={
						"modebar-btn" +
						(this.props.mode === AppMode.MUSIC ? " modebar-item-selected" : "")
					}
					onClick={
						this.props.menuOpen
							? null
							: () => this.handleModeBtnClick(AppMode.MUSIC)
					}>
					<span
						className={
							" nonMenuItem fa fa-music " +
							(this.props.mode === AppMode.MUSIC
								? "modebar-icon-selected"
								: "modebar-icon")
						}></span>
					<span
						className={
							"modebar-text " +
							(this.props.mode === AppMode.MUSIC
								? "modebar-text-selected"
								: "modebar-text")
						}>
						My Music
					</span>
				</button>

				<button
					className={
						"modebar-btn" +
						(this.props.mode === AppMode.BLOG ? " modebar-item-selected" : "")
					}
					onClick={
						this.props.menuOpen
							? null
							: () => this.handleModeBtnClick(AppMode.BLOG)
					}>
					<span
						className={
							" nonMenuItem fa fa-th-list " +
							(this.props.mode === AppMode.BLOG
								? "modebar-icon-selected"
								: "modebar-icon")
						}></span>
					<span
						className={
							"modebar-text " +
							(this.props.mode === AppMode.BLOG
								? "modebar-text-selected"
								: "modebar-text")
						}>
						Blog
					</span>
				</button>
			</div>
		);
	}
}

export default ModeBar;
