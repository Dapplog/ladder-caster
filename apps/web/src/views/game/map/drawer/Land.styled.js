import styled from 'styled-components';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';

export const _background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  background: ${({ theme, $element }) => theme[$element]?.['tile']};
  background-image: ${({ theme, $element }) =>
    bgTexture(TextureFur(theme[$element]?.['texture'], 0.16))};
  background-size: ${({ $tier }) => ($tier ? $tier * 8 : 8)}px;
  background-repeat: repeat;
  border-radius: 20px 20px 0 0;
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  padding-bottom: 164px;
`;

export const _land = styled.div``;
