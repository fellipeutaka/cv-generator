import { Field, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type StateFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function StateField({ errors, touched }: StateFieldProps) {
  return (
    <>
      <label htmlFor="state">State</label>
      <Field name="state" id="state" type="text" />
      {errors.state && touched.state ? <span>{errors.state}</span> : null}
    </>
  );
}
