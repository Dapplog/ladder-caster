import styled from 'styled-components';

export const _move = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 8px 40px 8px;
`;

export const _close = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 8px;
  pointer-events: none;
  > span {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
  }
`;

export const _success = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  pointer-events: none;
  margin-bottom: 32px;
  > span {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
  }
`;
