import styled from 'styled-components';

import { Container } from '@/components/Container';

export const ContainerProfile = styled(Container)`
  padding-top: 143px;
  padding-bottom: 221px;
`;

export const ProfileWrap = styled.div`
  width: 1004px;
  margin: 0 auto;
  padding: 37px 121px 42px 65px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Title = styled.h1`
  font-size: 45px;
  line-height: calc(56.43 / 45); /* 56.43px */
  margin-bottom: 70px;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 38px;
`;

export const Button = styled.button`
  font-size: 32px;
  font-weight: 500;

  &:active {
    font-weight: 700;
  }
`;

export const Content = styled.div``;

export const LogoutBtn = styled.button`
  font-size: 32px;
  font-weight: 300;
  margin-top: 159px;
`;
