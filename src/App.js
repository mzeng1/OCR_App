import React from "react";
import Form from "./Form.js"
import Post from "./Post.js"

class App extends React.Component {
  state = {
    posts:[]
  };
  
  addPost = (words_result) => {
    const originposts = this.state.posts;
    const newPosts = [words_result, ...originposts]

    this.setState({
      posts: newPosts
    })
  }


  render() {
    const postContent = this.state.posts;
    return (
    <div className="container">
      <div className="row">
        <Post postContent={postContent}/>
        <Form addPost={this.addPost}/>
    </div>
  </div>
  );
  }
}

export default App;

