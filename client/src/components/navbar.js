import React from 'react';
import AppMode from '../AppMode.js';

// ***********************************
// This class renders and handles the NavBar component
// ***********************************
class NavBar extends React.Component {

	// Handles what to do when the menu button is clicked
    handleMenuBtnClick = () => {
      if (this.props.mode === AppMode.FAVORITE_NEWREVIEW) {
        this.props.changeMode(AppMode.REVIEW);
      } else if (this.props.mode !== AppMode.LOGIN) {
        this.props.toggleMenuOpen();
      }
    }

	// displas the proper logo for the menu given the app state
    getMenuBtnIcon = () => {
      if (this.props.mode === AppMode.REVIEW_NEWREVIEW)
          return "fa fa-arrow-left";
      if (this.props.menuOpen)
        return "fa fa-times";
      return "fa fa-bars";
    }

	// renders the menu
    render() {
       return (
        <div className="navbar">  
        <span className="navbar-items">
          <button className="sidemenu-btn" onClick={this.handleMenuBtnClick}>
            <span id="sidemenu-btn-icon" 
              className={"sidemenu-btn-icon " + this.getMenuBtnIcon()}>
            </span>
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