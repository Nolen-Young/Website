import React from 'react';

// *****************************************************
// This class contains the code to render the courses page.
// ***************************************************** 
class ProfessionalPageCourses extends React.Component {

  render() {
    return (
      <div>
        <div id="header" className="center">
          <h1>Courses</h1>
        </div>

        <div id="body">
          <h3>
            Relevent Courses
          </h3>
		  <p>
			Algorithmic Problem Solving<br/>
			Professional Skills Computing Engineering<br/>
			Program Design and Development C/C++<br/>
			Introduction to Data Mining<br/>
			Data Structures C/C++<br/>
			Object Oriented Software Principles<br/>
			Advanced Data Structures C/C++<br/>
			Software Engineering 1<br/>
			Introduction to Computer Architecture<br/>
			Programming Language Design<br/>
			Big Data<br/>
			Senior Design 1 + 2<br/>
			Formal Languages and Automata<br/>
			Introduction to Parallel Computing<br/>
			Algorithm Design and Analysis<br/>
			Mobile Application Development<br/>
			Web Development<br/>
			Systems<br/>
		  </p>
        </div>
      </div>
    );
  }
}

export default ProfessionalPageCourses;