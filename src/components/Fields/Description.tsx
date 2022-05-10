import { Field, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type DescriptionFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function DescriptionField({
  errors,
  touched,
}: DescriptionFieldProps) {
  return (
    <>
      <label htmlFor="personalDescription">Personal description</label>
      <Field name="personalDescription" id="personalDescription" type="text" />
      {errors.personalDescription && touched.personalDescription ? (
        <span>{errors.personalDescription}</span>
      ) : null}
    </>
  );
}
