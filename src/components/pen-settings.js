import React, { Component, PropTypes } from 'react';
import InputText from './input-text';

const defaultTitle = 'New pen';

class PenSettings extends Component {
  constructor(props) {
    super(props);
    
    this.title = defaultTitle;
    this.uid = '';
  }

  setTitle(value) {
    this.title = value || defaultTitle;
    this.setSettings();
  }

  setUid(value) {
    this.uid = value;
    this.setSettings();
  }

  setSettings() {
    this.props.onChange({
      title: this.title,
      uid: this.uid
    });
  }

  render() {
    return (
      <div className="pen-settings flex flex-col">
        <InputText
          id="typeform-uid"
          label="Typeform UID:"
          onChange={this.setUid.bind(this)}
          value={this.uid} />
        <InputText
          id="title"
          label="Title:"
          onChange={this.setTitle.bind(this)}
          value={this.title} />
      </div>        
    );
  }
}

PenSettings.propTypes = {
  onChange: PropTypes.func
};

export default PenSettings;
