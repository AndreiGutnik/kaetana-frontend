import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrap = styled.div`
  padding-top: 123px;
  padding-bottom: 221px;
`;

export const FormStyled = styled(Form)`
  width: 1004px;
  margin: 0 auto;
  padding: 56px 110px 77px 128px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Title = styled.h1`
  font-size: 45px;
  line-height: calc(56.43 / 45); /* 56.43px */
  margin-bottom: 99px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 74px;
`;

export const Label = styled.label`
  width: 665px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  line-height: calc(40.128 / 32); /* 40.128px */
`;

export const FieldStyled = styled(Field)`
  width: 435px;
  border: none;
  background-color: ${({ theme }) => theme.backgroundGray};
  padding: 20px 35px;

  &::placeholder {
    color: ${({ theme }) => theme.colorGray};
    font-size: 24px;
    font-weight: 400;
    line-height: calc(30.096 / 24); /* 30.096px */
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 24px;
  font-weight: 300;
  text-decoration-line: underline;
  transform: scale();
  transition: transform 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
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
  border-top: 2px solid ${({ theme }) => theme.colorGray};
  border-left: 2px solid ${({ theme }) => theme.colorGray};
`;
