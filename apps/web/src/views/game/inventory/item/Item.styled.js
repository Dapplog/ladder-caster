import styled from 'styled-components';

export const _item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const _float = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const _background = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${({ $equipped }) => ($equipped ? '12px' : '12px')};
  background: ${({ theme, $rarity }) =>
    `radial-gradient(${theme.rarity[$rarity]}, ${theme.background['lowest']})`};
  border: 2px solid ${({ theme, $rarity }) => theme.rarity[$rarity]};
  opacity: 0.6;
`;
