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
      professionalMode: props.professionalMode
    };
  }

  render() {
    this.state.professionalMode = this.props.professionalMode;
    console.log(this.state.professionalMode);
    const ProfessionalPageRender = professionalPageModeToPage[this.state.professionalMode];
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