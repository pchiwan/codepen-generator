import React, { PropTypes } from 'react';

const InputRadio = ({ defaultChecked, label, name, value }) => {
  return (
    <span className="input-radio">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked} />
      <label>{label}</label>
    </span>
  );
}

InputRadio.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

InputRadio.defaultProps = {
  defaultChecked: false
};

export default InputRadio;
