import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colorBlack};

  @media screen and (min-width: 1648px) {
    width: 28px;
    height: 28px;
    fill: ${({ theme }) => theme.colorGray};
  }
`;

export const Input = styled.input`
  @media screen and (min-width: 1648px) {
    width: 164px;
    border: none;
    border-bottom: 1.2px solid ${({ theme }) => theme.colorDarkGray};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorGray};
    font-size: 12px;
    font-weight: 300;
    padding: 5px;
  }
`;
