import React from 'react';
import css from 'styled-jsx/macro';

export const childrenStyles = css.resolve`
  width: 99%;
`;

export const menuContainerStyles = css.resolve`
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 4px 11px;
  margin-bottom: 8px;
  margin-top: 8px;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
`;
