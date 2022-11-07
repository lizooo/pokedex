import { Formik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { POKEMONS_PATH } from '../../../components/navigation/PathNames';
import { AuthContext } from '../../../context/AuthContext';
import { formatDate, IBirthDateValues } from '../utils';
import { BirthDateForm } from './BirthDateForm';
import { birthDateValidationSchema } from './validationSchema';

export const BirthDateFormWrapper = () => {
  const { submitBirthDate } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues: IBirthDateValues = {
    month: '01',
    day: 1,
    year: 2022,
  };

  const handleSubmit = (values: IBirthDateValues) => {
    submitBirthDate(formatDate(values));
    navigate(POKEMONS_PATH);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={birthDateValidationSchema}
      onSubmit={handleSubmit}
      component={() => <BirthDateForm />}
    />
  );
};
