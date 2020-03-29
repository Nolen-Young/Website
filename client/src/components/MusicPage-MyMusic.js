import React from 'react';
import ReactPlayer from 'react-player';

class MusicPageMyMusic extends React.Component {

	render() {
	  return (
		<div>
			<div id = "header" className = "center">
				<h1>Music I've Made</h1>
		  	</div>
			<div className = "music-players">
				
				<ReactPlayer url = "https://soundcloud.com/southofsound/dark" width = "100%"/>

				 
				<ReactPlayer url = "https://soundcloud.com/user-243943999/the-weeknd-call-out-my-name-dj-beef-remix" width = "100%"/>
			</div>
		</div>
	  );
	}
  }
  
  export default MusicPageMyMusic;