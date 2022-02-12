import styled from 'styled-components';
import { m } from 'framer-motion';

export const _craft = styled.div`
  min-width: 56px;
  width: 56px;
  min-height: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const _button = styled(m.div)`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  padding: 8px 4px 4px 4px;
  cursor: pointer;
  > svg {
    min-width: 20px;
    width: 20px;
    min-height: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text['base']};
    opacity: 0.8;
  }
  > span {
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    opacity: 0.8;
  }
`;
