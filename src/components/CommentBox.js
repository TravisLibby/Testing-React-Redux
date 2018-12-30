import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  fetchComments = () => {
    this.props.fetchComments();
  };

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea 
          onChange={this.handleChange} 
          value={this.state.comment} 
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
        <button onClick={this.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);