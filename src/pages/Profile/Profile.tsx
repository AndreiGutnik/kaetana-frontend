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
import { Favorites } from '@/components/Favorites/Favorites';
import { History } from '@/components/History/History';
import { ProfileForm } from '@/components/ProfileForm/ProfileForm';

export interface ProfileProps {}

export default function Profile({}: ProfileProps) {
  const [profile, setProfile] = useState<string>('profile');

  const onProfile = () => {
    setProfile('profile');
  };

  const onFavorites = () => {
    setProfile('favorites');
  };

  const onCart = () => {
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
              onClick={onFavorites}
            >
              Лайкнуті
            </Button>
            <Button
              type="button"
              onClick={onCart}
            >
              Мої замовлення
            </Button>
          </ButtonWrap>
          <Content>
            {profile === 'profile' ? (
              <ProfileForm />
            ) : profile === 'favorites' ? (
              <Favorites />
            ) : (
              <History />
            )}
          </Content>
        </ContentWrap>
        <LogoutBtn type="button">Вийти з аккаунту</LogoutBtn>
      </ProfileWrap>
    </ContainerProfile>
  );
}
