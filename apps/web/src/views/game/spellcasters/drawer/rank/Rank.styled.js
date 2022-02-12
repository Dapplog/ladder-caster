import styled from 'styled-components';
import { m } from 'framer-motion';

export const _rank = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

export const _wrapper = styled.div`
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  display: flex;
  flex-direction: row;
`;

export const _tier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const _name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  line-height: 1;
  padding-bottom: 2px;
`;

export const _mint = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
`;

export const _level = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 6px 16px 0 16px;
`;

export const _progress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2px;
`;

export const _loading = styled.div`
  padding-bottom: 4px;
`;

export const _world = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const _close = styled.div`
  min-width: 36px;
  width: 36px;
  min-height: 36px;
  height: 36px;
  cursor: pointer;
`;

export const _icon = styled(m.div)`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _current = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  letter-spacing: 0.5px;
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _upcoming = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  letter-spacing: 0.5px;
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;
