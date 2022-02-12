import styled, { createGlobalStyle } from 'styled-components';
import { bgTexture } from '../textures';
import { TextureFur } from '../textures/fur.texture';
import { media } from '../index';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  html {
    width: 100%;
    min-height: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
    touch-action: manipulation;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  *::selection {
    background-color: ${({ theme }) => theme.highlight.background};
    color: ${({ theme }) => theme.highlight.color};
  }
  
  *::-moz-selection {
    background-color: ${({ theme }) => theme.highlight.background};
    color: ${({ theme }) => theme.highlight.color};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    ::selection {
      background: transparent;
    }
  }

  * {
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', "HoloLens MDL2 Assets", "Arial", sans-serif;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    box-sizing: border-box;
    user-select: none;
    font-weight: 500;
    &::-webkit-scrollbar {
      display: none;
    }
    &:focus {
      outline: 0;
    }
  }

  input::-ms-clear {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }

  body {
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    overflow-x: hidden;
    height: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.background['lowest']};
  }

  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const _app = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.app};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.map['cutout']};
  background-image: ${({ theme }) =>
    bgTexture(TextureFur(theme.map['dark_texture'], 1))};
  background-size: 6px;
  background-repeat: repeat;
  box-shadow: inset 0 0 48px 4px ${({ theme }) => theme.map['dark_texture']};
  ${media.tablet`
    padding: 2px;
  `}
`;

export const _view = styled.div`
  width: 100%;
  min-width: 100%;
  min-height: ${({ $vh }) => `calc(${$vh}px * 100)`};
  height: ${({ $vh }) => `calc(${$vh}px * 100)`};
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
`;
