import { FastField, FieldArray } from "formik";
import { InitialValues } from "../Form";

type EducationFieldProps = {
  values: InitialValues;
};

export default function EducationField({ values }: EducationFieldProps) {
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
              <label htmlFor={`education[${index}].subjectArea`}>
                Subject area
              </label>
              <FastField
                name={`education[${index}].subjectArea`}
                id={`education[${index}].subjectArea`}
                type="text"
              />
              <label htmlFor={`education[${index}].collegeName`}>
                College name
              </label>
              <FastField
                name={`education[${index}].collegeName`}
                id={`education[${index}].collegeName`}
                type="text"
              />
              <label htmlFor={`education[${index}].city`}>City</label>
              <FastField
                name={`education[${index}].city`}
                id={`education[${index}].city`}
                type="text"
              />
              <label htmlFor={`education[${index}].state`}>State</label>
              <FastField
                name={`education[${index}].state`}
                id={`education[${index}].state`}
                type="text"
              />
              <label htmlFor={`education[${index}].graduationYear`}>
                Graduation year
              </label>
              <FastField
                name={`education[${index}].graduationYear`}
                id={`education[${index}].graduationYear`}
                type="number"
              />
              <button type="button" onClick={() => remove(index)}>
                X
              </button>
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
