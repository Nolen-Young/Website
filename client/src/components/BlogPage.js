import React from 'react';
import axios from 'axios';
import BlogTable from "./BlogPage-BlogTable.js"
import dotenv from 'dotenv'

// ***************************************************** 
// This class contains the
// code to render the Blog pages.
// *****************************************************
class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPosts = this.fetchPosts.bind(this);

    this.state = {
      posts: [],
    };
  }

  fetchPosts = async () => {
    axios.get('http://localhost:4000/blog/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            posts: response.data.map(post => [post.title, post.content, post.date])
          })
        }
      })
      .catch(err => {console.log("Error: " + err)})
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className="padded-page center">
        <h1>Blog</h1>
        <React.Fragment>
          <BlogTable posts={this.state.posts} post_userID={this.state.post_userID}/>
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