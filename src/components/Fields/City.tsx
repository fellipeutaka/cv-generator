import { Field, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type CityFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function CityField({ errors, touched }: CityFieldProps) {
  return (
    <>
      <label htmlFor="city">City</label>
      <Field name="city" id="city" type="text" />
      {errors.city && touched.city ? <span>{errors.city}</span> : null}
    </>
  );
}
