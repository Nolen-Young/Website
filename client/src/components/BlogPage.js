import React from "react";
import axios from "axios";

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

	componentDidMount() {
		this.fetchPosts();
	}

	fetchPosts = async () => {
		axios
			.get("/blog/")
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({
						posts: response.data.map((post) => [
							post.title,
							post.content,
							post.date,
						]),
					});
				}
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	renderPost = (post) => {
		return (
			<div key={post[0]}>
				<h3>{post[0]}</h3>
				<h5>Date: {post[2]}</h5>
				<p>{post[1]}</p>
			</div>
		);
	};

	render() {
		return (
			<div className='padded-page center'>
				<h1>Blog</h1>
				<div style={{ textAlign: "left" }}>
					{Object.keys(this.state.posts).length === 0 ? (
						<p>No Content</p>
					) : (
						this.state.posts.map((post) => this.renderPost(post))
					)}
				</div>

				<footer className='bottom center'>
					<p style={{ fontStyle: "italic" }}>
						&copy; 2020 Nolen Young. No rights reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default BlogPage;
