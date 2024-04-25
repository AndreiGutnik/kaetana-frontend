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
  margin-bottom: 99px;
`;
