import React from "react";
import ReactPlayer from "react-player";

class MyMusicTable extends React.Component {
	renderTable = () => {
		let table = [];
		console.log("LENGTH: " + this.props.songs.length);
		for (let p = 0; p < this.props.songs.length; ++p) {
			table.push(
				<tr key={p}>
					<td className='music-table-song-titles'>{this.props.songs[p][0]}</td>
					<td className='music-table-pseudonym'>{this.props.songs[p][1]}</td>
					<td>
						<ReactPlayer
							url={this.props.songs[p][2]}
							width='100%'
							height='100px'
						/>
					</td>
				</tr>
			);
		}
		return table;
	};

	render() {
		return (
			<div className=' music-players center '>
				<table className='music-table'>
					<thead className=' music-table-header '>
						<tr className='music-table-row'>
							<th className='music-table-song-titles'>Song Title</th>
							<th className='music-table-pseudonym'>
								Released Under Pseudonym
							</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.songs).length === 0 ? (
							<tr>
								<td colSpan='3'>No content :(</td>
							</tr>
						) : (
							this.renderTable()
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default MyMusicTable;

// Old table rendering logic for reference
/* <div className = " music-players center ">
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
			</div> */
