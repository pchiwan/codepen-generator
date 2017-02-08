import React, { Component, PropTypes } from 'react';

class InputSlide extends Component {

  handleChange() {
    this.props.onChange(this.input.value);
  }

  render() {
    const {
      id,
      label,
      min,
      max,
      title,
      unit,
      value
    } = this.props;

    return (
      <div className="input-slide">
        <label
          htmlFor={id}
          title={title}><strong>{label}</strong> <span className="current-value">({value}{unit})</span>
        </label>
        <span className="range-label">{min}{unit}</span>&nbsp;
        <input
          id={id}
          ref={(node) => { this.input = node; }}
          type="range"
          min={min}
          max={max}
          step="1"
          onChange={this.handleChange.bind(this)}
          defaultValue={value} />
        &nbsp;<span className="range-label">{max}{unit}</span>
      </div>
    );
  }
}

InputSlide.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  title: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.string
};

InputSlide.defaultProps = {
  min: 0,
  max: 100,
  unit: '',
  value: 0
}

export default InputSlide;