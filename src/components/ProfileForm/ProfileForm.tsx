import { FormWrap, Input } from './ProfileForm.styled';

export const ProfileForm = () => {
  const user = {
    firstName: 'FirstName',
    lastName: 'LastName',
    email: 'user@gmail.com',
  };

  return (
    <FormWrap>
      <Input
        type="text"
        name="firstName"
        placeholder="FirstName"
        value={user.firstName}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="LastName"
        value={user.lastName}
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        value={user.email}
      />
    </FormWrap>
  );
};
