import React from "react";
import { loadingMessageContainerStyle } from "./styles";
import PropTypes from "prop-types";

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
  loadingMessage: "Loading...",
};

LoadingMessage.propTypes = {
  noOptionMessage: PropTypes.string,
};
