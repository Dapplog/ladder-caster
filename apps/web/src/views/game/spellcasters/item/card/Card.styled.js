import styled from 'styled-components';
import { m } from 'framer-motion';

export const _card = styled(m.div)`
  min-width: 72px;
  width: 72px;
  min-height: 96px;
  height: 96px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  border: 3px solid ${({ theme }) => theme.border['high']};
  cursor: pointer;
  overflow: hidden;
`;

export const _icon = styled(m.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 36px;
    width: 36px;
    min-height: 36px;
    height: 36px;
    color: ${({ theme }) => theme.text['base']};
  }
`;
