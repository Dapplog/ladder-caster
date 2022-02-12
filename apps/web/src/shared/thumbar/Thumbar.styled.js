import styled from 'styled-components';

export const _thumbar = styled.div`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 6px 4px;
`;

export const _container = styled.div`
  min-width: 100%;
  width: 100%;
  max-height: 120px;
  height: 120px;
  min-height: 120px;
  border-radius: 8px;
  background: ${({ theme }) => theme.background['base']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  display: flex;
`;
