import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

export const _nav = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['nav']};
  min-width: 100%;
  width: 100%;
  min-height: 44px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background: ${({ theme }) => theme.background['lowest']};
  padding: 2px;
`;

export const _item = styled(Link)`
  width: 100%;
  height: 44px;
  padding-right: 1px;
  display: flex;
  overflow: hidden;
  &:first-child {
    > a {
      border-radius: 8px 8px 0 18px;
    }
  }
  &:last-child {
    padding-right: 0;
    > a {
      border-radius: 8px 8px 18px 0;
    }
  }
`;

export const _button = styled(m.div)`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  background: ${({ $active, theme }) =>
    $active
      ? `radial-gradient(circle,
          ${theme.highlight['button']} 0%,
          ${theme.background['highest']} 150%)`
      : `radial-gradient(circle,
          ${theme.background['lowest']} 0%,
          ${theme.background['base']} 60%)`};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px 0 0 0;
  > svg {
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    color: ${({ $active, theme }) =>
      $active ? theme.highlight['background'] : theme.border['highest']};
    filter: drop-shadow(${({ theme }) => theme.shadow['text']});
    opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  }
  > span {
    font-size: 11px;
    font-weight: ${({ $active }) => ($active ? '700' : '500')};
    letter-spacing: 0.5px;
    color: ${({ $active, theme }) =>
      $active ? theme.highlight['background'] : theme.border['highest']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    padding-top: 3px;
    line-height: 12px;
  }
  ${({ $first, $last }) => [
    $first &&
      css`
        border-radius: 8px 8px 0 17px;
      `,
    $last &&
      css`
        border-radius: 8px 8px 17px 0;
      `,
  ]};
`;
