import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

export const _spellcasters = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const _header = styled.div`
  ${({ theme }) => theme.styles?.view?.['_header']};
`;

export const _location = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const _title = styled.h3`
  ${({ theme }) => theme.styles?.view?.['_title']};
`;

export const _day = styled.h3`
  ${({ theme }) => theme.styles?.view?.['_day']};
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

export const _list = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  overflow: scroll;
`;

export const _buy = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  border: 2px solid ${({ theme }) => theme.border['highest']};
  border-radius: 8px;
  cursor: pointer;
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    padding-left: 4px;
    letter-spacing: 0.5px;
  }
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _actions = styled.div``;
