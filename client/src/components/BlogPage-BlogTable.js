import React from 'react';

class BlogTable extends React.Component {

  constructor(props) {
    super(props);
  }

  // To Do: write routes to get clog posts renderTable 


  renderTable = () => {
    let table = [];
    // console.log("LENGTH: " + this.props.posts.length); console.log("USERID? : " +
    // this.props.post_userID);
    for (let p = 0; p < this.props.posts.length; ++p) {
      table.push(
        <tr key={p}>
          <h3>Title</h3>
          <body>Body of the blog post</body>
        </tr>
      );
    }
    return table;
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-light"/>
          <tbody>
            {Object.keys(this.props.posts).length === 0
              ? <tr><td colSpan="1">No content :(</td></tr>
              : this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }

}

export default BlogTable;