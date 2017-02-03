import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/xml/xml';

const CodeContainer = ({onChange}) => {
  const options = {
    lineNumbers: true,
    readOnly: false,
    mode: 'xml',
    theme: 'monokai'
  };

  return (
    <CodeMirror
      options={options}
      onChange={onChange} />
  );
}

CodeContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func
};

export default CodeContainer;
