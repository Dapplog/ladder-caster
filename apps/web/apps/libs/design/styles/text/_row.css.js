import { css } from 'styled-components';

export const _row_popover = css`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['solid']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
`;
