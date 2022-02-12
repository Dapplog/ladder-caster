import styled, { css } from 'styled-components';

export const _header = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 16px 8px 16px;
`;

export const _title = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 4px;
  > span {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    line-height: 1;
    padding: 4px 0;
  }
`;

export const _day = css`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _loading = css`
  width: 100%;
  min-height: 6px;
  height: 6px;
  display: flex;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const _bar = css`
  width: 100%;
  min-height: 6px;
  height: 6px;
  display: flex;
  border-radius: 2px;
  background: ${({ theme }) => theme.background['base']};
  box-shadow: ${({ theme }) => theme.shadow['loading']};
  overflow: hidden;
`;

export const _fill = css`
  width: 100%;
  min-height: 6px;
  height: 6px;
  border-radius: 2px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  transform: translateX(-67%);
`;

export const _divider = css`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.border['base']};
  margin-top: 20px;
`;

export const _xp = css`
  width: 100%;
  min-height: 6px;
  height: 6px;
  border-radius: 50px;
  background: linear-gradient(90deg, #e299f4 0%, #77c1fd 50%, #96e9b7 100%);
  box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.4);
`;
