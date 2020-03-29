import React from 'react';
import ReactPlayer from 'react-player';

// *****************************************************
// This class contains the code to render the about my music
// *****************************************************
class MusicPageMyMusic extends React.Component {

	render() {
	  return (
		<div id = "myMusicPage">
			<div id = "header" className = "center">
				<h1>Music I've Made</h1>
		  	</div>
			<div className = " music-players center ">
				<table className = "music-table">
					<thead className = " music-table-header ">
						<tr className = "music-table-row">
							<th className = "music-table-song-titles">Song Title</th>
							<th className = "music-table-pseudonym">Released Under Pseudonym</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<tr className = "music-table-row ">
							<td className = "music-table-song-titles">Dark</td>
							<td className = "music-table-pseudonym">South of Sound</td>
							<td><ReactPlayer url = "https://soundcloud.com/southofsound/dark" width = "100%" height = "100px"/></td>
						</tr>
						<tr className = "music-table-row ">
							<td className = "music-table-song-titles">Call Out My Name (DJ BEEF Remix)</td>
							<td className = "music-table-pseudonym">DJ BEEF</td>
							<td><ReactPlayer url = "https://soundcloud.com/user-243943999/the-weeknd-call-out-my-name-dj-beef-remix" width = "100%" height = "100px"/></td>
						</tr>
					</tbody>
					<tfoot/>
				</table>
			</div>
		</div>
	  );
	}
  }
  
  export default MusicPageMyMusic;