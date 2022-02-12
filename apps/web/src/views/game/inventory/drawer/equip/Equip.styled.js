import styled from 'styled-components';
import { m } from 'framer-motion';

export const _equip = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const _player = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  margin-right: 6px;
  > svg {
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _empty = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['cutout']};
  > svg {
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _image = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
`;

export const _caster = styled(m.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 12px;
  padding: 4px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  border: 2px solid ${({ theme }) => theme.border['highest']};
  cursor: pointer;
`;

export const _item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _current = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const _arrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  > svg {
    min-width: 20px;
    width: 20px;
    min-height: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _next = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  > img {
    min-width: 40px;
    width: 40px;
    min-height: 40px;
    height: 40px;
  }
`;

export const _compare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const _from = styled.div`
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme, $attribute }) => theme.attribute[$attribute]};
  }
`;

export const _to = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme, $attribute }) => theme.attribute[$attribute]};
  }
`;

export const _choose = styled.div`
  min-width: 36px;
  width: 36px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 14px;
    width: 14px;
    min-height: 14px;
    height: 14px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _button = styled.div``;
