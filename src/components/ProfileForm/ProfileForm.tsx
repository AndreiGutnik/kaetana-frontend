import { Formik } from 'formik';

import { Button, ButtonWrapper, FormStyled, Input } from './ProfileForm.styled';

export const ProfileForm = () => {
  const initialValues = {
    firstName: 'FirstName',
    lastName: 'LastName',
    email: 'user@gmail.com',
    phone: '+420 111 111 111',
  };

  const onSubmit = () => {
    console.log('OK');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyled autoComplete="off">
          <Input
            type="text"
            name="firstName"
            placeholder="FirstName"
          />
          <Input
            type="text"
            name="lastName"
            placeholder="LastName"
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
          />
          <ButtonWrapper>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              Редагувати
            </Button>
          </ButtonWrapper>
        </FormStyled>
      )}
    </Formik>
  );
};
