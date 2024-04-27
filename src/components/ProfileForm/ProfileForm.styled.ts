import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  font-size: 32px;
  font-weight: 500;
  width: 490px;
  border: none;
  background-color: ${({ theme }) => theme.backgroundGray};
  padding: 16px 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colorGray};
    font-size: 24px;
    font-weight: 400;
    line-height: calc(30.096 / 24); /* 30.096px */
  }
`;
