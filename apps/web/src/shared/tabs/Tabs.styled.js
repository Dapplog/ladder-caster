import styled from 'styled-components';

export const _tabs = styled.div``;

export const _header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0 8px 0;
`;

export const _view = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: row;
`;

export const _tab = styled.div`
  padding-bottom: 12px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  > span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    padding: 0 4px;
  }
`;

export const _line = styled.div`
  width: 100%;
  min-height: 3px;
  height: 3px;
  border-radius: 50px;
  display: flex;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    background: ${({ $active, theme }) =>
      $active ? theme.text['base'] : 'none'};
    border-radius: 50px;
  }
`;
