import { css } from 'styled-components';

export const _dropdown_container = css`
  display: flex;
  flex-direction: column;
`;

export const _dropdown_input = css`
  ${({ theme }) => theme.styles.forms['input_popover']};
  display: flex;
  flex-direction: row;
`;

export const _dropdown_selected = css``;

export const _dropdown_button = css``;

export const _dropdown_float = css`
  width: ${({ $left, $right }) => ($left || $right ? '0' : '100%')};
  height: ${({ $top, $bottom }) => ($top || $bottom ? '0' : '100%')};
`;

export const _dropdown_options = css``;

export const _dropdown_item = css``;

export const _dropdown_name = css``;
