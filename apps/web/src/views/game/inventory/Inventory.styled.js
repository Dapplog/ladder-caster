import styled from 'styled-components';
import { m } from 'framer-motion';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';

export const _inventory = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const _header = styled.div`
  ${({ theme }) => theme.styles?.view?.['_header']};
`;

export const _title = styled.h3`
  ${({ theme }) => theme.styles?.view?.['_title']};
`;

export const _divider = styled.div`
  ${({ theme }) => theme.styles?.view?.['_divider']};
`;

export const _container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px 120px 16px;
  overflow-y: scroll;
`;

export const _category = styled.div``;

export const _chests = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 72px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  background-color: ${({ theme }) => theme['craft']?.['tile']};
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme['craft']?.['texture'], 0.16))};
  background-size: 12px;
  background-repeat: repeat;
`;

export const _subtitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-left: 8px;
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    color: ${({ theme }) => theme.text['base']};
  }
  > span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    margin-left: 12px;
    top: 1px;
    line-height: 1;
  }
`;

export const _tiers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 8px;
`;

export const _loot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const _action = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 4px;
`;

export const _items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 96px;
  border-bottom: 2px solid ${({ theme }) => theme.border['base']};
  margin-top: 12px;
  padding: 8px 0;
`;

export const _subheader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const _info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 4px;
  padding-right: 12px;
`;

export const _help = styled.div`
  min-width: 24px;
  width: 24px;
  min-height: 24px;
  height: 24px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['highest']};
`;

export const _wallet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 4px;
  border-radius: 8px;
  > span {
    top: 3px;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text['base']};
    padding-left: 6px;
    padding-right: 8px;
  }
  > svg {
    min-height: 16px;
    height: 16px;
    min-width: 16px;
    width: 16px;
    color: ${({ theme }) => theme.text['base']};
  }
`;
