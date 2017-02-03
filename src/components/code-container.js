import React, { Component, PropTypes } from 'react';

class CodeContainer extends Component {

  handleBlur () {
    this.props.onChange(this.input.value)
  }

  render() {
    return (
      <textarea
        id={this.props.id}
        ref={(node) => { this.input = node; }}
        onBlur={this.handleBlur.bind(this)}
        className="code"
        cols="30"
        rows="20">
      </textarea>
    );
  }
}

CodeContainer.propTypes = {
  onChange: PropTypes.func
};

export default CodeContainer;
