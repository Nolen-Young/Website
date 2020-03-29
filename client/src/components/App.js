import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import AppMode from './../AppMode.js';
import ProfessionalPage from './ProfessionalPage.js';
import MusicPage from './MusicPage.js';
import ReviewPage from './ReviewPage.js';
import ProfessionalPageMode from './ProfessionalPageMode';
import './../styles/modal.css'

const modeTitle = {};
modeTitle[AppMode.PROFESSIONAL] = "My Portfolio";
modeTitle[AppMode.MUSIC] = "My Music";
modeTitle[AppMode.REVIEW] = "Reviews";
modeTitle[AppMode.REVIEW_NEWREVIEW] = "New Review";

const modeToPage = {};
modeToPage[AppMode.PROFESSIONAL] = ProfessionalPage;
modeToPage[AppMode.MUSIC] = MusicPage;
modeToPage[AppMode.REVIEW] = ReviewPage;
modeToPage[AppMode.REVIEW_NEWREVIEW] = ReviewPage;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: AppMode.PROFESSIONAL,
      professionalMode: ProfessionalPageMode.ABOUTME,
      menuOpen: false,
      showAbout: false
    };
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  handleChangeProfessionalMode = (newProfessionalMode) => {
    console.log(newProfessionalMode);
    this.setState({professionalMode: newProfessionalMode});
  }

  openMenu = () => {
    console.log("hello from openMenu")
    this.setState({menuOpen: true});
  }

  closeMenu = () => {
    this.setState({menuOpen: false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

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
  }

  toggleAbout = () => {
    console.log("hello from toggleAbout()")
    this.setState(prevState => ({
      showAbout: !prevState.showAbout
    }));
  }

  renderAbout = () => {
    console.log("hello from renderAbout()")
    return (
      <div className="my-modal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                <b>About This Website</b>
                <button className="close-modal-button" onClick={this.toggleAbout}>
                  &times;</button>
              </h3>
            </div>
            <div className="modal-body">
              <h3>Usage</h3>
              <div style={{
                textAlign: "left"
              }}>
                <p>
                  The navigation menu, opened in the top left of the window, lets you view different content depending on the mode you are in.
                </p>
                <p>
                  To change the website mode, select a mode amongst the modes along the bottom bar.
                </p>
                <p>
                  Portfolio Mode lets you view information about myself, the courses I've taken, and the projects I have worked on. <br></br>
                  Music Mode lets you view and listen to the music I make, as well as see some music I recommend.<br></br>
                  Review Mode is stil under construction.
                </p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Development</h3>
              <div style={{
                textAlign: "left"
              }}>
                <a href = "https://github.com/Nolen-Young/Website">GitHub repository</a>
                <p>
                  I developed this website from scratch by myself, for myself. Here is a list of some of the technologies I used:
                </p>
                <p>
                  HTML, CSS, Javascript, Git, React, Babel, Nodemon, JSX, Bootstrap, Font Awesome, VS Code, MongoDB
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-color-theme" onClick={this.toggleAbout}>OK</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div onClick={this.handleClick}>
        <NavBar
          title={modeTitle[this.state.mode]}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}
          professionalMode={this.state.professionalMode}
          changeProfessionalMode={this.handleChangeProfessionalMode}/> 
        <SideMenu
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          changeMode={this.handleChangeMode}
          showAbout={this.toggleAbout}
          professionalMode={this.state.professionalMode}
          changeProfessionalMode={this.handleChangeProfessionalMode}/> 
        <ModeBar
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          professionalMode={this.state.professionalMode}
          changeProfessionalMode={this.handleChangeProfessionalMode}/> 
        <ModePage
          menuOpen={this.state.menuOpen}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          professionalMode={this.state.professionalMode}
          changeProfessionalMode={this.handleChangeProfessionalMode}/> 
        {this.state.showAbout
          ? this.renderAbout()
          : null}
      </div>
    );
  }
}

export default App;
