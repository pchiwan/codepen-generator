import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/xml/xml';

const CodeContainer = ({ onChange, defaultValue = '' }) => {
  const options = {
    lineNumbers: true,
    readOnly: false,
    mode: 'xml',
    theme: 'monokai'
  };

  return (
    <CodeMirror
      options={options}
      onChange={onChange}
      defaultValue={defaultValue} />
  );
}

CodeContainer.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default CodeContainer;
