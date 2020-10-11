import React, { useRef, useState } from 'react';
import { childrenStyles, menuContainerStyles } from './styles';

import MenuList from '../MenuList/MenuList';
import Overlay from 'react-overlays/OverlayList';
import PropTypes from 'prop-types';

function OverlayList(props) {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const {
    children,
    options,
    selectedValue,
    isLoading,
    noOptionMessage,
    loadingMessage,
    onSelect,
  } = props;

  const childrenProps = {
    ref: triggerRef,
    className: childrenStyles.className,
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
  };

  const menuContainerProps = {
    className: menuContainerStyles.className,
  };

  const overlayProps = {
    show: show,
    target: triggerRef,
    container: containerRef,
  };

  const menuListProps = {
    options,
    selectedValue,
    noOptionMessage,
    isLoading,
    loadingMessage,
    onSelect,
  };

  return (
    <>
      <div ref={containerRef}>
        {React.cloneElement(children, { ...childrenProps })}
        <Overlay {...overlayProps}>
          {() => (
            <div
              {...menuContainerProps}
              style={{ width: containerRef.current.clientWidth }}
            >
              <MenuList {...menuListProps} />
            </div>
          )}
        </Overlay>
      </div>
      {menuContainerStyles.styles}
      {childrenStyles.styles}
    </>
  );
}

OverlayList.propTypes = {
  /**
   *
   **/
  children: PropTypes.element.isRequired,
  /**
   *
   */
  options: PropTypes.array,
  /**
   *
   */
  selectedValue: PropTypes.string,
};

OverlayList.defaultProps = {
  children: <input></input>,
  options: [],
};

export default OverlayList;
