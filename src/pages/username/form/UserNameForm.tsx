import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import { BaseForm } from '../../../components/baseForm/BaseForm';
import { IUserNameValues } from './UserNameFormWrapper';

export const UserNameForm = () => {
  const { submitForm, values, handleChange, errors } =
    useFormikContext<IUserNameValues>();

  const { name: nameValidationError, surname: surnameValidationError } = errors;

  return (
    <BaseForm onSubmit={submitForm} title="Please enter your full name">
      <FormControl isRequired isInvalid={!!nameValidationError}>
        <FormLabel>NAME</FormLabel>
        <Input
          variant="withShadow"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormErrorMessage>{nameValidationError}</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!!surnameValidationError}>
        <FormLabel>SURNAME</FormLabel>
        <Input
          variant="withShadow"
          id="surname"
          name="surname"
          value={values.surname}
          onChange={handleChange}
        ></Input>
        <FormErrorMessage>{surnameValidationError}</FormErrorMessage>
      </FormControl>
    </BaseForm>
  );
};
