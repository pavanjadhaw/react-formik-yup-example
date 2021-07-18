import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  Switch,
  Textarea,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, getIn } from 'formik';
import React from 'react';
import * as yup from 'yup';

export const LoginForm = (props: HTMLChakraProps<'form'>) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email('Email address must be in valid format.')
          .required('Email is required.'),
        password: yup
          .string()
          .min(6, 'Password must at least be 6 characters.')
          .required('Password is required.'),
      })}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Stack spacing="6">
          <Field name="email" label="Email" component={TextFormField} />

          <Field
            type="password"
            name="password"
            label="Password"
            component={TextFormField}
          />

          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign in
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

function TextFormField({
  field,
  form,
  label,
  ...props
}: FieldProps & {
  label?: string;
}) {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl isInvalid={!!errorText}>
      {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      <Input {...field} {...props} />
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}

function SwitchFormField({
  field,
  form,
  label,
  ...props
}: FieldProps & {
  label?: string;
}) {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl isInvalid={!!errorText} mb="20px">
      <Flex>
        {label && (
          <FormLabel htmlFor={field.name} w="200px">
            {label}
          </FormLabel>
        )}
        <Switch {...field} {...props} />
      </Flex>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}

function TextAreaFormField({
  field,
  form,
  label,
  ...props
}: FieldProps & {
  label?: string;
}) {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl isInvalid={!!errorText} mb="20px">
      {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      <Textarea {...field} {...props} />
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}
