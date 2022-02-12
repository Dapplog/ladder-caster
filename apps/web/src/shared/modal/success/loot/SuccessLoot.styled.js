import styled from 'styled-components';
import { m } from 'framer-motion';

export const _loot = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 8px 40px 8px;
`;

export const _close = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 8px;
  padding: 16px;
  pointer-events: none;
  > span {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
  }
`;

export const _success = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 8px;
  pointer-events: none;
  margin-bottom: 32px;
  > span {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
  }
`;

export const _container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const _chests = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const _chest = styled(m.div)`
  min-width: 88px;
  width: 88px;
  min-height: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
