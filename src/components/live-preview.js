import React, { Component } from 'react';
// import ReactDOM =  

class LivePreview extends Component {

  componentWillReceiveProps(nextProps) {
    this.iframe.src = "data:text/html;charset=utf-8," + escape(nextProps.children);
  }
  
  render() {
    return (
      <div className="live-preview">
        <iframe ref={(node) => { this.iframe = node; }} />
      </div>
    );
  }
}

export default LivePreview;
