import { ErrorMessage } from 'formik';

import { TextError } from './InputError.styled';

interface FormErrorProps {
  name: string;
}

export const FormError = ({ name }: FormErrorProps) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <TextError>{message}</TextError>}
    />
  );
};
