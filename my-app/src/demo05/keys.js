import React, { Component } from 'react';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ]
    }
  }
  
  render() {
    const posts = this.state.posts;
    const sidebar = (
      <ul>
        {posts.map(post =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = posts.map(post =>
      <div key={post.id} id={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr/>
        {content}
      </div>
    );
  }
}

export default Blog;