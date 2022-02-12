import styled from 'styled-components';

export const _background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  border-radius: 24px;
  padding-bottom: 164px;
`;

export const _player = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  min-width: 100%;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: scroll;
`;

export const _mining = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const _details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const _caption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px 0 8px;
  > p {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text['base']};
  }
`;

export const _title = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  margin-bottom: 6px;
`;

export const _description = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text['base']};
  margin-bottom: 16px;
`;

export const _breakpoint = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  min-height: 3px;
  max-height: 3px;
  border-radius: 50px;
  background: ${({ theme }) => theme.background['base']};
  box-shadow: ${({ theme }) => theme.shadow['divider']};
`;

export const _section = styled.div`
  display: flex;
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  flex-direction: column;
  align-items: ${({ $left, $center }) =>
    $left ? 'flex-start' : $center ? 'center' : 'flex-end'};
`;

export const _type = styled.span`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
`;

export const _level = styled.span`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

export const _elements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 28px;
`;

export const _loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 32px 0 16px;
  min-height: 20px;
`;

export const _edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
  cursor: pointer;
  > svg {
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    color: ${({ theme }) => theme.text['base']};
    padding: 4px;
  }
`;

export const _next = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
  text-shadow: ${({ theme }) => theme.shadow['text']};
  letter-spacing: 0.5px;
  min-height: 20px;
  padding-left: 16px;
  white-space: nowrap;
`;

export const _left = styled.div``;

export const _float = styled.div`
  width: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const _close = styled.div`
  min-width: 48px;
  width: 48px;
  max-width: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

export const _exit = styled.div`
  min-width: 72px;
  width: 72px;
  min-height: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.background['highest']};
  box-shadow: ${({ theme }) => theme.shadow['frost']};
  bottom: 8px;
  left: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['base']};
`;
