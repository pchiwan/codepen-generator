import React, { Component } from 'react';
import CodeContainer from './code-container';
import EmbedSettings from './embed-settings';
import Header from './header';
import LivePreview from './live-preview';
import PenSettings from './pen-settings';
import TypeSelector from './type-selector';
import scriptGenerator from '../services/embed-script-generator';
import {
  EMBED_TYPES,
  DEFAULT_EXAMPLE_HTML_PRE,
  DEFAULT_EXAMPLE_HTML_POST } from '../utils/constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.preTypeform = DEFAULT_EXAMPLE_HTML_PRE;
    this.postTypeform = DEFAULT_EXAMPLE_HTML_POST;
    this.embedType = EMBED_TYPES.WIDGET;
    this.settings = {
      width: '100%',
      height: '500px',
      opacity: '100'
    };

    this.state = {
      data: {},
      html: ''
    };
  }

  componentDidMount() {
    this.setPenData();
  }

  setPreTypeform(value) {
    this.preTypeform = value;
    this.setPenData();
  }

  setPostTypeform(value) {
    this.postTypeform = value;
    this.setPenData();
  }

  setPenSettings(value) {
    this.settings = Object.assign(this.settings, value);
    this.setPenData();
  }

  setEmbedType(value) {
    this.embedType = value;
    this.setPenData();
  }

  setEmbedSettings(value) {
    this.settings = Object.assign(this.settings, value);
    this.setPenData();
  }

  setPenData() {
    const script = scriptGenerator(this.embedType, this.settings);
    const html = this.embedType !== EMBED_TYPES.FULLPAGE
      ? `${this.preTypeform}${script}${this.postTypeform}`
      : script;

    const data = {
      editors: '110', // HTML = true, CSS = true, JS = false
      title: this.settings.title,
      description: this.settings.title,
      html
    };

    this.setState({
      data: JSON.stringify(data),
      html
    });
  }

  render() {
    return (
      <div className="app">
        <Header title="Embedded Typeform Example Generator" />
        <div className="flex flex-row">
          <div className="flex flex-col col-1">
            <div className="box">
              <PenSettings
                onChange={this.setPenSettings.bind(this)} />
              <TypeSelector 
                onChange={this.setEmbedType.bind(this)} />
              <EmbedSettings
                onChange={this.setEmbedSettings.bind(this)} />
            </div>
          
            <div className="box">
              <label htmlFor="pre-typeform">Code above embedded Typeform:</label>
              <CodeContainer
                id="pre-typeform"
                onChange={this.setPreTypeform.bind(this)}
                defaultValue={this.preTypeform} />
              <label className="highlight">Typeform will be rendered in between</label>
              <label htmlFor="post-typeform">Code below embedded Typeform:</label>
              <CodeContainer
                id="post-typeform"
                onChange={this.setPostTypeform.bind(this)}
                defaultValue={this.postTypeform} />
            </div>
            <div className="action">
              <form action="http://codepen.io/pen/define" method="POST" target="_blank">
                <input type="hidden" name="data" value={this.state.data} />
                <button type="submit">Generate</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col col-2">
            <div className="box">
              <LivePreview>
                {this.state.html}
              </LivePreview>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
