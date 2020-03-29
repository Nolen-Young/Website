import React from 'react';

class ProfessionalPageCourses extends React.Component {

	render() {
	  return (
		<div>
		  <div id = "header" className = "center">
			<h1>Courses</h1>
		  </div>
  
		  <div id = "body">
			<h3>
				Relevent Courses
			</h3>

			<table className = "my-table">
				<tr>
					<td>Algorithmic Problem Solving</td>
					<td>Professional Skills Computing Engineering</td>
				</tr>
				<tr>
					<td>Program Design and Development C/C++ </td>
					<td>Introduction to Data Mining</td>
				</tr>
				<tr>
					<td>Data Structures C/C++</td>
					<td>Object Oriented Software Principles</td>
				</tr>
				<tr>
					<td>Advanced Data Structures C/C++</td>
					<td>Software Engineering 1</td>
				</tr>
				<tr>
					<td>Introduction to Computer Architecture</td>
					<td>Programming Language Design</td>
				</tr>
				<tr>
					<td>Big Data</td>
					<td>Senior Design 1 + 2 </td>
				</tr>
				<tr>
					<td>Formal Languages and Automata</td>
					<td>Introduction to Parallel Computing</td>
				</tr>
				<tr>
					<td>Algorithm Design and Analysis</td>
					<td>Mobile Application Development </td>
				</tr>
				<tr>
					<td>Web Development</td>
					<td>Systems</td>
				</tr>
			</table>
		  </div>
		</div>
	  );
	}
  }
  
  export default ProfessionalPageCourses;