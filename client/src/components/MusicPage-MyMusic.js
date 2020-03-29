import React from 'react';
import ReactPlayer from 'react-player';

// *****************************************************
// This class contains the code to render the about my music
// *****************************************************
class MusicPageMyMusic extends React.Component {

	render() {
	  return (
		<div>
			<div id = "header" className = "center">
				<h1>Music I've Made</h1>
		  	</div>
			<div className = " music-players center ">
				<table className = "my-table">
					<tr>
						<th>Song Title</th>
						<th>Released Under Pseudonym</th>
						<th>Play</th>
					</tr>
					<tr>
						<td>Dark</td>
						<td>South of Sound</td>
						<td><ReactPlayer url = "https://soundcloud.com/southofsound/dark" height = "100px"/></td>
					</tr>
					<tr>
						<td>Call Out My Name (DJ BEEF Remix)</td>
						<td>DJ BEEF</td>
						<td><ReactPlayer url = "https://soundcloud.com/user-243943999/the-weeknd-call-out-my-name-dj-beef-remix" height = "100px"/></td>
					</tr>
					
				</table>
			</div>
		</div>
	  );
	}
  }
  
  export default MusicPageMyMusic;