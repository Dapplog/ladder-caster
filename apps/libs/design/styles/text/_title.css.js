import { css } from 'styled-components';

export const _title_popover = css`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['shadow']};
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  text-align: center;
`;

export const _title_lane = css`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['shadow']};
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1;
`;
