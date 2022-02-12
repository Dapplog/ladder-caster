import styled from 'styled-components';
import { m } from 'framer-motion';

export const _items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const _header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const _container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
`;

export const _type = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > svg {
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    color: ${({ theme }) => theme.text['base']};
  }
  > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    margin-left: 8px;
  }
`;

export const _equipment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  white-space: nowrap;
  overflow: hidden;
`;

export const _equip = styled(m.div)`
  padding: 4px 12px;
  color: ${({ theme }) => theme.highlight['background']};
  border: 2px solid ${({ theme }) => theme.border['highest']};
  border-radius: 8px;
  background: ${({ theme }) => theme.background['button_active']};
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
`;

export const _scroll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const _body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
`;

export const _visual = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const _image = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
`;

export const _power = styled.div`
  min-width: 20px;
  width: 20px;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  margin-left: 16px;
  border-radius: 50px;
  border: 2px solid ${({ theme, $rarity }) => theme.rarity[$rarity]};
  background: radial-gradient(
    ${({ theme, $rarity }) =>
      `${theme.rarity[$rarity]}, ${theme.background['lowest']}`}
  );
  opacity: 0.65;
`;

export const _title = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  flex-direction: column;
  align-items: ${({ $right }) => ($right ? 'flex-end' : 'flex-start')};
  letter-spacing: 0.5px;
  padding-left: 14px;
  padding-right: 4px;
`;

export const _name = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  display: flex;
  flex-direction: row;
  justify-content: ${({ $right }) => ($right ? 'flex-end' : 'flex-start')};
  line-height: 1;
`;

export const _tier = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  line-height: 1;
  display: flex;
  flex-direction: row;
  justify-content: ${({ $right }) => ($right ? 'flex-end' : 'flex-start')};
  > span {
    font-weight: 700;
    color: ${({ theme }) => theme.text['base']};
    margin-left: 6px;
  }
  > b {
    font-family: 'Georgia', serif;
    font-weight: 700;
    margin-left: 6px;
    color: ${({ theme }) => theme.text['active']};
  }
`;

export const _rarity = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme, $rarity }) => theme.rarity[$rarity]};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  line-height: 1;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const _wrapper = styled.div`
  width: 100%;
`;

export const _attribute = styled.div`
  width: 100%;
  min-height: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme, $attribute }) => theme.attribute[$attribute]};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  line-height: 1;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const _text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  > span {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text['base']};
    line-height: 1;
  }
`;

export const _shadow = styled.div`
  min-width: 0;
  width: 0;
  min-height: 26px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const _gradient = styled.div`
  min-width: 48px;
  width: 48px;
  min-height: 26px;
  height: 26px;
  background: linear-gradient(
    270deg,
    ${({ theme }) => `${theme.background['highest']}, transparent`}
  );
`;
