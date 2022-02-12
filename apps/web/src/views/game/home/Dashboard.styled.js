import styled from 'styled-components';
import { m } from 'framer-motion';

export const _home = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const _header = styled.div`
  ${({ theme }) => theme.styles?.view?.['_header']};
`;

export const _title = styled.h3`
  ${({ theme }) => theme.styles?.view?.['_title']};
`;

export const _loading = styled.div`
  ${({ theme }) => theme.styles?.view?.['_loading']};
`;

export const _bar = styled.div`
  ${({ theme }) => theme.styles?.view?.['_bar']};
`;

export const _fill = styled.div`
  ${({ theme }) => theme.styles?.view?.['_fill']};
`;

export const _divider = styled.div`
  ${({ theme }) => theme.styles?.view?.['_divider']};
`;

export const _feed = styled.div`
  padding: 0 16px;
`;

export const _section = styled.div`
  padding: 18px 0;
`;

export const _actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  padding: 4px 0;
  > button {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const _description = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
`;

export const _button = styled(m.div)`
  padding: 12px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme, $disabled }) =>
    theme.background[$disabled ? 'lowest' : 'low']};
  border: none;
  cursor: pointer;
  margin-right: 12px;
  > svg {
    min-height: 14px;
    height: 14px;
    min-width: 14px;
    width: 14px;
    color: ${({ theme, $disabled }) =>
      theme.text[$disabled ? 'faded' : 'base']};
  }
  > span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme, $disabled }) =>
      theme.text[$disabled ? 'faded' : 'base']};
    padding-left: 6px;
    white-space: nowrap;
  }
`;

export const _item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-right: 2px;
`;

export const _task = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme, $disabled }) => theme.text[$disabled ? 'faded' : 'base']};
`;

export const _step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 0 18px 0;
  border-bottom: 2px solid ${({ theme }) => theme.border['base']};
`;

export const _order = styled.div`
  min-width: 20px;
  width: 20px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['faded']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 50px;
  margin-right: 16px;
  &:after {
    content: '';
    min-width: 3px;
    width: 3px;
    min-height: 18px;
    height: 18px;
    background: ${({ theme }) => theme.text['faded']};
    margin-left: 6px;
    border-radius: 8px;
  }
`;
