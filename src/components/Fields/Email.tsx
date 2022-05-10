import { Field, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type EmailFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function EmailField({ errors, touched }: EmailFieldProps) {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <Field name="email" id="email" type="text" />
      {errors.email && touched.email ? <span>{errors.email}</span> : null}
    </>
  );
}
