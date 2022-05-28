import { FormControl, FormLabel } from "@chakra-ui/react";
import { FastField, FastFieldProps } from "formik";
import Checkbox from "../Checkbox";
import { InitialValues } from "../Form";

type EducationFieldProps = {
  values: InitialValues;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
};

export default function HasEducation({
  values,
  setFieldValue,
}: EducationFieldProps) {
  return (
    <FastField name="hasEducation">
      {({ field }: FastFieldProps) => (
        <FormControl>
          <FormLabel htmlFor="hasEducation">Has education?</FormLabel>
          <Checkbox
            {...field}
            id="hasEducation"
            isChecked={values.hasEducation}
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
        </FormControl>
      )}
    </FastField>
  );
}
