import React, { Component } from 'react';
import CommentInput from './comment-input';
import CommentList from './comment-list';

class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(comment){
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    })
  }

  render(){
    return(
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}
        />
      <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp;
