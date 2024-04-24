import styled from 'styled-components';

export const TextError = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: calc(25.722 / 18); /* 25.722px */
  text-align: right;
  color: ${({ theme }) => theme.colorRed};
  margin-top: 14px;
  /* margin-bottom: 74px; */
`;
