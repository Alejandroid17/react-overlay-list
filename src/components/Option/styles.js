import React from 'react';
import css from 'styled-jsx/macro';

export const getOptionContainerStyle = (props) => {
  const color = props.isDisabled
    ? 'rgb(204, 204, 204)'
    : props.isSelected
    ? 'white'
    : 'inherit';
  const backgroundColor = props.isSelected
    ? 'rgb(38, 132, 255)'
    : props.isFocused
    ? '#5ea6e24f'
    : 'transparent';
  const cursor = props.isDisabled ? 'not-allowed' : 'pointer';

  return css.resolve`
    div {
      background-color: ${backgroundColor};
      color: ${color};
      cursor: ${cursor};
      display: block;
      font-size: inherit;
      padding: 8px 12px;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
    }
  `;
};
