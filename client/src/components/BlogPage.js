import React from 'react';
import BlogTable from "./BlogPage-BlogTable.js"

// *****************************************************
// This class contains the code to render the Review pages.
// ***************************************************** 
class BlogPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: [],
                  postID: ""};
}

  render() {
    return (
      <div className="padded-page center">
        <h1>Blog</h1>
        <React.Fragment>
                <BlogTable
                posts={this.state.posts}
                post_userID={this.state.post_userID} />
            </React.Fragment>
        <p style={{
          fontStyle: "italic"
        }}>
          &copy; 2020 Nolen Young. No rights reserved.</p>
      </div>
    );
  }
}

export default BlogPage;