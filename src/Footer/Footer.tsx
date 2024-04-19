import iconsSprite from '../assets/iconsSprite.svg';

import {
  ContactWrapper,
  FlexNav,
  FlexWrap,
  FlexWrapNav,
  FooterContainer,
  Icon,
  IconWrapper,
  LinkFooter,
  LogoFooter,
  TextFooter,
  TextTitle,
  WrapBottomMenu,
  WrapperFooter,
} from './Footer.styled';
import { routes } from '@/routes';

export const Footer = () => {
  return (
    <WrapperFooter>
      <FooterContainer>
        <FlexWrap>
          <div>
            <LogoFooter to={routes.HOME}>Kaetana</LogoFooter>
            <TextFooter>
              Перша українська <br />
              професійна косметика
            </TextFooter>
            <IconWrapper>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.instagram.com/"
              >
                <Icon>
                  <use href={iconsSprite + '#instagram'}></use>
                </Icon>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.twitter.com/"
              >
                <Icon>
                  <use href={iconsSprite + '#twitter'}></use>
                </Icon>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.facebook.com/"
              >
                <Icon>
                  <use href={iconsSprite + '#facebook'}></use>
                </Icon>
              </a>
            </IconWrapper>
          </div>
          <FlexNav>
            <div>
              <TextTitle>Наші контакти</TextTitle>
              <ContactWrapper>
                <a href="tel:+420776276063">+420776276063</a>
                <a href="mailto:kaetanacz@seznam.cz">kaetanacz@seznam.cz</a>
              </ContactWrapper>
            </div>
            <div>
              <TextTitle>Навігація по сайту</TextTitle>
              <FlexWrapNav>
                <LinkFooter to={routes.PRODUCTS}>Продукція</LinkFooter>
                <LinkFooter to={routes.CONTACT}>Контакти</LinkFooter>
                <LinkFooter to={routes.DELIVERY}>Доставка</LinkFooter>
                <LinkFooter to={routes.DELIVERY}>Корзина</LinkFooter>
              </FlexWrapNav>
            </div>
          </FlexNav>
        </FlexWrap>
        <WrapBottomMenu>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.facebook.com/"
          >
            Політика конфіденційності
                  </a>
                  <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.facebook.com/"
          >
            Договір оферти
                  </a>
                  <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.facebook.com/"
          >
            Розробка сайту
          </a>
        </WrapBottomMenu>
      </FooterContainer>
    </WrapperFooter>
  );
};
