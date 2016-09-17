import React, { PropTypes } from 'react';

export const SimpleButton = ({ label, onClick }) => (
  <button onClick={onClick} type="button">{label}</button>
)

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
