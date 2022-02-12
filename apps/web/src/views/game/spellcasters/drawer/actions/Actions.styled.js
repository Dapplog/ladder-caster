import styled from 'styled-components';
import { m } from 'framer-motion';

export const _actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const _item = styled.div`
  width: 100%;
  max-height: 94px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  background: ${({ theme }) => theme.background['base']};
  margin-bottom: 16px;
`;

export const _name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  line-height: 1;
  margin-bottom: 8px;
`;

export const _wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const _description = styled.div`
  width: 100%;
  > p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text['faded']};
    line-height: 1.4;
    padding-right: 16px;
  }
`;

export const _action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const _button = styled(m.div)`
  min-width: 60px;
  width: 60px;
  min-height: 60px;
  height: 60px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background['high']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > svg {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    color: ${({ theme }) => theme.text['faded']};
  }
`;
