import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  Button,
  ButtonWrap,
  ButtonWrapper,
  FieldStyled,
  FormStyled,
  FormWrap,
  InputWrap,
  Label,
  LinkStyled,
  Title,
} from './LoginForm.styled';
import { FormError } from '@/components/InputError/InputError';
import { routes } from '@/routes';

const initialValues = {
  email: '',
  password: '',
};

const validationScheme = object().shape({
  email: string().email().required(),
  password: string().min(6).max(20).required(),
});

export const LoginForm = () => {
  const onSubmit = () => {
    console.log('Submit');
  };

  return (
    <FormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyled autoComplete="off">
            <Title>Вхід в аккаунт</Title>
            <InputWrap>
              <div>
                <Label>
                  E-mail:
                  <FieldStyled
                    type="email"
                    name="email"
                    placeholder="E-mail:"
                  />
                </Label>
                <FormError name="email" />
              </div>
              <div>
                <Label>
                  Пароль:
                  <FieldStyled
                    type="password"
                    name="password"
                    placeholder="Пароль"
                  />
                </Label>
                <FormError name="password" />
              </div>
            </InputWrap>
            <ButtonWrap>
              <LinkStyled to={routes.SIGNUP}>Немає аккаунту? Зареєструйся</LinkStyled>
              <ButtonWrapper>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  Підтвердити
                </Button>
              </ButtonWrapper>
            </ButtonWrap>
          </FormStyled>
        )}
      </Formik>
    </FormWrap>
  );
};
