import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../Container';

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 44px 49px 6px 49px;

  @media screen and (min-width: 1648px) {
    padding-top: 11px;
    padding-bottom: 7px;
  }
`;

export const IconWrap = styled.div`
  @media screen and (min-width: 1648px) {
    display: flex;
    justify-content: center;
    gap: 53px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colorBlack};

  @media screen and (min-width: 1648px) {
    width: 28px;
    height: 28px;
  }
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 86px;
  margin-right: 24px;

  @media screen and (min-width: 1648px) {
    flex-direction: row;
    gap: 139px;
    margin-left: 113px;
    margin-right: 175px;
  }
`;

export const Logo = styled(Link)`
  & img {
    width: 76px;
    height: 62px;

    @media screen and (min-width: 1648px) {
      width: 143px;
      height: 94px;
    }
  }
`;

export const TelWrap = styled.div`
  @media screen and (min-width: 1648px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-right: 174px;
  }
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colorDarkGray};
  font-size: 18px;
`;

export const BurgerButton = styled.button`
  margin-left: 20px;
  padding-bottom: 7px;

  & svg {
    width: 55px;
    height: 55px;
  }
`;
