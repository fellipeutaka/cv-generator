import { FastField } from "formik";
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
    <>
      <label htmlFor="hasCertifications">Has certifications?</label>
      <FastField
        type="checkbox"
        name="hasCertifications"
        id="hasCertifications"
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
    </>
  );
}
