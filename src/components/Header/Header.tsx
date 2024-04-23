import { Link } from 'react-router-dom';

import { Search } from '../Search/Search';

import {
  BurgerButton,
  HeaderContainer,
  Icon,
  IconWrap,
  Logo,
  SearchWrap,
  TelWrap,
} from './Header.styled';
import iconsSprite from '@/assets/iconsSprite.svg';
import logo from '@/assets/logo.png';
import useDevice from '@/hooks/useDevice';
import { routes } from '@/routes';

export const Header = () => {
  const { isMobile } = useDevice();

  console.log(isMobile);

  return (
    <header>
      <HeaderContainer>
        {!isMobile && (
          <IconWrap>
            <Link to={routes.PROFILE}>
              <Icon>
                <use href={iconsSprite + '#heart'}></use>
              </Icon>
            </Link>
            <Link to={routes.PROFILE}>
              <Icon>
                <use href={iconsSprite + '#cart'}></use>
              </Icon>
            </Link>
          </IconWrap>
        )}
        <SearchWrap>
          <Search />
          <Logo to={routes.HOME}>
            <img
              src={logo}
              alt="logo"
            />
          </Logo>
        </SearchWrap>
        {!isMobile && (
          <TelWrap>
            <Icon>
              <use href={iconsSprite + '#phone'}></use>
            </Icon>
            <a href="tel:+420776276063">+420 776 276 063</a>
          </TelWrap>
        )}
        <Link to={routes.PROFILE}>
          <Icon>
            <use href={iconsSprite + '#user'}></use>
          </Icon>
        </Link>
        {isMobile && (
          <BurgerButton type="button">
            <svg>
              <use href={iconsSprite + '#burger'}></use>
            </svg>
          </BurgerButton>
        )}
      </HeaderContainer>
    </header>
  );
};
