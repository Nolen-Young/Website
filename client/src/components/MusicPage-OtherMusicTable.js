import React from "react";
import ReactPlayer from "react-player";

class OtherMusicTable extends React.Component {
	renderTable = () => {
		let table = [];
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
							<th className='music-table-pseudonym'>Artist</th>
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

export default OtherMusicTable;

// old table for reference
/* <div className=' music-players center '>
	<table className='music-table'>
		<thead className=' music-table-header '>
			<tr className='music-table-row'>
				<th className='music-table-song-titles'>Song Title</th>
				<th className='music-table-pseudonym'>Artist</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
			<tr className='music-table-row '>
				<td className='music-table-song-titles'>Doorman</td>
				<td className='music-table-pseudonym'>Slowthai</td>
				<td>
					<ReactPlayer
						url='https://soundcloud.com/slowthai/doorman?in=slowthai/sets/nothing-great-about-britain-2'
						width='100%'
						height='100px'
					/>
				</td>
			</tr>
			<tr className='music-table-row '>
				<td className='music-table-song-titles'>8 (circle)</td>
				<td className='music-table-pseudonym'>Bon Iver</td>
				<td>
					<ReactPlayer
						url='https://soundcloud.com/boniver/8-circle'
						width='100%'
						height='100px'
					/>
				</td>
			</tr>
			<tr className='music-table-row '>
				<td className='music-table-song-titles'>It Might Be Time</td>
				<td className='music-table-pseudonym'>Tame Impala</td>
				<td>
					<ReactPlayer
						url='https://soundcloud.com/tame-impala/it-might-be-time?in=tame-impala/sets/the-slow-rush'
						width='100%'
						height='100px'
					/>
				</td>
			</tr>
			<tr className='music-table-row '>
				<td className='music-table-song-titles'>
					Things It Would Have Been Helpful To Know Before The Revolution
				</td>
				<td className='music-table-pseudonym'>Father John Mist</td>
				<td>
					<ReactPlayer
						url='https://soundcloud.com/fatherjohnmisty/things-it-would-have-been-helpful-to-know-before-the-revolution'
						width='100%'
						height='100px'
					/>
				</td>
			</tr>
			<tr className='music-table-row '>
				<td className='music-table-song-titles'>Love It If We Made It</td>
				<td className='music-table-pseudonym'>The 1975</td>
				<td>
					<ReactPlayer
						url='https://soundcloud.com/the1975/love-it-if-we-made-it?in=the1975/sets/a-brief-inquiry-into-online-1'
						width='100%'
						height='100px'
					/>
				</td>
			</tr>
		</tbody>
		<tfoot />
	</table>
</div>; */
