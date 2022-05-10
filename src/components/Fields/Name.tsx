import { FastField, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type FullNameFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function FullNameField({ errors, touched }: FullNameFieldProps) {
  return (
    <>
      <label htmlFor="fullName">Full name</label>
      <FastField name="fullName" id="fullName" type="text" />
      {errors.fullName && touched.fullName ? (
        <span>{errors.fullName}</span>
      ) : null}
    </>
  );
}
