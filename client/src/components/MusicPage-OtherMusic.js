import React from "react";
import ReactPlayer from "react-player";

// *****************************************************
// This class contains the code to render the other music page.
// *****************************************************
class MusicPageOtherMusic extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Other People's Music I Like</h1>
				</div>
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
									Things It Would Have Been Helpful To Know Before The
									Revolution
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
								<td className='music-table-song-titles'>
									Love It If We Made It
								</td>
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
				</div>
			</div>
		);
	}
}

export default MusicPageOtherMusic;
