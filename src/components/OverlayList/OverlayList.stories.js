import React from 'react';
import OverlayList from './OverlayList';

export default {
  title: 'OverlayList',
  component: OverlayList,
};

export const overlayList = (args) => {
  return <OverlayList {...args} />;
};
