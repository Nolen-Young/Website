import React from "react";
import axios from "axios";

// *****************************************************
// This class contains the code to render the courses page.
// *****************************************************
class ProfessionalPageCourses extends React.Component {
	constructor(props) {
		super(props);

		this.fetchCourses = this.fetchCourses.bind(this);
		this.renderCourse = this.renderCourse.bind(this);

		this.state = {
			courses: [],
		};
	}

	componentDidMount() {
		this.fetchCourses();
	}

	fetchCourses = async () => {
		axios
			.get("/courses/")
			.then((res) => {
				if (res.data.length > 0) {
					this.setState({
						courses: res.data.map((course) => [course.title]),
					});
				}
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	renderCourse = (course) => {
		return (
			<React.Fragment key={course[0]}>
				{course[0]}
				<br />
			</React.Fragment>
		);
	};

	render() {
		return (
			<div>
				<div id='header' className='center'>
					<h1>Relevant Courses</h1>
				</div>

				<div id='body' className='center'>
					{Object.keys(this.state.courses).length === 0 ? (
						<p>No Content</p>
					) : (
						<p>
							{this.state.courses.map((course) => this.renderCourse(course))}
						</p>
					)}
				</div>
			</div>
		);
	}
}

export default ProfessionalPageCourses;

// old code for safe keeping
// Algorithmic Problem Solving<br />
// Professional Skills Computing Engineering<br />
// Program Design and Development C/C++<br />
// Introduction to Data Mining<br />
// Data Structures C/C++<br />
// Object Oriented Software Principles<br />
// Advanced Data Structures C/C++<br />
// Software Engineering 1<br />
// Introduction to Computer Architecture<br />
// Programming Language Design<br />
// Big Data<br />
// Senior Design 1 + 2<br />
// Formal Languages and Automata<br />
// Introduction to Parallel Computing<br />
// Algorithm Design and Analysis<br />
// Mobile Application Development<br />
// Web Development<br />
// Systems<br />
