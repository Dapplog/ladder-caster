import styled from 'styled-components';
import { TextureFur } from 'design/textures/fur.texture';
import { bgTexture } from 'design/textures';

export const _progress = styled.div`
  width: 100%;
  min-height: 10px;
  height: 10px;
  display: flex;
  border-radius: 8px;
  background: ${({ theme }) => theme.background['high']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  padding: 1px;
  overflow: hidden;
`;

export const _bar = styled.div`
  width: 100%;
  min-height: 8px;
  height: 8px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

export const _fill = styled.div`
  width: 100%;
  min-height: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme['gold']['texture']};
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme['gold']?.['dark_tile'], 0.5))};
  background-size: 16px;
  background-repeat: repeat;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  transform: translateX(-67%);
`;
