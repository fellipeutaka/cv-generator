import { FastField, FieldArray, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type CertificationFieldProps = {
  values: InitialValues;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

type Errors = {
  certifications?: [
    {
      name: string;
      organization: string;
      yearEarned: string;
    }
  ];
};

export default function CertificationField({
  values,
  errors,
  touched,
}: CertificationFieldProps) {
  const Errors = errors as Errors;

  return (
    <FieldArray name="certifications">
      {({ remove, push }) => (
        <>
          {values.certifications!.map((_, index) => (
            <div key={index}>
              <label htmlFor={`certifications[${index}].name`}>Name</label>
              <FastField
                name={`certifications[${index}].name`}
                id={`certifications[${index}].name`}
                type="text"
              />
              {Errors.certifications && touched.certifications ? (
                <span>{Errors.certifications[index]?.name}</span>
              ) : null}
              <label htmlFor={`certifications[${index}].organization`}>
                Organization
              </label>
              <FastField
                name={`certifications[${index}].organization`}
                id={`certifications[${index}].organization`}
                type="text"
              />
              {Errors.certifications && touched.certifications ? (
                <span>{Errors.certifications[index]?.organization}</span>
              ) : null}
              <label htmlFor={`certifications[${index}].yearEarned`}>
                Year earned
              </label>
              <FastField
                name={`certifications[${index}].yearEarned`}
                id={`certifications[${index}].yearEarned`}
                type="number"
              />
              {Errors.certifications && touched.certifications ? (
                <span>{Errors.certifications[index]?.yearEarned}</span>
              ) : null}
              {index !== 0 && (
                <button type="button" onClick={() => remove(index)}>
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              push({
                name: "",
                organization: "",
                yearEarned: "",
              })
            }
          >
            Add
          </button>
        </>
      )}
    </FieldArray>
  );
}
