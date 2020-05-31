import React from "react";
import axios from "axios";
import MyMusicTable from "./MusicPage-MyMusicTable";

// ***************************************************** This class contains the
// code to render the my music page
// *****************************************************
class MusicPageMyMusic extends React.Component {
	constructor(props) {
		super(props);

		this.fetchMyMusic = this.fetchMyMusic.bind(this);

		this.state = {
			songs: [],
		};
	}

	fetchMyMusic = async () => {
		axios
			.get("http://localhost:5000/mymusic/")
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

	componentDidMount() {
		this.fetchMyMusic();
	}

	render() {
		return (
			<div id='myMusicPage'>
				<div id='header' className='center'>
					<h1>Music I've Made</h1>
				</div>
				<MyMusicTable songs={this.state.songs} />
			</div>
		);
	}
}

export default MusicPageMyMusic;
