import styled from 'styled-components';

export const _letters = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 8px;
`;

export const _letter = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
  > span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['tile']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
  }
`;

export const _bar = styled.div`
  min-width: 32px;
  width: 32px;
  min-height: 4px;
  height: 4px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['high']};
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  margin-bottom: 2px;
`;
