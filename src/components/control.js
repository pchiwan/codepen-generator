import React, { Component, PropTypes } from 'react'

class Control extends Component {

  handleBlur() {
    this.props.onChange(this.input.value);
  }

  render() {
    return (
      <div className="control">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          ref={(node) => { this.input = node; }}
          type="text"
          onBlur={this.handleBlur.bind(this)}
          defaultValue={this.props.value} />
      </div>
    );
  }
}

Control.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Control;
