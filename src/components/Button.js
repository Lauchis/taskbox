import React from 'react';

import PropTypes from 'prop-types';

export function Button({ isDisabled, content }) {
  return (
    <button type="button" disabled={isDisabled}>
      {content}
    </button>
  );
}

Button.propTypes = {
  /**
   Checks if the button should be disabled
  */
  isDisabled: PropTypes.bool.isRequired,
  /**
  The display content of the button
  */
  content: PropTypes.string.isRequired,
};