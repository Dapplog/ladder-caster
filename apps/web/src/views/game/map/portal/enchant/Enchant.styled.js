import styled from 'styled-components';

export const _enchant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ $location }) => ($location ? '48px' : '28px')};
  width: ${({ $location }) => ($location ? '48px' : '28px')};
  min-height: 28px;
  height: 28px;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => `radial-gradient(circle,
                                  ${theme.background['base']} 0%,
                                  ${theme.background['high']} 60%)`};
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme }) => theme.highlight['background']};
  }
  > span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.highlight['background']};
    margin-right: 8px;
  }
`;
