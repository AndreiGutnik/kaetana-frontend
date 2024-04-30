import { useState } from 'react';

import {
  Button,
  ButtonWrap,
  ContainerProfile,
  Content,
  ContentWrap,
  LogoutBtn,
  ProfileWrap,
  Title,
} from './Profile.styled';
import { History } from '@/components/History/History';
import { ProfileForm } from '@/components/ProfileForm/ProfileForm';

export interface ProfileProps {}

export default function Profile({}: ProfileProps) {
  const [profile, setProfile] = useState<string>('profile');

  const onProfile = () => {
    setProfile('profile');
  };

  const onHistory = () => {
    setProfile('cart');
  };

  return (
    <ContainerProfile>
      <ProfileWrap>
        <Title>Профіль</Title>
        <ContentWrap>
          <ButtonWrap>
            <Button
              type="button"
              onClick={onProfile}
            >
              Мої дані
            </Button>
            <Button
              type="button"
              onClick={onHistory}
            >
              Мої замовлення
            </Button>
          </ButtonWrap>
          <Content>{profile === 'profile' ? <ProfileForm /> : <History />}</Content>
        </ContentWrap>
        <LogoutBtn type="button">Вийти з аккаунту</LogoutBtn>
      </ProfileWrap>
    </ContainerProfile>
  );
}
