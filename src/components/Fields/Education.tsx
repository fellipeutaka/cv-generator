import { FastField, FieldArray, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type EducationFieldProps = {
  values: InitialValues;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

type Errors = {
  education?: [
    {
      degree: string;
      subjectArea: string;
      collegeName: string;
      city: string;
      state: string;
      graduationYear: string;
    }
  ];
};

export default function EducationField({
  values,
  errors,
  touched,
}: EducationFieldProps) {
  const Errors = errors as Errors;

  return (
    <FieldArray name="education">
      {({ remove, push }) => (
        <>
          {values.education!.map((_, index) => (
            <div key={index}>
              <label htmlFor={`education[${index}].degree`}>Degree</label>
              <FastField
                name={`education[${index}].degree`}
                id={`education[${index}].degree`}
                type="text"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.degree}</span>
              ) : null}
              <label htmlFor={`education[${index}].subjectArea`}>
                Subject area
              </label>
              <FastField
                name={`education[${index}].subjectArea`}
                id={`education[${index}].subjectArea`}
                type="text"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.subjectArea}</span>
              ) : null}
              <label htmlFor={`education[${index}].collegeName`}>
                College name
              </label>
              <FastField
                name={`education[${index}].collegeName`}
                id={`education[${index}].collegeName`}
                type="text"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.collegeName}</span>
              ) : null}
              <label htmlFor={`education[${index}].city`}>City</label>
              <FastField
                name={`education[${index}].city`}
                id={`education[${index}].city`}
                type="text"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.city}</span>
              ) : null}
              <label htmlFor={`education[${index}].state`}>State</label>
              <FastField
                name={`education[${index}].state`}
                id={`education[${index}].state`}
                type="text"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.state}</span>
              ) : null}
              <label htmlFor={`education[${index}].graduationYear`}>
                Graduation year
              </label>
              <FastField
                name={`education[${index}].graduationYear`}
                id={`education[${index}].graduationYear`}
                type="number"
              />
              {Errors.education && touched.experience ? (
                <span>{Errors.education[index]?.graduationYear}</span>
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
                degree: "",
                subjectArea: "",
                collegeName: "",
                city: "",
                state: "",
                graduationYear: "",
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
