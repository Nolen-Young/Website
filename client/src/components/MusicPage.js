import React from "react";
import MusicPageMode from "./MusicPageMode.js";
import MusicPageMyMusic from "./MusicPage-MyMusic.js";
import MusicPageOtherMusic from "./MusicPage-OtherMusic.js";

// defines a dictionary of modes as keys and pages as definitions
const musicPageModeToPage = {};
musicPageModeToPage[MusicPageMode.MYMUSIC] = MusicPageMyMusic;
musicPageModeToPage[MusicPageMode.OTHERMUSIC] = MusicPageOtherMusic;
// *****************************************************
// This class contains the code to render the music mode pages.
// *****************************************************
class MusicPage extends React.Component {
	render() {
		//this.state.musicMode = this.props.musicMode; // set state as the musicMode from app.js, passed by props
		//this.setState({musicMode: this.props.musicMode});
		console.log("MUSIC PAGE - MUSIC MODE: " + this.props.musicMode);
		const MusicPageRender = musicPageModeToPage[this.props.musicMode]; // get the page to render

		// renders the proper pages, passing in props
		return (
			<div className='padded-page center'>
				<MusicPageRender
					musicMode={this.props.musicMode}
					changeMusicMode={this.props.handleChangeMusicMode}
					mode={this.props.mode}
					changeMode={this.handleChangeMode}
				/>

				<footer className='bottom center'>
					<p style={{ fontStyle: "italic" }}>
						&copy; 2020 Nolen Young. No rights reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default MusicPage;
