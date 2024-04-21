import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../Container';

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 53px;
  margin-right: 113px;
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${({ theme }) => theme.colorBlack};
`;

export const LinkStyled = styled(Link)`
  margin: 11px 175px 6px 139px;
`;

export const TelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-right: 174px;
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colorDarkGray};
  font-size: 18px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
