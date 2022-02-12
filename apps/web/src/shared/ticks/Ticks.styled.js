import styled from 'styled-components';
import { m } from 'framer-motion';

export const _ticks = styled.div`
  width: 100%;
  min-height: 8px;
  display: flex;
  flex-direction: row;
`;

export const _loading = styled.div`
  ${({ theme }) => theme.styles?.view?.['_loading']};
`;

export const _bar = styled.div`
  ${({ theme }) => theme.styles?.view?.['_bar']};
`;

export const _fill = styled(m.div)`
  ${({ theme }) => theme.styles?.view?.['_fill']};
`;
