import React, { Component, PropTypes } from 'react';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  handleClick() {
    const newValue = !this.state.checked;
    this.setState({
      checked: newValue
    });
    this.props.onChange(newValue);
  }

  render() {
    const { 
      id,
      label
    } = this.props;

    return (
      <div className="toggle-switch">
        <label htmlFor={id}><strong>{label}</strong></label> 
        <span className="switch" onClick={this.handleClick.bind(this)}>
          <input
            id={id}
            type="checkbox"
            checked={this.state.checked} />
          <div className="slider round"></div>
        </span>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  id: PropTypes.stirng,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default ToggleSwitch;
