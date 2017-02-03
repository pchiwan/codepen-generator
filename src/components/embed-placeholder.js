import React, { Component, PropTypes } from 'react';

class EmbedPlaceholder extends Component {

  handleBlur () {
    this.props.onChange(this.input.value);
  }

  render() {
    return (
      <section id="embed-placeholder">
        <label htmlFor="typeform-uid">Typeform UID:</label>
        <input
          id="typeform-uid"
          ref={(node) => { this.input = node; }}
          type="text"
          onBlur={this.handleBlur.bind(this)} />
      </section>
    );
  }
}

EmbedPlaceholder.propTypes = {
  onChange: PropTypes.func
};

export default EmbedPlaceholder;
