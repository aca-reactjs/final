import { useEffect, useState } from 'react';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useAuth } from '../../hooks/useAuth';
import RegisterForm from '../../components/Form/RegisterForm';
import { getErrorMessage } from '../../utils';
import { paths } from '../../constants/paths';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SignIn() {
  const [response, setResponse] = useState(null);

  const navigate = useNavigate();

  const { signin, user } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await signin(values.email, values.password);

        setResponse({ type: 'success', message: 'registration is done' });

        navigate(`/${paths.projects}`);
      } catch (error) {
        const message = getErrorMessage(error);

        setResponse({ type: 'error', message });
      }
    },
  });

  useEffect(() => {
    if (user) {
      navigate(`${paths.home}`);
    }
  }, [user]);

  return <RegisterForm title="Sign In" response={response} formik={formik} />;
}
