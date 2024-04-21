import iconsSprite from '../../assets/iconsSprite.svg';
import logo from '../../assets/logo.svg';
import { Search } from '../Search/Search';

import { Button, HeaderContainer, Icon, IconWrap, LinkStyled, TelWrap } from './Header.styled';
import { routes } from '@/routes';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <IconWrap>
          <Button type="button">
            <Icon>
              <use href={iconsSprite + '#heart'}></use>
            </Icon>
          </Button>
          <Button type="button">
            <Icon>
              <use href={iconsSprite + '#cart'}></use>
            </Icon>
          </Button>
        </IconWrap>
        <Search />
        <LinkStyled to={routes.HOME}>
          <img
            src={logo}
            alt="logo"
          />
        </LinkStyled>
        <TelWrap>
          <Icon>
            <use href={iconsSprite + '#phone'}></use>
          </Icon>
          <a href="tel:+420776276063">+420 776 276 063</a>
        </TelWrap>
        <Button type="button">
          <Icon>
            <use href={iconsSprite + '#user'}></use>
          </Icon>
        </Button>
      </HeaderContainer>
    </header>
  );
};
