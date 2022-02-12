import styled from 'styled-components';
import { m } from 'framer-motion';

export const _header = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['mobile_header']};
  min-width: 100%;
  width: 100%;
  min-height: 48px;
  height: 48px;
  padding: 1px;
`;

export const _container = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => theme.background['lowest']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 2px 2px 0;
`;

export const _left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  height: 100%;
`;

export const _right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6px;
`;

export const _coin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const _icon = styled.div`
  min-width: 18px;
  width: 18px;
  min-height: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    color: ${({ $background }) => $background};
  }
`;

export const _amount = styled.div`
  position: relative;
  top: 1px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['active']};
  padding-left: 4px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _button = styled(m.button)`
  padding: 6px 12px;
  min-height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => theme.background['low']};
  border: none;
  margin-left: 4px;
  cursor: pointer;
  > svg {
    min-height: 14px;
    height: 14px;
    min-width: 14px;
    width: 14px;
    color: ${({ theme }) => theme.text['base']};
  }
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    padding-left: 6px;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const _controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > button {
    margin-right: 6px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const _speed = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  padding: 0 8px;
`;

export const _google = styled(m.div)`
  padding: 2px 12px 2px 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.socials['google']};
  border: none;
  box-shadow: ${({ theme }) => theme.shadow['card']};
  cursor: pointer;
  > svg {
    padding: 6px;
    min-height: 30px;
    height: 30px;
    min-width: 30px;
    width: 30px;
    color: ${({ theme }) => theme.background['lowest']};
    background: white;
    border-radius: 6px;
  }
  > span {
    font-size: 12px;
    font-weight: 400;
    font-family: 'DM Sans', Roboto, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    color: #ffffff;
    padding-left: 8px;
    letter-spacing: 0.5px;
  }
`;
