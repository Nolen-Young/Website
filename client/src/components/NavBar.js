import React from 'react';
import AppMode from '../AppMode.js';


// *****************************************************
// This class defines the rendering of the top nav bar
// ***************************************************** 
class NavBar extends React.Component {

  // handles what to do when the menu button is clicked
  handleMenuBtnClick = () => {
    if (this.props.mode === AppMode.REVIEW_NEWREVIEW) {
      this.props.changeMode(AppMode.REVIEW);
    } else {
      this.props.toggleMenuOpen();
    }
  }

  // displays the proper menu button icon depending on state
  getMenuBtnIcon = () => {
    if (this.props.mode === AppMode.REVIEW_NEWREVIEW) 
      return "fa fa-arrow-left";
    if (this.props.menuOpen) 
      return "fa fa-times";
    return "fa fa-bars";
  }

  render() {
    return (
      <div className="navbar">
        <span className="navbar-items">
          <button className="sidemenu-btn" onClick={this.handleMenuBtnClick}>
            <span
              id="sidemenu-btn-icon"
              className={"sidemenu-btn-icon " + this.getMenuBtnIcon()}></span>
          </button>
          <span id="topBarTitle" className="navbar-title">
            &nbsp;{this.props.title}
          </span>
        </span>
      </div>
    );
  }
}

export default NavBar;