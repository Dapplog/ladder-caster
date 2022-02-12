import styled, { css } from 'styled-components';

export const _attributes = styled.div`
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.background['base']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _attribute = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['faded']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _type = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['faded']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  line-height: 1;
  margin-bottom: 4px;
`;

export const _value = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  line-height: 1.25;
  ${({ $tier }) =>
    $tier &&
    css`
      font-family: 'Droid Serif', serif;
    `};
  > b {
    font-weight: 700;
    color: ${({ theme, $attribute }) => theme.attribute[$attribute]};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export const _skill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _icon = styled.div`
  min-width: 28px;
  width: 28px;
  min-height: 28px;
  height: 28px;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    color: ${({ theme, $attribute }) => theme.attribute[$attribute]};
  }
`;

export const _description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
