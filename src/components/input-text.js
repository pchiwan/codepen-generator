import React, { Component, PropTypes } from 'react'

class InputText extends Component {

  handleBlur() {
    this.props.onChange(this.input.value);
  }

  render() {
    const {
      id,
      label,
      title,
      value
    } = this.props;

    return (
      <div className="input-text">
        <label
          htmlFor={id}
          title={title}><strong>{label}</strong></label>
        <input
          id={id}
          ref={(node) => { this.input = node; }}
          type="text"
          onBlur={this.handleBlur.bind(this)}
          defaultValue={value} />
      </div>
    );
  }
}

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
};

export default InputText;
