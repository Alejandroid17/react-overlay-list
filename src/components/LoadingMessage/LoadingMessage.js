import PropTypes from 'prop-types';
import React from 'react';
import { loadingMessageContainerStyle } from './styles';

export default function LoadingMessage(props) {
  const { loadingMessage } = props;

  return (
    <>
      <div className={loadingMessageContainerStyle.className}>
        {loadingMessage}
      </div>
      {loadingMessageContainerStyle.styles}
    </>
  );
}

LoadingMessage.defaultProps = {
  loadingMessage: 'Loading...',
};

LoadingMessage.propTypes = {
  noOptionMessage: PropTypes.string,
};
