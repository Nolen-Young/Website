import React from 'react';

// ***************************************************** 
// This class contains the code to render the about me page.
// *****************************************************
class ProfessionalPageAboutMe extends React.Component {

  render() {
    return (
      <div>
        <div id="header " className="center">
          <h1>About Me</h1>
          <img src="that good pic.jpg" width="200" height="200"></img>
        </div>

        <div id="body">
          <h3>
            Welcome
          </h3>
          <p>
            Hello. Welcome to my website.
          </p>
          <p>
            My name is Nolen.
          </p>
          <p>
            I made this website from scratch, by myself, for myself
          </p>
          <p>
            If you want to know how to use this website, or a little bit more about how this
            website was made, click the menu button in the top left, then select the 'About
            This Website' menu option.
          </p>

          <h3>
            About Me
          </h3>
          <p>
            My name is Nolen Young. I am currently a senior in Computer Science at
            Washington State University. I will be graduating and earning my bachelors
            degree this May. I grew up in Olympia, Washington, and graduated from Olympia
            High School in 2016.
          </p>
          <p className = "links">
            <a href="https://github.com/Nolen-Young" className = "fa fa-github link" ></a>
			
            <a href="https://www.linkedin.com/in/nolen-young/" className = "fa fa-linkedin link"></a>

			<a href="https://www.instagram.com/noleny/" className = "fa fa-instagram link"></a>

			<a href="https://soundcloud.com/southofsound" className = "fa fa-soundcloud link"></a>

			<a href="https://soundcloud.com/user-243943999" className = "fa fa-soundcloud link"></a>
          </p>
        </div>
      </div>
    );
  }
}

export default ProfessionalPageAboutMe;