import React from "react";
import axios from "axios";
// *****************************************************
// This class contains the code to render the projects page.
// *****************************************************
class ProfessionalPageProjects extends React.Component {
	constructor(props) {
		super(props);

		this.fetchProjects = this.fetchProjects.bind(this);
		this.renderProject = this.renderProject.bind(this);

		this.state = {
			projects: [],
		};
	}

	componentDidMount() {
		this.fetchProjects();
	}

	fetchProjects = async () => {
		axios
			.get("http://localhost:5000/projects/")
			.then((res) => {
				if (res.data.length > 0) {
					this.setState({
						projects: res.data.map((project) => [
							project.title,
							project.description,
							project.link,
						]),
					});
				}
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	renderProject = (project) => {
		return (
			<div key={project[0]}>
				<h5>{project[0]}</h5>
				<div className='links'>
					<a href={project[2]} className='fa fa-github link'></a>
				</div>
				<p>{project[1]}</p>
			</div>
		);
	};

	render() {
		return (
			<React.Fragment>
				<div id='header' className='center'>
					<h1>Projects</h1>
				</div>
				<div id='body'>
					{Object.keys(this.state.projects).length === 0 ? (
						<h3>No Content</h3>
					) : (
						this.state.projects
							.reverse()
							.map((project) => this.renderProject(project))
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default ProfessionalPageProjects;
