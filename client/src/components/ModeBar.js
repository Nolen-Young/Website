import React from 'react';
import AppMode from '../AppMode.js';

class ModeBar extends React.Component {

  handleModeBtnClick = (newMode) => {
    if (this.props.mode !== newMode) {
      this
        .props
        .changeMode(newMode);
    }
  }

  render() {
    return (
      <div
        className={"modebar" + (this.props.mode === AppMode.LOGIN
        ? " invisible"
        : " visible")}>

        <a
          className={"modebar-btn" + (this.props.mode === AppMode.PROFESSIONAL
          ? " modebar-item-selected"
          : "")}
          onClick={this.props.menuOpen
          ? null
          : () => this.handleModeBtnClick(AppMode.PROFESSIONAL)}>
          <span
            className={" nonMenuItem fa fa-user " + (this.props.mode === AppMode.PROFESSIONAL
            ? "modebar-icon-selected"
            : "modebar-icon")}></span>
          <span
            className={"modebar-text " + (this.props.mode === AppMode.PROFESSIONAL
            ? "modebar-text-selected"
            : "modebar-text")}>
            My Portfolio</span>
        </a>

        <a
          className={"modebar-btn" + (this.props.mode === AppMode.MUSIC
          ? " modebar-item-selected"
          : "")}
          onClick={this.props.menuOpen
          ? null
          : () => this.handleModeBtnClick(AppMode.MUSIC)}>
          <span
            className={" nonMenuItem fa fa-music " + (this.props.mode === AppMode.MUSIC
            ? "modebar-icon-selected"
            : "modebar-icon")}></span>
          <span
            className={"modebar-text " + (this.props.mode === AppMode.MUSIC
            ? "modebar-text-selected"
            : "modebar-text")}>
            My Music</span>
        </a>

        <a
          className={"modebar-btn" + (this.props.mode === AppMode.REVIEW
          ? " modebar-item-selected"
          : "")}
          onClick={this.props.menuOpen
          ? null
          : () => this.handleModeBtnClick(AppMode.REVIEW)}>
          <span
            className={" nonMenuItem fa fa-th-list " + (this.props.mode === AppMode.REVIEW
            ? "modebar-icon-selected"
            : "modebar-icon")}></span>
          <span
            className={"modebar-text " + (this.props.mode === AppMode.REVIEW
            ? "modebar-text-selected"
            : "modebar-text")}>
            Reviews</span>
        </a>
      </div>
    );
  }

}

export default ModeBar;
