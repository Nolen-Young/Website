import React from 'react';
import ProfessionalPageMode from './ProfessionalPageMode';
import ProfessionalPageAboutMe from './ProfessionalPage-AboutMe';
import ProfessionalPageCourses from './ProfessionalPage-Courses';
import ProfessionalPageProjects from './ProfessionalPage-Projects';


// dictionary of modes as keys and pages as definitions 
const professionalPageModeToPage = {};
professionalPageModeToPage[ProfessionalPageMode.ABOUTME] = ProfessionalPageAboutMe;
professionalPageModeToPage[ProfessionalPageMode.COURSES] = ProfessionalPageCourses;
professionalPageModeToPage[ProfessionalPageMode.PROJECTS] = ProfessionalPageProjects;

// *****************************************************
// This class contains the code to render the correct page
// depending on the current professionalMode.
// It renders the about page, courses page, and projects page.
// ***************************************************** 
class ProfessionalPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      menuOpen: props.menuOpen,
      professionalMode: props.professionalMode
    };
  }

  render() {
    this.state.professionalMode = this.props.professionalMode; // get the current mode passed up from App.js
    const ProfessionalPageRender = professionalPageModeToPage[this.state.professionalMode]; // get the correct mode

    // renders the ProfessionPageRender item which
    // will be the correct page for depending on the professionalMode
    return (
      <div className = "padded-page">
        <ProfessionalPageRender
            menuOpen={this.state.menuOpen}
            professionalMode={this.state.professionalMode}
            changeProfessionalMode={this.state.handleChangeProfessionalMode}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}/>

          <div id = "footer" className = "bottom center">
            <p style={{
              fontStyle: "italic"
            }}>
              &copy; 2020 Nolen Young. No rights reserved.</p>
          </div>
        </div>
    );
  }
}

export default ProfessionalPage;