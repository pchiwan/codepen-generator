import React, { Component, PropTypes } from 'react';
import InputText from './input-text';
import ToggleSwitch from './toggle-switch';

class EmbedSettings extends Component {
  constructor(props) {
    super(props);

    this.settings = {
      height: '500px',
      width: '100%',
      opacity: '100',
      hideHeader: false,
      hideFooter: false,
      hideScrollbar: false
    };
  }

  setHeight(value) {
    this.setSettings({
      height: value
    });
  }

  setWidth(value) {
    this.setSettings({
      width: value
    });
  }

  setOpacity(value) {
    this.setSettings({
      opacity: value
    });
  }

  setHideHeader(value) {
    this.setSettings({
      hideHeader: value
    });
  }

  setHideFooter(value) {
    this.setSettings({
      hideFooter: value
    });
  }

  setHideScrollbar(value) {
    this.setSettings({
      hideScrollbar: value
    });
  }

  setSettings(value) {
    this.settings = Object.assign(this.settings, value);
    this.props.onChange(this.settings);
  }

  render() {
    return (
      <div className="embed-settings flex flex-col">
        <div className="flex flex-row flex-wrap">
          <InputText
            id="width"
            label="Width:"
            onChange={this.setWidth.bind(this)}
            value={this.settings.width} />
          <InputText
            id="height"
            label="Height:"
            onChange={this.setHeight.bind(this)}
            value={this.settings.height} />
          <InputText
            id="opacity"
            label="Opacity:"
            onChange={this.setOpacity.bind(this)}
            value={this.settings.opacity}
            title="Set opacity to 0 for transparent background" />
        </div>
        <div className="flex flex-row flex-wrap">
          <ToggleSwitch
            id="hide-header"
            label="Hide header:"
            onChange={this.setHideHeader.bind(this)} />
          <ToggleSwitch
            id="hide-footer"
            label="Hide footer:"
            onChange={this.setHideFooter.bind(this)} />
          <ToggleSwitch
            id="hide-scrollbar"
            label="Hide scrollbar:"
            onChange={this.setHideScrollbar.bind(this)} />
        </div>
      </div>
    );
  }
}

EmbedSettings.propTypes = {
  options: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    opacity: PropTypes.string,
    hideHeader: PropTypes.bool,
    hideFooter: PropTypes.bool,
    hideScrollbar: PropTypes.bool
  }),
  onChange: PropTypes.func
};

export default EmbedSettings;
