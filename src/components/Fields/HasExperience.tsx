import { FastField } from "formik";
import { InitialValues } from "../Form";

type ExperienceFieldProps = {
  values: InitialValues;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
};

export default function HasExperience({
  values,
  setFieldValue,
}: ExperienceFieldProps) {
  return (
    <>
      <label htmlFor="hasExperience">Has experience?</label>
      <FastField
        type="checkbox"
        name="hasExperience"
        id="hasExperience"
        onChange={() => {
          setFieldValue("hasExperience", !values.hasExperience);
          setFieldValue(
            "experience",
            !values.hasExperience
              ? [
                  {
                    jobTitle: "",
                    companyName: "",
                    city: "",
                    state: "",
                    startYear: "",
                    endYear: "",
                    jobDuty: [""],
                  },
                ]
              : null
          );
        }}
      />
    </>
  );
}
