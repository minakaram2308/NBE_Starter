import * as yup from 'yup';

const LoginSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .test({
      test: value => RegExp('^[a-zA-Z][a-zA-Z0-9]*$').test(value),
      message: 'Invalid Username',
    }),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export default LoginSchema;
