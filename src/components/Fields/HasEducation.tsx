import { FastField } from "formik";
import { InitialValues } from "../Form";

type EducationField = {
  values: InitialValues;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
};

export default function HasEducation({
  values,
  setFieldValue,
}: EducationField) {
  return (
    <>
      <label htmlFor="hasEducation">Has education?</label>
      <FastField
        type="checkbox"
        name="hasEducation"
        id="hasEducation"
        onChange={() => {
          setFieldValue("hasEducation", !values.hasEducation);
          setFieldValue(
            "education",
            !values.hasEducation
              ? [
                  {
                    degree: "",
                    subjectArea: "",
                    collegeName: "",
                    city: "",
                    state: "",
                    graduationYear: "",
                  },
                ]
              : null
          );
        }}
      />
    </>
  );
}
