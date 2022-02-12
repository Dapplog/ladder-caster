import { css } from 'styled-components';

export const _submit_popover = css`
  width: 100%;
  > button {
    width: 100%;
    height: 32px;
    background: ${({ theme }) => theme.background['ghost']};
    border: none;
    border-radius: 8px;
    padding: 0 16px;
    box-shadow: inset 2px 2px 4px 0 rgba(255, 255, 255, 0.16),
      2px 2px 4px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text['faded']};
  }
`;

export const _submit_lane = css`
  > button {
    width: 84px;
    height: 42px;
    background: rgba(255, 255, 255, 0.24);
    border: none;
    border-radius: 0 8px 8px 0;
    padding: 8px 16px;
    box-shadow: inset 2px 2px 4px 0 rgba(255, 255, 255, 0.16),
      2px 2px 4px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
    color: ${({ theme }) => theme.text['input']};
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.24);
    font-weight: 700;
  }
`;
