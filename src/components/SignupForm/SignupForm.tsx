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
} from './SignupForm.styled';
import { FormError } from '@/components/InputError/InputError';
import { routes } from '@/routes';

const initialValues = {
  email: '',
  password: '',
  passwordRepeat: '',
};

const validationScheme = object().shape({
  email: string().email().required(),
  password: string().min(6).max(20).required(),
  passwordRepeat: string().min(6).max(20).required(),
});

export const SignupForm = () => {
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
            <Title>Реєстрація</Title>
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
              <div>
                <Label>
                  Знову введіть
                  <br />
                  пароль:
                  <FieldStyled
                    type="password"
                    name="passwordRepeat"
                    placeholder="Пароль"
                  />
                </Label>
                <FormError name="passwordRepeat" />
              </div>
            </InputWrap>
            <ButtonWrap>
              <LinkStyled to={routes.LOGIN}>Вже є аккаунт? Увійдіть до аккаунту</LinkStyled>
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
