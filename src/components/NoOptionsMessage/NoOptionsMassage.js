import PropTypes from 'prop-types';
import React from 'react';
import { noOptionMessageContainerStyle } from './styles';

export default function NoOptionsMessage(props) {
  const { noOptionMessage } = props;

  return (
    <>
      <div className={noOptionMessageContainerStyle.className}>
        {noOptionMessage}
      </div>
      {noOptionMessageContainerStyle.styles}
    </>
  );
}

NoOptionsMessage.defaultProps = {
  noOptionMessage: 'No options',
};

NoOptionsMessage.propTypes = {
  noOptionMessage: PropTypes.string,
};
