import React from 'react';
import MusicPageMode from "./MusicPageMode.js"
import MusicPageMyMusic from './MusicPage-MyMusic.js'
import MusicPageOtherMusic from './MusicPage-OtherMusic.js'
import MusicPageTools from './MusicPage-Tools.js'

const musicPageModeToPage = {};
musicPageModeToPage[MusicPageMode.MYMUSIC] = MusicPageMyMusic;
musicPageModeToPage[MusicPageMode.OTHERMUSIC] =MusicPageOtherMusic;
musicPageModeToPage[MusicPageMode.TOOLS] = MusicPageTools;

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
    this.state.musicMode = this.props.musicMode;
    console.log(this.state.musicMode);
    const MusicPageRender = musicPageModeToPage[this.state.musicMode];
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