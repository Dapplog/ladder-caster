import styled from 'styled-components';
import { m } from 'framer-motion';

export const _modal = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['modal']};
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
`;

export const _float = styled(m.div)`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
`;

export const _center = styled(m.div)`
  max-width: 100%;
  width: 100%;
  max-height: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const _fade = styled(m.div)`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  background: ${({ theme }) => theme.background['fade']};
`;

export const _container = styled(m.div)`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
`;

export const _area = styled(m.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const _window = styled(m.div)`
  min-width: 240px;
  max-width: 272px;
  min-height: 172px;
  max-height: 640px;
  border-radius: 16px;
  background: ${({ theme }) => theme.background['high']};
  box-shadow: ${({ theme }) => theme.shadow['card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const _title = styled.div`
  ${({ theme }) => theme.styles?.view?.['_title']};
`;

export const _description = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const _actions = styled.div`
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0 4px;
`;

export const _deny = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  background: ${({ theme }) => theme.background['low']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  padding: 10px 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const _accept = styled(m.div)`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  padding: 10px 16px;
  margin-left: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
