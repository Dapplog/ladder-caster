import styled from 'styled-components';

export const _item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0;
  border-bottom: 2px solid ${({ theme }) => theme.border['base']};
  &:first-child {
    margin-top: 12px;
    border-top: 2px solid ${({ theme }) => theme.border['base']};
  }
`;

export const _inventory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const _queue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > svg {
    min-width: 20px;
    width: 20px;
    min-height: 20px;
    height: 20px;
    color: ${({ theme }) => theme.border['highest']};
  }
`;

export const _buy = styled.div``;
