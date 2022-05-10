import { Field, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type PhoneFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function PhoneField({ errors, touched }: PhoneFieldProps) {
  return (
    <>
      <label htmlFor="phone">Phone</label>
      <Field name="phone" id="phone" type="text" />
      {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
    </>
  );
}
