import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { FastField, FastFieldProps } from "formik";
import { InitialValues } from "../Form";

type HasCertificationsProps = {
  values: InitialValues;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
};

export default function HasCertifications({
  values,
  setFieldValue,
}: HasCertificationsProps) {
  return (
    <FastField name="hasCertifications">
      {({ field }: FastFieldProps) => (
        <FormControl>
          <FormLabel htmlFor="hasCertifications">Has certifications?</FormLabel>
          <Checkbox
            {...field}
            id="hasCertifications"
            isChecked={values.hasCertifications}
            onChange={() => {
              setFieldValue("hasCertifications", !values.hasCertifications);
              setFieldValue(
                "certifications",
                !values.hasCertifications
                  ? [
                      {
                        name: "",
                        organization: "",
                        yearEarned: "",
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
