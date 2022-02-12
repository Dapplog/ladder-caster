import { css } from 'styled-components';

export const _slide_popover = css`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.04);
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
