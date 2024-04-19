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
`;

export const WrapperFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundPink};
`;

export const FooterContainer = styled(Container)`
  padding: 66px 46px;
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(32.78 / 20); /* 32.78px */
  letter-spacing: 0.6px;
  margin-bottom: 41px;
`;

export const Icon = styled.svg`
  fill: ${({ theme }) => theme.colorWhite};
  width: 32px;
  height: 32px;
  transition: fill 250ms ${({ theme }) => theme.cubicBezier};
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.lightPurple};
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
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 51px;
  margin-bottom: 87px;
  color: ${({ theme }) => theme.colorWhite};
  font-family: 'Roboto Flex';
  font-weight: 500;
`;

export const LinkFooter = styled(Link)`
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 500;
  display: block;
  margin-bottom: 41px;
`;