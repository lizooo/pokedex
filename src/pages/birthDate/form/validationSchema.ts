import { number, object, string } from 'yup';

import { getMaxDaysByMonthAndYear } from '../utils';

export const birthDateValidationSchema = () =>
  object().shape({
    year: number()
      .required('Year is required')
      .min(1900, 'Please enter a valid year')
      .max(2022, 'Please enter a valid year'),
    month: string().required('Month is required'),
    day: number()
      .required('Day is required')
      .when(['month', 'year'], (month, year) => {
        return number().max(
          getMaxDaysByMonthAndYear(month, year),
          `Selected month has ${getMaxDaysByMonthAndYear(month, year)} day(s)`
        )
      })
      .min(1, 'Please enter a valid day'),
  })
