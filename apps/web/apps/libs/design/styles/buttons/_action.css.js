import { css } from 'styled-components';

export const _action_popover = css`
  width: 100%;
  height: 36px;
  ${({ $left, $right }) => [
    $left &&
      css`
        padding-right: 2px;
      `,
    $right &&
      css`
        padding-left: 2px;
      `,
  ]}
  > button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    box-shadow: ${({ theme }) => theme.shadow['card']};
    border: none;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    ${({ $left, $right, $cancel, $submit }) => [
      $left &&
        css`
          border-radius: 22px 12px 12px 22px;
        `,
      $right &&
        css`
          border-radius: 12px 22px 22px 12px;
        `,
      $cancel &&
        css`
          background: ${({ theme }) => theme.background['cancel']};
          color: ${({ theme }) => theme.text['cancel']};
        `,
      $submit &&
        css`
          background: ${({ theme }) => theme.secondary['background']};
          color: ${({ theme }) => theme.secondary['solid']};
        `,
    ]}
  }
`;
