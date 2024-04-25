import { ContainerProfile, ProfileWrap, Title } from './Profile.styled';

export interface ProfileProps {}

export default function Profile({}: ProfileProps) {
  return (
    <ContainerProfile>
      <ProfileWrap>
        <Title>Профіль</Title>
      </ProfileWrap>
    </ContainerProfile>
  );
}
