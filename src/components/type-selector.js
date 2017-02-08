import React, { Component, PropTypes } from 'react';
import InputRadio from './input-radio';
import { EMBED_TYPES } from '../utils/constants';

class TypeSelector extends Component {

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="type-selector">
        <label>Embed type:</label>
        <div onChange={this.handleChange.bind(this)}>
          <InputRadio
            label="Widget"
            name="embedType"
            value={EMBED_TYPES.WIDGET}
            defaultChecked="true" />
          <InputRadio
            label="Full page"
            name="embedType"
            value={EMBED_TYPES.FULLPAGE} />
          <InputRadio
            label="Popup button"
            name="embedType"
            value={EMBED_TYPES.POPUP_BUTTON} />
          <InputRadio
            label="Popup link"
            name="embedType"
            value={EMBED_TYPES.POPUP_LINK} />
        </div>
      </div>
    );
  }
}

TypeSelector.propTypes = {
  onChange: PropTypes.func
};

export default TypeSelector;
