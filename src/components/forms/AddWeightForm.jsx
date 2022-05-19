import Input from 'components/Input';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
export default function AddWeightForm({ handleSubmit }) {
  const digitsOnly = (value) => /^\d+$/.test(value);
  const initialValues = { weight: '' };
  const validationSchema = Yup.object({
    weight: Yup.string()
      .required('El peso es requerido')
      .test('Digits only', 'Ingrese solo', digitsOnly),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        handleSubmit(data);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Input
            type="weight"
            name="weight"
            label="Peso"
            errors={errors.weight}
            touched={touched.weight}
          />
          <button type="submit">Agregar peso</button>
        </Form>
      )}
    </Formik>
  );
}
