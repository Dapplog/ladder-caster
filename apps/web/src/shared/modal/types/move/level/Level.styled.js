import styled from 'styled-components';

export const _level = styled.div`
  width: 0;
  height: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $right }) => ($right ? 'flex-start' : 'flex-end')};
`;

export const _number = styled.div`
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
  display: flex;
  flex-direction: ${({ $right }) => ($right ? 'row' : 'row-reverse')};
  justify-content: flex-start;
  align-items: center;
  left: ${({ $right }) => ($right ? '12px' : '-12px')};
  > span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['tile']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
  }
`;

export const _bar = styled.div`
  min-width: 4px;
  width: 4px;
  min-height: 32px;
  height: 32px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['high']};
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  margin: ${({ $right }) => ($right ? '0 8px 0 0' : '0 0 0 8px')};
`;
