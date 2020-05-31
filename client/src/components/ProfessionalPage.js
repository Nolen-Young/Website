import React from "react";
import ProfessionalPageMode from "./ProfessionalPageMode";
import ProfessionalPageAboutMe from "./ProfessionalPage-AboutMe";
import ProfessionalPageCourses from "./ProfessionalPage-Courses";
import ProfessionalPageProjects from "./ProfessionalPage-Projects";

// dictionary of modes as keys and pages as definitions
const professionalPageModeToPage = {};
professionalPageModeToPage[
	ProfessionalPageMode.ABOUTME
] = ProfessionalPageAboutMe;
professionalPageModeToPage[
	ProfessionalPageMode.COURSES
] = ProfessionalPageCourses;
professionalPageModeToPage[
	ProfessionalPageMode.PROJECTS
] = ProfessionalPageProjects;

// *****************************************************
// This class contains the code to render the correct page
// depending on the current professionalMode.
// It renders the about page, courses page, and projects page.
// *****************************************************
class ProfessionalPage extends React.Component {
	render() {
		const ProfessionalPageRender =
			professionalPageModeToPage[this.props.professionalMode]; // get the correct mode

		// renders the ProfessionPageRender item which
		// will be the correct page for depending on the professionalMode
		return (
			<div className='padded-page'>
				<ProfessionalPageRender
					menuOpen={this.props.menuOpen}
					professionalMode={this.props.professionalMode}
					changeProfessionalMode={this.props.handleChangeProfessionalMode}
					mode={this.props.mode}
					changeMode={this.handleChangeMode}
				/>

				<footer className='bottom center'>
					<p style={{ fontStyle: "italic" }}>
						&copy; 2020 Nolen Young. No rights reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default ProfessionalPage;
