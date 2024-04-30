import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`
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

export const Button = styled.button`
  width: 229px;
  padding: 18px;
  background-color: ${({ theme }) => theme.backgroundGray};
  transition: background-color 250ms ${({ theme }) => theme.cubicBezier};
  color: ${({ theme }) => theme.colorBlack};
  font-size: 18px;
  font-weight: 700;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.lightPurple};
  }
`;

export const ButtonWrapper = styled.div`
  width: 216px;
  height: 56px;
  padding-top: 6px;
  padding-left: 8px;
  margin: 52px 0 0 auto;
  border-top: 2px solid ${({ theme }) => theme.colorGray};
  border-left: 2px solid ${({ theme }) => theme.colorGray};
`;
