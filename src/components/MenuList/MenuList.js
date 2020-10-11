import LoadingMessage from '../LoadingMessage/LoadingMessage';
import NoOptionsMessage from '../NoOptionsMessage/NoOptionsMassage';
import Option from '../Option/Option';
import React from 'react';
import { menuListContainerStyle } from './styles';

export default function MenuList(props) {
  const {
    options,
    isLoading,
    noOptionMessage,
    loadingMessage,
    onSelect,
  } = props;

  const loadingMessageProps = {
    loadingMessage,
  };

  const noOptionMessageProps = {
    noOptionMessage,
  };

  return (
    <>
      <div className={menuListContainerStyle.className}>
        {isLoading ? (
          <LoadingMessage {...loadingMessageProps} />
        ) : options.length > 0 ? (
          options.map((option) => {
            const isSelected = props.selectedValue === option.value;
            return (
              <Option
                key={option.value}
                option={option}
                onSelect={onSelect}
                isSelected={isSelected}
              />
            );
          })
        ) : (
          <NoOptionsMessage {...noOptionMessageProps} />
        )}
      </div>
      {menuListContainerStyle.styles}
    </>
  );
}
