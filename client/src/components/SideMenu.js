import React from 'react';
import AppMode from '../AppMode.js';

class SideMenu extends React.Component {

  // renderModeItems -- Renders correct subset of mode menu items based on current
  // mode, which is stored in this.prop.mode. Uses switch statement to determine
  // mode.
  renderModeMenuItems = () => {
    console.log(this.props.mode);
    switch (this.props.mode) {
      case AppMode.PROFESSIONAL:
        return (
          <div>
            <a className="sidemenu-item">
              <span className="fa fa-user"></span>&nbsp;About Me</a>
            <a className="sidemenu-item">
              <span className="fa fa-clipboard"></span>&nbsp;Courses</a>
            <a className="sidemenu-item">
              <span className="fa fa-code"></span>&nbsp;Projects</a>
          </div>
        );
        break;
      case AppMode.MUSIC:
        return (
          <div>
            <a className="sidemenu-item">
              <span className="fa fa-music"></span>&nbsp;My Music</a>
            <a className="sidemenu-item">
              <span className="fa fa-search"></span>&nbsp;Other People's Music</a>
          </div>
        );
        break;
      case AppMode.REVIEW:
        return (
          <div>
            <a className="sidemenu-item">
              <span className="fa fa-th-list"></span>&nbsp;Reviews</a>
            <a className="sidemenu-item">
              <span className="fa fa-plus"></span>&nbsp;Leave a Review</a>
          </div>
        );
        break;
      default:
        return null;
    }
  }

  render() {
    return (
      <div
        className={"sidemenu " + (this.props.menuOpen
        ? "sidemenu-open"
        : "sidemenu-closed")}>
        {/* SIDE MENU TITLE */}
        <div className="sidemenu-title">
          <span className="sidemenu-userID">Nolen Young's Website</span>
        </div>
        {/* MENU CONTENT */}
        {/*Mode-based menu items */}
        {this.renderModeMenuItems()}
        {/* Always-there menu items */}
        <a className="sidemenu-item" onClick={this.props.showAbout}>
          <span className="fa fa-info-circle"></span>&nbsp;About</a>
      </div>
    );
  }
}

export default SideMenu;
