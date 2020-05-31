import React from "react";
import axios from "axios";
import OtherMusicTable from "./MusicPage-OtherMusicTable";

// *****************************************************
// This class contains the code to render the other music page.
// *****************************************************
class MusicPageOtherMusic extends React.Component {
	constructor(props) {
		super(props);

		this.fetchOtherMusic = this.fetchOtherMusic.bind(this);

		this.state = {
			songs: [],
		};
	}

	componentDidMount() {
		this.fetchOtherMusic();
	}

	fetchOtherMusic = async () => {
		axios
			.get("/othermusic/")
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({
						songs: response.data.map((song) => [
							song.title,
							song.artist,
							song.link,
						]),
					});
				}
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	render() {
		return (
			<div id='otherMusicPage'>
				<div id='header' className='center'>
					<h1>Music I Am Listening To A Lot</h1>
				</div>
				<OtherMusicTable songs={this.state.songs} />
			</div>
		);
	}
}

export default MusicPageOtherMusic;
