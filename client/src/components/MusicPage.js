import React from 'react';
import MusicPageMode from "./MusicPageMode.js"
import MusicPageMyMusic from './MusicPage-MyMusic.js'
import MusicPageOtherMusic from './MusicPage-OtherMusic.js'
import MusicPageTools from './MusicPage-Tools.js'

// defines a dictionary of modes as keys and pages as definitions
const musicPageModeToPage = {};
musicPageModeToPage[MusicPageMode.MYMUSIC] = MusicPageMyMusic;
musicPageModeToPage[MusicPageMode.OTHERMUSIC] =MusicPageOtherMusic;
musicPageModeToPage[MusicPageMode.TOOLS] = MusicPageTools;

// *****************************************************
// This class contains the code to render the music mode pages.
// *****************************************************
class MusicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      menuOpen: props.menuOpen,
      musicMode: props.musicMode
    };
  }

  render() {
    this.state.musicMode = this.props.musicMode; // set state as the musicMode from app.js, passed by props
    //this.setState({musicMode: this.props.musicMode});
    const MusicPageRender = musicPageModeToPage[this.state.musicMode]; // get the page to render

    // renders the proper pages, passing in props
    return (
      <div className="padded-page center">
        <MusicPageRender
          menuOpen={this.state.menuOpen}
          musicMode={this.state.musicMode}
          changeMusicMode={this.state.handleChangeMusicMode}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}/>

        <div id = "footer" className = "bottom center">
            <p style={{
              fontStyle: "italic"
            }}>
              &copy; 2020 Nolen Young. No rights reserved.</p>
          </div>
      </div>
    );
  }
}

export default MusicPage;