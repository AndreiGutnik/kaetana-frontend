import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${({ theme }) => theme.colorGray};
`;

export const Input = styled.input`
  width: 164px;
  border: none;
  border-bottom: 1.2px solid ${({ theme }) => theme.colorDarkGray};

  &::placeholder {
    color: ${({ theme }) => theme.colorGray};
    font-size: 12px;
    font-weight: 300;
    padding: 5px;
  }
`;
