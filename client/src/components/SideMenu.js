import React from "react";
import AppMode from "./../AppMode.js";
import ProfessionalPageMode from "./ProfessionalPageMode.js";
import MusicPageMode from "./MusicPageMode.js";

// *****************************************************
// This class contains the code to render the side menu.
// It also handles the generation of the correct menu
// items depending on the mode, and the correct click
// responses depending on the button.
// *****************************************************
class SideMenu extends React.Component {
	// handles the menu button clicks depending on mode
	handleMenuBtnClick = (newMode) => {
		switch (this.props.mode) {
			case AppMode.PROFESSIONAL: // if mode is professional
				if (this.props.professionalMode !== newMode) {
					this.props.changeProfessionalMode(newMode);
				}
				break;
			case AppMode.MUSIC: // if mode is music
				if (this.props.musicMode !== newMode) {
					this.props.changeMusicMode(newMode);
				}
				break;
			default:
				break;
		}
	};

	// renderModeItems -- Renders correct subset of mode menu items based on current
	// mode, which is stored in this.prop.mode. Uses switch statement to determine
	// mode.
	renderModeMenuItems = () => {
		switch (this.props.mode) {
			case AppMode.PROFESSIONAL /* Renders side menu if mode is professional */:
				return (
					<div>
						{/* Renders side menu if professionalMode is about me */}
						<button
							className={
								this.props.professionalMode === ProfessionalPageMode.ABOUTME
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() =>
								this.handleMenuBtnClick(ProfessionalPageMode.ABOUTME)
							}>
							<span className='fa fa-user'></span>&nbsp;About Me
						</button>

						{/* Renders side menu if professionalMode is courses */}
						<button
							className={
								this.props.professionalMode === ProfessionalPageMode.COURSES
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() =>
								this.handleMenuBtnClick(ProfessionalPageMode.COURSES)
							}>
							<span className='fa fa-clipboard'></span>&nbsp;Courses
						</button>

						{/* Renders side menu if professionalMode is Projects */}
						<button
							className={
								this.props.professionalMode === ProfessionalPageMode.PROJECTS
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() =>
								this.handleMenuBtnClick(ProfessionalPageMode.PROJECTS)
							}>
							<span className='fa fa-code'></span>&nbsp;Projects
						</button>
					</div>
				);
			case AppMode.MUSIC /* Renders side menu if mode is music */:
				return (
					<div>
						{/* Renders side menu if musicMode is my music */}
						<button
							className={
								this.props.musicMode === MusicPageMode.MYMUSIC
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() => this.handleMenuBtnClick(MusicPageMode.MYMUSIC)}>
							<span className='fa fa-music'></span>&nbsp;Music I've Made
						</button>

						{/* Renders side menu if musicMode is other music */}
						<button
							className={
								this.props.musicMode === MusicPageMode.OTHERMUSIC
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() => this.handleMenuBtnClick(MusicPageMode.OTHERMUSIC)}>
							<span className='fa fa-search'></span>&nbsp;Other People's Music
						</button>

						{/* Renders side menu if musicMode is TOOLS */}
						<button
							className={
								this.props.musicMode === MusicPageMode.TOOLS
									? " sidemenu-item-selected "
									: " sidemenu-item "
							}
							onClick={() => this.handleMenuBtnClick(MusicPageMode.TOOLS)}>
							<span className='fa fa-wrench'></span>&nbsp;Production Tools
						</button>
					</div>
				);
			case AppMode.BLOG /* Renders side menu if mode is blog */:
				return (
					<div>
						<button className='sidemenu-item'>
							<span className='fa fa-th-list'></span>&nbsp;Blog
						</button>
						<button className='sidemenu-item'>
							<span className='fa fa-plus'></span>&nbsp;About This Blog
						</button>
					</div>
				);
			default:
				return null;
		}
	};

	render() {
		return (
			<div
				className={
					"sidemenu " +
					(this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")
				}>
				{/* SIDE MENU TITLE */}
				<div className='sidemenu-title'>
					<span className='sidemenu-userID'>Nolen Young's Website</span>
				</div>

				{/* MENU CONTENT */}
				{/*Mode-based menu items */}
				{this.renderModeMenuItems()}
				{/* Always-there menu items */}
				<button className='sidemenu-item' onClick={this.props.showAbout}>
					<span className='fa fa-info-circle'></span>&nbsp;About This Website
				</button>
			</div>
		);
	}
}

export default SideMenu;
