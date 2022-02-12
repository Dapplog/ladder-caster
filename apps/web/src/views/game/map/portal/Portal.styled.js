import styled, { css } from 'styled-components';
import { m } from 'framer-motion';

export const _portal = styled(m.div)`
  min-width: 60px;
  width: 60px;
  min-height: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const _elements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 22px;
`;

export const _element = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const _cutout = styled.div`
  width: 100%;
  border-radius: 50px;
  min-height: 8px;
  height: 8px;
  margin-bottom: 2px;
  padding: 1px 4px 1px 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const _bar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 8px;
  height: 8px;
  border-radius: 50px;
`;

export const _pod = styled(m.div)`
  display: flex;
  min-width: 3px;
  width: 3px;
  min-height: 8px;
  height: 8px;
  border-radius: 50px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
`;

export const _fill = styled(m.div)`
  display: flex;
  min-width: 3px;
  width: 3px;
  min-height: 8px;
  height: 8px;
  ${({ $color }) =>
    $color &&
    css`
      background: ${$color};
      box-shadow: ${({ theme }) => theme.shadow['sphere']};
      border-radius: 50px;
    `};
`;

export const _enchantments = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const _multiple = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  padding: 0 4px 0 2px;
  > b {
    font-size: 9px;
  }
`;

export const _active = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 2px 4px 8px 4px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
`;

export const _empty = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  border-radius: 8px;
`;
