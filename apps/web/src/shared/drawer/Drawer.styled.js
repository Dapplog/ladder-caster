import styled from 'styled-components';
import { m } from 'framer-motion';

export const _drawer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['drawer']};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const _container = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['drawer_container']};
  background: ${({ theme }) => theme.background['lowest']};
  width: 100%;
  padding: 0 2px;
`;

export const _background = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['drawer_container']};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['frost']};
`;

export const _gradient = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const _shadow = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['drawer_shadow']};
  width: 100%;
  min-height: 12px;
  height: 12px;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.background['lowest']} 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
