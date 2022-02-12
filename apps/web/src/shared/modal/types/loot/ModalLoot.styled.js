import styled from 'styled-components';
import { m } from 'framer-motion';

export const _loot = styled(m.div)`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const _visuals = styled.div`
  width: 100%;
  height: 75%;
  cursor: default;
`;

export const _actions = styled(m.div)`
  width: 100%;
  min-height: 88px;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
`;

export const _button = styled(m.button)`
  font-size: 16px;
  font-weight: 700;
  border: none;
  color: ${({ theme }) => theme.highlight['background']};
  padding: 12px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.background['button_active']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const _description = styled(m.div)`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  padding-top: 4px;
`;

export const _limit = styled(m.div)`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  padding-top: 4px;
`;
