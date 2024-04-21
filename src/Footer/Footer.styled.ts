import { Link } from 'react-router-dom';
import styled from 'styled-components';



import { Container } from '@/components/Container';


export const LogoFooter = styled(Link)`
  display: block;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colorWhite};
  text-transform: uppercase;
  margin-bottom: 18px;
  transform: scale();
  transition:
    transform 250ms ${({ theme }) => theme.cubicBezier},
    color 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${({ theme }) => theme.lightPurple};
  }
  @media screen and (min-width: 1648px) {
    position: relative;
    color: ${({ theme }) => theme.colorBlack};
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      right: -24px;
      display: block;
      width: 67px;
      height: 2px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colorBlack};
    }
  }
`;

export const WrapperFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundPink};
  @media screen and (min-width: 1648px) {
    background-color: ${({ theme }) => theme.backgroundWhite};
    margin: 0 auto;
  }
`;

export const FooterContainer = styled(Container)`
  padding: 66px 46px;
  @media screen and (min-width: 1648px) {
    padding: 0px 35px;
    width: 1304px;
    height: 352px;
  }
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(32.78 / 20); /* 32.78px */
  letter-spacing: 0.6px;
  margin-bottom: 41px;
  @media screen and (min-width: 1648px) {
    color: ${({ theme }) => theme.colorBlack};
  }
`;

export const Icon = styled.svg`
  fill: ${({ theme }) => theme.colorWhite};
  width: 32px;
  height: 32px;
  transform: scale();
  transition:
    transform 250ms ${({ theme }) => theme.cubicBezier},
    fill 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: ${({ theme }) => theme.lightPurple};
  }
  @media screen and (min-width: 1648px) {
    fill: ${({ theme }) => theme.colorBlack};
    width: 60px;
    height: 60px;
    &:hover,
    &:focus {
      transform: scale(1.1);
      fill: ${({ theme }) => theme.lightPurple};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 48px;
  justify-content: left;
  margin-bottom: 80px;
`;

export const TextTitle = styled.p`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 20px;
  font-weight: 700;
  line-height: calc(32.78 / 20); /* 32.78px */
  letter-spacing: 0.6px;
  margin-bottom: 35px;
  @media screen and (min-width: 1648px) {
    color: ${({ theme }) => theme.colorBlack};
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 51px;
  margin-bottom: 87px;
  @media screen and (min-width: 1648px) {
    gap: 101px;
  }

  & a {
    color: ${({ theme }) => theme.colorWhite};
    font-weight: 500;
    transform: scale();
    transition:
      transform 250ms ${({ theme }) => theme.cubicBezier},
      color 250ms ${({ theme }) => theme.cubicBezier};

    &:hover,
    &:focus {
      transform: scale(1.05);
      color: ${({ theme }) => theme.lightPurple};
    }
    @media screen and (min-width: 1648px) {
      color: ${({ theme }) => theme.colorGray};
    }
  }
`;

export const LinkFooter = styled(Link)`
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 500;
  display: block;
  transform: scale();
  transition:
    transform 250ms ${({ theme }) => theme.cubicBezier},
    color 250ms ${({ theme }) => theme.cubicBezier};

  &:not(:last-child) {
    margin-bottom: 41px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${({ theme }) => theme.lightPurple};
  }
  @media screen and (min-width: 1648px) {
    color: ${({ theme }) => theme.colorGray};
  }
`;

export const FlexWrap = styled.div`
  @media screen and (min-width: 1648px) {
    display: flex;
    gap: 230px;
  }
`;

export const FlexWrapNav = styled.div`
  @media screen and (min-width: 1648px) {
    display: flex;
    gap: 120px;
  }
`;

export const FlexNav = styled.div`
  @media screen and (min-width: 1648px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
  }
`;
export const WrapBottomMenu = styled.div`
position: relative;
  display: none;
  @media screen and (min-width: 1648px) {
    display: flex;
    gap: 230px;
    padding-left: 150px;
    padding-right: 130px;
    & a {
      color: ${({ theme }) => theme.colorGray};
      font-weight: 500;
      transform: scale();
      transition:
        transform 250ms ${({ theme }) => theme.cubicBezier},
        color 250ms ${({ theme }) => theme.cubicBezier};

      &:hover,
      &:focus {
        transform: scale(1.05);
        color: ${({ theme }) => theme.lightPurple};
      }
    }
    &::before {
      content: '';
      position: absolute;
    left: -35px;
    top:-27px;
      display: block;
      width: 1305px;
      height: 2px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colorPseudo};
    }
  }
`;