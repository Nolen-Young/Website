import React from 'react';
import AppMode from './../AppMode.js';
import ProfessionalPageMode from './ProfessionalPageMode.js';
import MusicPageMode from './MusicPageMode.js'

class SideMenu extends React.Component {

  handleMenuBtnClick = (newMode) => {
    switch(this.props.mode) {
      case AppMode.PROFESSIONAL:
        if (this.props.professionalMode !== newMode) {
          this.props.changeProfessionalMode(newMode);
        }
        break;
      case AppMode.MUSIC:
        if (this.props.musicMode !== newMode) {
          this.props.changeMusicMode(newMode);
        }
        break;
      default:
        break;
    }
  }

  // renderModeItems -- Renders correct subset of mode menu items based on current
  // mode, which is stored in this.prop.mode. Uses switch statement to determine
  // mode.
  renderModeMenuItems = () => {
    switch (this.props.mode) {
      case AppMode.PROFESSIONAL:
        return (
          <div>
            <a className={(this.props.professionalMode === ProfessionalPageMode.ABOUTME
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(ProfessionalPageMode.ABOUTME)}>
              <span className="fa fa-user"></span>&nbsp;About Me</a>
            <a className={(this.props.professionalMode === ProfessionalPageMode.COURSES
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(ProfessionalPageMode.COURSES)}>
              <span className="fa fa-clipboard"></span>&nbsp;Courses</a>
            <a className={(this.props.professionalMode === ProfessionalPageMode.PROJECTS
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(ProfessionalPageMode.PROJECTS)}>
              <span className="fa fa-code"></span>&nbsp;Projects</a>
          </div>
        );
        break;
      case AppMode.MUSIC:
        return (
          <div>
            <a className={(this.props.musicMode === MusicPageMode.MYMUSIC
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(MusicPageMode.MYMUSIC)}>
              <span className="fa fa-music"></span>&nbsp;Music I've Made</a>
              
            <a className={(this.props.musicMode === MusicPageMode.OTHERMUSIC
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(MusicPageMode.OTHERMUSIC)}>
              <span className="fa fa-search"></span>&nbsp;Other People's Music</a>

            <a className={(this.props.musicMode === MusicPageMode.TOOLS
              ? " sidemenu-item-selected "
              : " sidemenu-item ")}
              onClick={ () => this.handleMenuBtnClick(MusicPageMode.TOOLS)}>
              <span className="fa fa-wrench"></span>&nbsp;Production Tools</a>
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
          <span className="fa fa-info-circle"></span>&nbsp;About This Website</a>
      </div>
    );
  }
}

export default SideMenu;