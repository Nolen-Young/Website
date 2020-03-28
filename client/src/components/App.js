import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import AppMode from './../AppMode.js';
import ProfessionalPage from './ProfessionalPage.js'
import MusicPage from './MusicPage.js'
import ReviewPage from './ReviewPage.js'

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
      menuOpen: false,
      showAbout: false
    };
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
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
      <div className="modal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                <b>About IA5</b>
                <button className="close-modal-button" onClick={this.toggleAbout}>
                  &times;</button>
              </h3>
            </div>
            <div className="modal-body">
              <h3>IA5, The world's first favorite color storing app</h3>
              <div style={{
                textAlign: "left"
              }}>
                <p>
                  I made this app for class!
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
          toggleMenuOpen={this.toggleMenuOpen}/>
        <SideMenu
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          changeMode={this.handleChangeMode}
          showAbout={this.toggleAbout}/>
        <ModeBar
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}/>
        <ModePage
          menuOpen={this.state.menuOpen}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}/> {this.state.showAbout
          ? this.renderAbout()
          : null}
      </div>
    );
  }
}

export default App;
