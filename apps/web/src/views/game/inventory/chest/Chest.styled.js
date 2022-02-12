import styled from 'styled-components';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';

export const _chest = styled.div`
  min-height: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const _empty = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background['lowest']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
`;

export const _full = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gold['dark_tile']};
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme['gold']?.['texture'], 0.32))};
  background-size: ${({ $tier }) => ($tier ? $tier * 8 : 8)}px;
  background-repeat: repeat;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  cursor: pointer;
`;

export const _container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const _center = styled.div`
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const _float = styled.div`
  height: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const _tier = styled.div`
  min-width: 42px;
  width: 42px;
  min-height: 42px;
  height: 42px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _disabled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6px;
  > svg {
    min-width: 20px;
    width: 20px;
    min-height: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text['faded']};
    opacity: 0.72;
    filter: blur(1px);
  }
  > span {
    font-size: 10px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 1px;
    line-height: 16px;
    color: ${({ theme }) => theme.text['faded']};
    opacity: 1;
  }
`;

export const _active = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6px;
  > svg {
    min-width: 20px;
    width: 20px;
    min-height: 20px;
    height: 20px;
    color: ${({ theme }) => theme['gold']['resource']};
    opacity: 0.8;
  }
  > span {
    font-size: 10px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 1px;
    line-height: 16px;
    color: ${({ theme }) => theme['gold']['resource']};
    opacity: 0.8;
  }
`;

export const _notification = styled.div`
  min-width: 20px;
  width: 20px;
  min-height: 20px;
  height: 20px;
  border-radius: 50px;
  background: ${({ theme }) => theme.gold['tile']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  position: relative;
  transform: translate(25%, -25%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadow['text']};
  color: ${({ theme }) => theme['gold']['resource']};
`;
