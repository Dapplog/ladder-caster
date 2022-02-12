import styled from 'styled-components';

export const _elements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const _orb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  width: 24px;
  min-height: 24px;
  height: 24px;
  > svg {
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    color: ${({ $color, theme }) => theme.element?.[$color]};
  }
`;
