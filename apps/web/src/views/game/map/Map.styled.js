import styled from 'styled-components';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';
import { m } from 'framer-motion';

export const _ladder = styled(m.div)`
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

export const _loading = styled.div`
  ${({ theme }) => theme.styles?.view?.['_loading']};
`;

export const _bar = styled.div`
  ${({ theme }) => theme.styles?.view?.['_bar']};
`;

export const _fill = styled.div`
  ${({ theme }) => theme.styles?.view?.['_fill']};
`;

export const _map = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme.map?.['texture'], 0.16))};
  background-size: 16px;
  background-repeat: repeat;
`;

export const _list = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

export const _row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const _level = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_levels']};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 0;
  padding-left: 1px;
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
    line-height: 1;
    opacity: 0.5;
  }
`;

export const _pace = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_levels']};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 0;
  padding-right: 1px;
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    text-shadow: ${({ theme }) => theme.shadow['text']};
    letter-spacing: 0.5px;
    line-height: 1;
    opacity: 0.5;
  }
`;

export const _indent = styled.div`
  min-width: 4px;
  min-height: 32px;
  opacity: 0.35;
  border-radius: ${({ $right }) =>
    $right ? '8px 0px 2px 8px' : '2px 8px 8px 0px'};
  background: ${({ theme }) => theme.text['base']};
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  margin: ${({ $right }) => ($right ? '0 0 0 8px' : '0 8px 0 0')};
`;

export const _portals = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_portals']};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: rotateX(${({ $rotate }) => `${$rotate || 0}deg`});
  transform-origin: 50% 0;
`;

export const _filters = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  border-bottom: 3px solid ${({ theme }) => theme.background['base']};
  box-shadow: 0 8px 0 0 #1a1e2d;
`;

export const _shadow = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _gradient = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex['map_shadow']};
  width: 100%;
  min-height: ${({ $height }) => ($height ? `${$height}px` : '0')};
  height: ${({ $height }) => ($height ? `${$height}px` : '0')};
  background: ${({ theme }) => `linear-gradient(0deg,
  rgba(0,0,0,0) 0%,
  rgba(0,0,0,0) 50%,
  ${theme.map['cutout']} 100%)`};
  pointer-events: none;
`;

export const _bottom = styled.div`
  width: 100%;
  height: 0;
`;
