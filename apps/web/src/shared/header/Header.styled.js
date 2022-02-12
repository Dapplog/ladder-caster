import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const _header = styled.div`
  display: ${({ $active }) => ($active ? 'flex' : 'none')};
  min-width: 100%;
  width: 100%;
  flex-direction: row;
  min-height: 64px;
  height: 64px;
  padding: 0 1px;
  box-shadow: inset 4px 4px 32px -12px rgba(15, 195, 255, 0.16),
    inset -4px -4px 32px -12px rgba(147, 15, 255, 0.16);
  background: ${({ theme }) => theme.background['lowest']};
  border-radius: 8px;
`;

export const _container = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 64px;
  height: 64px;
  background: rgba(184, 236, 255, 0.04);
  box-shadow: ${({ theme }) => theme.shadow['card']};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const _left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  min-width: 50%;
  width: 50%;
  padding-left: 24px;
`;

export const _right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  min-width: 50%;
  width: 50%;
  padding-left: 24px;
`;

export const _link = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  margin-right: 24px;
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;
