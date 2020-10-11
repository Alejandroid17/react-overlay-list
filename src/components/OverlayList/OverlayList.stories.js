import OverlayList from './OverlayList';
import React from 'react';

export default {
  title: 'OverlayList',
  component: OverlayList,
};

export const overlayList = (args) => {
  return <OverlayList {...args} />;
};
