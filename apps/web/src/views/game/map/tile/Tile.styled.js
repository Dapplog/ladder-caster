import styled from 'styled-components';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';
import { m } from 'framer-motion';

export const _tile = styled.div`
  min-width: 60px;
  width: 60px;
  max-width: 72px;
  min-height: 64px;
  height: 64px;
  max-height: 76px;
  display: flex;
  margin-right: 8px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const _cutout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.map['cutout']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
`;

export const _float = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_tile_enchant']};
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const _enchant = styled(m.div)`
  min-width: 32px;
  width: 32px;
  min-height: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding-right: 2px;
  pointer-events: none;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ $color, theme }) =>
    $color ||
    `radial-gradient(circle,
                  ${theme.background['base']} 0%,
                  ${theme.background['high']} 60%)`};
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme, $element }) => theme[$element]?.['text']};
    margin-right: 2px;
  }
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme, $element }) => theme[$element]?.['text']};
    margin-left: 2px;
  }
`;

export const _backdrop = styled(m.div)`
  min-width: 28px;
  width: 28px;
  min-height: 20px;
  height: 20px;
  border-radius: 50px;
  pointer-events: none;
  background: ${({ theme }) => theme.background['lowest']};
`;

export const _background = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_tile_background']};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ $color, theme }) =>
    $color || theme.background['button']};
  background-image: ${({ theme, $element }) =>
    bgTexture(TextureFur(theme[$element]?.['texture'], 0.16))};
  background-size: ${({ $tier }) => ($tier ? $tier * 8 : 8)}px;
  background-repeat: repeat;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2px 2px 2px;
`;

export const _element = styled.div`
  width: 100%;
  max-width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme, $element, $casters }) =>
    theme[$element]?.[$casters ? 'highlight' : 'dark_tile']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  overflow: hidden;
  white-space: nowrap;
`;

export const _icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    min-width: 12px;
    width: 12px;
    min-height: 12px;
    height: 12px;
    color: ${({ theme, $element }) => theme[$element]?.['resource']};
    transform: translateX(${({ $offset }) => `${$offset}%`});
    opacity: ${({ $casters }) => ($casters ? 1 : 0.4)};
  }
`;

export const _tier = styled.div`
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 6px;
  > span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, $element }) => theme[$element]?.['resource']};
    line-height: 1;
    font-family: 'Roboto Slab', serif;
    text-shadow: 2px 2px 3px
      ${({ theme, $element }) => theme[$element]?.['dark_tile']};
    letter-spacing: 1px;
  }
`;

export const _casters = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, $element }) => theme[$element]?.['resource']};
  line-height: 1;
  top: 1px;
  margin-left: 2px;
`;

export const _floaticon = styled.div`
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > svg {
    min-width: 42px;
    width: 42px;
    min-height: 42px;
    height: 42px;
    color: ${({ theme, $element }) => theme[$element]?.['resource']};
    opacity: 0.16;
    position: relative;
    bottom: ${({ $element }) =>
      $element === 'craft' ? '4px' : $element === 'gold' ? '4px' : '8px'};
  }
`;

export const _chip = styled.div`
  min-width: 36px;
  width: 36px;
  min-height: 36px;
  height: 36px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['button_active']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  border: 2px solid ${({ theme }) => theme.border['highest']};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 26px;
  > svg {
    min-width: 24px;
    width: 24px;
    min-height: 24px;
    height: 24px;
    color: ${({ theme }) => theme.highlight['background']};
    filter: drop-shadow(${({ theme }) => theme.shadow['text']});
  }
`;

export const _outline = styled.div`
  min-width: 36px;
  width: 36px;
  min-height: 36px;
  height: 36px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['lowest']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  border: 2px dashed ${({ theme }) => theme.border['highest']};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 26px;
  > svg {
    min-width: 24px;
    width: 24px;
    min-height: 24px;
    height: 24px;
    color: ${({ theme }) => theme.background['base']};
    filter: drop-shadow(${({ theme }) => theme.shadow['text']});
  }
`;
