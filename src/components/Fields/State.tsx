import { FastField, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type StateFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function StateField({ errors, touched }: StateFieldProps) {
  return (
    <>
      <label htmlFor="state">State</label>
      <FastField name="state" id="state" type="text" />
      {errors.state && touched.state ? <span>{errors.state}</span> : null}
    </>
  );
}
