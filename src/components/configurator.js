import React, { Component, PropTypes } from 'react';
import Control from './control';

class Configurator extends Component {
  constructor(props) {
    super(props);
    
    const {
      height,
      width,
      title
    } = props.options;

    this.height = height;
    this.width = width;
    this.title = title;
    this.uid = '';
  }

  setHeight(value) {
    this.height = value;
    this.setConfig();
  }

  setWidth(value) {
    this.width = value;
    this.setConfig();
  }

  setTitle(value) {
    this.title = value;
    this.setConfig();
  }

  setUid(value) {
    this.uid = value;
    this.setConfig();
  }

  setConfig() {
    this.props.onChange({
      height: this.height,
      width: this.width,
      title: this.title,
      uid: this.uid
    });
  }
  

  render() {
    return (
      <div className="configurator">        
        <Control
          id="typeform-uid"
          label="Typeform UID:"
          onChange={this.setUid.bind(this)}
          value={this.uid} />
        <Control
          id="title"
          label="Title:"
          onChange={this.setTitle.bind(this)}
          value={this.title} />
        <Control
          id="width"
          label="Width:"
          onChange={this.setWidth.bind(this)}
          value={this.width} />
        <Control
          id="height"
          label="Height:"
          onChange={this.setHeight.bind(this)}
          value={this.height} />
      </div>
    );
  }
}

Configurator.propTypes = {
  options: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    title: PropTypes.string
  }),
  onChange: PropTypes.func
};

export default Configurator;
