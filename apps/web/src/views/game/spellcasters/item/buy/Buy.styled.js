import styled from 'styled-components';
import { m } from 'framer-motion';

export const _buy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px 0 20px;
`;

export const _title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  margin-bottom: 8px;
  white-space: nowrap;
`;

export const _options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 16px;
  padding-top: 4px;
`;

export const _button = styled(m.div)`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme, $disabled }) => theme.text[$disabled ? 'faded' : 'base']};
  background: ${({ theme, $disabled }) =>
    theme.background[$disabled ? 'lowest' : 'base']};
  box-shadow: ${({ theme }) => theme.shadow['card']};
  padding: 16px 20px;
  white-space: nowrap;
  border-radius: 8px;
  line-height: 1;
  cursor: pointer;
`;

export const _or = styled.span`
  padding: 0 8px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  white-space: nowrap;
  line-height: 10px;
`;

export const _option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const _estimate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  > span {
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.text['base']};
    white-space: nowrap;
    line-height: 10px;
  }
`;
