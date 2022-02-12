import styled from 'styled-components';

export const _move = styled.div``;

export const _header = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _back = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  margin-right: 16px;
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    color: ${({ theme }) => theme.text['base']};
  }
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    padding: 0 6px;
  }
`;

export const _title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > svg {
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    color: ${({ theme }) => theme.text['base']};
  }
  > span {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    padding: 0 8px;
  }
`;

export const _map = styled.div``;

export const _row = styled.div``;

export const _action = styled.div``;
