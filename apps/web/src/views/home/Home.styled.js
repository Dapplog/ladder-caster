import styled from 'styled-components';
import { TextureFur } from 'design/textures/fur.texture';
import { bgTexture } from 'design/textures';
import { Link } from 'react-router-dom';

export const _home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 120px;
`;

export const _button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['gold']?.['tile']};
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme['gold']?.['texture'], 0.16))};
  background-size: 8px;
  background-repeat: repeat;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  border: 2px solid ${({ theme }) => theme['gold']?.['dark_tile']};
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme['gold']?.['text']};
  text-shadow: 2px 2px 3px ${({ theme }) => theme['gold']?.['dark_tile']};
  letter-spacing: 0.5px;
  cursor: pointer;
`;
