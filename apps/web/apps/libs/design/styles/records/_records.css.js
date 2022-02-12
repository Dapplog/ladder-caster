import { css } from 'styled-components';

export const _records_popover = css`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const _record_popover = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ $last }) => ($last ? '16px' : '0')};
  > h5 {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['faded']};
  }
  > p {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['faded']};
  }
`;
