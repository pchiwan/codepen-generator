import React, { Component } from 'react';
import Header from './header';
import AceEditor from 'react-ace';
import EmbedPlaceholder from './embed-placeholder';
// import CodeContainer from './code-container';
import scriptTemplate from '../services/widget-embed-script';

import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/html'

class App extends Component {
  constructor(props) {
    super(props);

    this.preTypeform = '';
    this.postTypeform = '';
    this.uid = '';

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

  setPenData() {
    const script = scriptTemplate({
      uid: this.uid,
      title: 'Default title',
      width: '100%',
      height: '500px'
    });
    const html = `${this.preTypeform}${script}${this.postTypeform}`;

    const data = {
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
        <Header />
        <div className="box">
          <AceEditor
            mode="html"
            theme="monokai"
            name="pre-typeform"
            height="6em"
            onChange={this.setPreTypeform.bind(this)} />          
          {/*<CodeContainer
            id="pre-typeform"
            onChange={this.setPreTypeform.bind(this)} />*/}
        </div>
        <div className="box">
          <EmbedPlaceholder
            onChange={this.setTypeformUid.bind(this)} />
        </div>
        <div className="box">
          <AceEditor
            mode="html"
            theme="monokai"
            name="post-typeform"
            height="6em"
            onChange={this.setPreTypeform.bind(this)} />          
          {/*<CodeContainer
            id="post-typeform"
            onChange={this.setPostTypeform.bind(this)} />*/}
        </div>
        <div className="action">
          <form action="http://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value={this.state.data} />
            <button type="submit">Generate</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
