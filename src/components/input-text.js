import React, { Component, PropTypes } from 'react'

class InputText extends Component {

  handleBlur() {
    this.props.onChange(this.input.value);
  }

  render() {
    return (
      <div className="input-text">
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

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default InputText;
