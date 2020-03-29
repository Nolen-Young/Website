import React from 'react';

class ProfessionalPageProjects extends React.Component {

	render() {
	  return (
		<div>
		  <div id = "header" className = "center">
			<h1>Projects</h1>
		  </div>
  
		  <div id = "body">
			<h3>Personal Projects</h3>
			<table className = "my-table">
				<tr>
					<td className = "my-table-data">
						<h5>This Website</h5>
						<div className = "github-link"><a href = "https://github.com/Nolen-Young/Website" className = "fa fa-github"></a></div>
						<p>
							I built this website on my own, using knowledge that I had gained from a few of my classes throughout
							my time at Washington State University. I primarily used React to develope most of this front end from scratch.
							Some of the other things I am using to develope this web app are: <br></br>
							HTML, CSS, Javascript, Git, React, Babel, Nodemon, JSX, Bootstrap, Font Awesome, VS Code, MongoDB<b></b>
							Currently, the production build does not contain any server, but I am working on that in my free time and it is coming soon.
						</p>
					</td>
					<td className = "my-table-data"> 
						<h5>ArduPilot Mission Planner 3D Viewer and VR</h5>
						<div className = "github-link"><a  href = "https://github.com/Mission-Planner-3D/3D-Viewer" className = "fa fa-github fa-9x"></a></div>
						<p>
							For my capstone projected I, and three other students, decided to work on expanding the open source drone mission planning software
							ArduPilot Mission Planning. Our goal is to expand the functionality of MissionPlanner to be able to plan missions in a 3D environment
							of the real world. Currently, ArduPilot Mission Planner is only a top down, 2D, Google Maps style environment. Our delivery goal will be to
							release the finished project for free, open sourced, on GitHub. I have mainly been working on the rendering of the 3D environment. I have been
							using data from ArcGIS and Open Street Maps to render real world terrain and buildings accurately in Unity. The software is also
							going to be VR ready and we are developing the software with an Occulus Rift S.
						</p>
					</td>
				</tr>
				<tr>
					<td className = "my-table-data"> 
						<h5>LED Light Strip Music Visualizer</h5>
						<p>
							Using a Raspberry PI, an individually-addressible LED light strip, and Python 3, I made a live music visualization of the frequencies and
							amplitude of music being picked up by my laptop mic. It visuallizes the energy of the music in real time using colors and brightness on the
							LEDs. I had to learn Digital Signal Processing algorithms to do this, and that was a very fun, but very difficult challenge for me.
						</p>
					</td>
				</tr>
			</table>
			<h3>Some School Projects</h3>
			<table>
				<tr>
					<td className = "my-table-data">
						<h5>Student Attributes and Grades Data Mining</h5>
						<div className = "github-link"><a  href = "insert github repo link here" className = "fa fa-github fa-9x"></a></div>
						<p>
							Using Python with some packages, I was able to run market-basket analysis on a large dataset from Kaggle containing attributes about students
							and some test scores. The results were very confident in that the largest indicator a student might perform poorly was if the student
							used free or reduced lunch or not.
						</p>
					</td>
					<td className = "my-table-data"> 
						<h5>Smile Social Media Platform</h5>
						<div className = "github-link"><a  href = "insert github repo link here" className = "fa fa-github fa-9x"></a></div>
						<p>
							For my CptS 355 class, I made a working social media platform called Smile. It allowed users to like posts, make posts, delete posts, follow users,
							and much more. I developed the entire thing front end to back end, and this was my first real exposure to full stack web developement. We used
							Heroku, Javascript, Jquery, HTML, and CSS to develope the whole thing.
						</p>
					</td>
				</tr>
			</table>
			<table>
				<tr>
					<td className = "my-table-data">
						<h5>Parallel Computing Algorithms</h5>
						<div className = "github-link"><a  href = "insert github repo link here" className = "fa fa-github fa-9x"></a></div>
						<p>
							In my parallel computing class, I had to write many parallel programming algorithms by hand in C, and using SLURM to control
							a computation cluster. I had to write my own library of reduce, broadcast, and more functions to write sorting algorithms, graph algorthms, 
							tree algorithms, and more. The library I build up of these algorithms is some of my favorite work.
						</p>
					</td>
					<td className = "my-table-data"> 
						<h5>The Rest of My School Work</h5>
						<div className = "github-link"><a  href = "insert github repo link here" className = "fa fa-github fa-9x"></a></div>
						<p>
							I have done many projects in my time at WSU. You can see most of the work I have done at school on my GitHub. I am adding more
							work as I find relevant old files, so it will be continually updated with more of my work.
						</p>
					</td>
				</tr>
			</table>
		  </div>
		</div>
	  );
	}
  }
  
  export default ProfessionalPageProjects;