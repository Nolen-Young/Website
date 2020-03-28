import React from 'react';

class ProfessionalPageAboutMe extends React.Component {

	render() {
	  return (
		<div className="padded-page center">
		  <div id = "header">
			<h1>About Me</h1>
			<h2>Page under construction</h2>
		  </div>
		  
		  <div id = "body">
			<p>
			  Hello. Welcome to my website.
			</p>

			<p>
			  This is the about me page.
			</p>
		  </div>
		  
		  <div id = "footer" className = "bottom right">
			<p style={{
			  fontStyle: "italic"
			}}>
			  &copy; 2020 Nolen Young. No rights reserved.</p>
		  </div>
		</div>
	  );
	}
  }
  
  export default ProfessionalPageAboutMe;