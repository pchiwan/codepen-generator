import React, { PropTypes } from 'react';

const InputRadio = ({ defaultChecked, label, name, value }) => {
  return (
    <span className="input-radio">
      <label>{label}</label>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked} />
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
