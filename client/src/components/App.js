import React from "react";
import NavBar from "./NavBar.js";
import SideMenu from "./SideMenu.js";
import ModeBar from "./ModeBar.js";
import AppMode from "./../AppMode.js";
import ProfessionalPage from "./ProfessionalPage.js";
import MusicPage from "./MusicPage.js";
import BlogPage from "./BlogPage.js";
import ProfessionalPageMode from "./ProfessionalPageMode";
import "./../styles/modal.css";
import MusicPageMode from "./MusicPageMode";

// defines a dictionary with modes as keys and page titles as definitions
const modeTitle = {};
modeTitle[AppMode.PROFESSIONAL] = "My Portfolio";
modeTitle[AppMode.MUSIC] = "My Music";
modeTitle[AppMode.BLOG] = "Nolen Young's Blog";

// defines a dictionary with modes as keys and pages as definition
const modeToPage = {};
modeToPage[AppMode.PROFESSIONAL] = ProfessionalPage;
modeToPage[AppMode.MUSIC] = MusicPage;
modeToPage[AppMode.BLOG] = BlogPage;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: AppMode.PROFESSIONAL,
			professionalMode: ProfessionalPageMode.ABOUTME,
			musicMode: MusicPageMode.MYMUSIC,
			menuOpen: false,
			showAbout: false,
		};
	}

	// handles a mode bar button press to change modes
	handleChangeMode = (newMode) => {
		this.setState({ mode: newMode });
	};

	// handles a sidebar menu button press in professional mode
	handleChangeProfessionalMode = (newProfessionalMode) => {
		this.setState({ professionalMode: newProfessionalMode });
	};

	// handles a sidebar menu button press in music mode
	handleChangeMusicMode = (newMusicMode) => {
		this.setState({ musicMode: newMusicMode });
	};

	// handles opening the menu
	openMenu = () => {
		this.setState({ menuOpen: true });
	};

	// handles closing the menu
	closeMenu = () => {
		this.setState({ menuOpen: false });
	};

	// toggles the state of menu open
	toggleMenuOpen = () => {
		this.setState((prevState) => ({
			menuOpen: !prevState.menuOpen,
		}));
	};

	// When App component mounts, add a window-level click handler to close the side
	// menu if it is open. This event should fire only if no other lower-level
	// events intercept the click.
	componentDidMount() {
		window.addEventListener("click", this.handleClick);
	}

	// We remove the event listener when the component unmounts. This is a best
	// practice.
	componentWillUnmount() {
		window.removeEventListener("click", this.handleClick);
	}

	// When the user clicks anywhere on the app and the menu is open, close it. This
	// function takes advantage of event bubbling.
	handleClick = (event) => {
		if (this.state.menuOpen) {
			this.closeMenu();
		}
		event.stopPropagation();
	};

	// opens the about modal dialog
	toggleAbout = () => {
		this.setState((prevState) => ({
			showAbout: !prevState.showAbout,
		}));
	};

	// renders the about modal box
	renderAbout = () => {
		return (
			<div className='my-modal' role='dialog'>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h3 className='modal-title'>
								<b>About This Website</b>
								<button
									className='close-modal-button'
									onClick={this.toggleAbout}>
									&times;
								</button>
							</h3>
						</div>
						<div className='modal-body'>
							<h3>Usage</h3>
							<div
								style={{
									textAlign: "left",
								}}>
								<p>
									The navigation menu, opened in the top left of the window,
									lets you view different content depending on the mode you are
									in.
								</p>
								<p>
									To change the website mode, select a mode amongst the modes
									along the bottom bar.
								</p>
								<p>
									Portfolio Mode lets you view information about myself, the
									courses I've taken, and the projects I have worked on.{" "}
									<br></br>
									Music Mode lets you view and listen to the music I make, as
									well as see some music I recommend.<br></br>
									Blog Mode while show you my blog, where I will be posting life
									updates, music rants, ideas, really whatever I want,
									(somewhat) regularly.
								</p>
							</div>
						</div>
						<div className='modal-body'>
							<h3>Development</h3>
							<div
								style={{
									textAlign: "left",
								}}>
								<a href='https://github.com/Nolen-Young/Website'>
									GitHub repository
								</a>
								<p>
									I developed this website from scratch by myself, for myself.
									Here is a list of some of the technologies I used:
								</p>
								<p>
									HTML, CSS, Javascript, Git, React, Babel, Nodemon, JSX,
									Bootstrap, Font Awesome, VS Code, MongoDB
								</p>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								className='btn btn-primary btn-color-theme'
								onClick={this.toggleAbout}>
								OK
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	// renders the app
	render() {
		const ModePage = modeToPage[this.state.mode]; // get the current page to be rendered
		console.log("APP.JS - MUSIC MODE: " + this.state.musicMode);
		// render navbar, side menu, mode bar, and the proper page
		// renders about if show about is true
		return (
			<div onClick={this.handleClick}>
				<NavBar
					title={modeTitle[this.state.mode]}
					mode={this.state.mode}
					changeMode={this.handleChangeMode}
					menuOpen={this.state.menuOpen}
					toggleMenuOpen={this.toggleMenuOpen}
					professionalMode={this.state.professionalMode}
					changeProfessionalMode={this.handleChangeProfessionalMode}
					musicMode={this.state.musicMode}
					changeMusicMode={this.handleChangeMusicMode}
				/>
				<SideMenu
					mode={this.state.mode}
					menuOpen={this.state.menuOpen}
					changeMode={this.handleChangeMode}
					showAbout={this.toggleAbout}
					professionalMode={this.state.professionalMode}
					changeProfessionalMode={this.handleChangeProfessionalMode}
					musicMode={this.state.musicMode}
					changeMusicMode={this.handleChangeMusicMode}
				/>
				<ModeBar
					mode={this.state.mode}
					changeMode={this.handleChangeMode}
					menuOpen={this.state.menuOpen}
					professionalMode={this.state.professionalMode}
					changeProfessionalMode={this.handleChangeProfessionalMode}
					musicMode={this.state.musicMode}
					changeMusicMode={this.handleChangeMusicMode}
				/>
				<ModePage
					mode={this.state.mode}
					changeMode={this.handleChangeMode}
					professionalMode={this.state.professionalMode}
					changeProfessionalMode={this.handleChangeProfessionalMode}
					musicMode={this.state.musicMode}
					changeMusicMode={this.handleChangeMusicMode}
				/>
				{this.state.showAbout ? this.renderAbout() : null}
			</div>
		);
	}
}

export default App;
