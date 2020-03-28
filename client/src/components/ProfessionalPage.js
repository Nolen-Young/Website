import React from 'react';
import ProfessionalPageMode from './ProfessionalPageMode';
import ProfessionalPageAboutMe from './ProfessionalPage-AboutMe';
import ProfessionalPageCourses from './ProfessionalPage-Courses';
import ProfessionalPageProjects from './ProfessionalPage-Projects';


const professionalPageModeToPage = {};
professionalPageModeToPage[ProfessionalPageMode.ABOUTME] = ProfessionalPageAboutMe;
professionalPageModeToPage[ProfessionalPageMode.COURSES] = ProfessionalPageCourses;
professionalPageModeToPage[ProfessionalPageMode.PROJECTS] = ProfessionalPageProjects;

class ProfessionalPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      menuOpen: props.menuOpen,
      professionalMode: ProfessionalPageMode.ABOUTME
    };
  }

  render() {
    console.log(this.state.professionalMode)
    const ProfessionalPageRender = professionalPageModeToPage[this.state.professionalMode]
    console.log(ProfessionalPageRender)
    return (
      <ProfessionalPageRender
          menuOpen={this.state.menuOpen}
          professionalMode={this.state.professionalMode}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}/>


      /*
      <div className="padded-page center">
        <div id = "header">
          <h1>About Me</h1>
        </div>

        <div id = "body">
          <p>
            Hello. Welcome to my website.
          </p>
        </div>
        
        <div id = "footer" className = "bottom right">
          <p style={{
            fontStyle: "italic"
          }}>
            &copy; 2020 Nolen Young. No rights reserved.</p>
        </div>
      </div>
      */
    );
  }
}

export default ProfessionalPage;