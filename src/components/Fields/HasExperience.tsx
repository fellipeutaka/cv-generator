import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { FastField, FastFieldProps } from "formik";
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
    <FastField name="hasExperience">
      {({ field }: FastFieldProps) => (
        <FormControl>
          <FormLabel htmlFor="hasExperience">Has experience?</FormLabel>
          <Checkbox
            {...field}
            id="hasExperience"
            isChecked={values.hasExperience}
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
        </FormControl>
      )}
    </FastField>
  );
}
