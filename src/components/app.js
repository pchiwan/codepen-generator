import React, { Component } from 'react';
import CodeContainer from './code-container';
import Configurator from './configurator';
import Header from './header';
import scriptTemplate from '../services/widget-embed-script';

class App extends Component {
  constructor(props) {
    super(props);

    this.preTypeform = '';
    this.postTypeform = '';
    this.config = {
      width: '100%',
      height: '500px',
      title: 'New pen',
      uid: ''
    };

    this.state = {
      data: {}
    };
  }

  setPreTypeform(value) {
    this.preTypeform = value;
    this.setPenData();
  }

  setPostTypeform(value) {
    this.postTypeform = value;
    this.setPenData();
  }

  setTypeformUid(value) {
    this.uid = value;
    this.setPenData();
  }

  setConfig(config) {
    this.config = config;
    this.setPenData();
  }

  setPenData() {
    const script = scriptTemplate({
      uid: this.config.uid,
      title: this.config.title || 'New pen',
      width: this.config.width || '100%',
      height: this.config.height || '500px'
    });
    const html = `${this.preTypeform}${script}${this.postTypeform}`;

    const data = {
      editors: '110', // HTML, CSS, JS
      title: this.config.title || 'New pen',
      description: this.config.title || 'New pen',
      html
    };

    const JSONstring = JSON.stringify(data)
      .replace(/"/g, '&​quot;')
      .replace(/'/g, '&apos;');

    this.setState({
      data: JSONstring
    });
  }

  render() {
    return (
      <div className="app">
        <Header title="Embedded Typeform Example Generator" />
        <div className="box">
          <Configurator
            options={this.config}
            onChange={this.setConfig.bind(this)} />
        </div>
        <div className="box">
          <label htmlFor="pre-typeform">Before embedded Typeform:</label>
          <CodeContainer
            id="pre-typeform"
            onChange={this.setPreTypeform.bind(this)} />
        </div>
        <div className="box">
          <label htmlFor="post-typeform">After embedded Typeform:</label>
          <CodeContainer
            id="post-typeform"
            onChange={this.setPostTypeform.bind(this)} />
        </div>
        <div className="action">
          <form action="https://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value={this.state.data} />
            <button type="submit">Generate</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
