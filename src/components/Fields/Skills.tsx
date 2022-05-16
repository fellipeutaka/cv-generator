import { FastField, FieldArray, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type SkillsFieldsProps = {
  values: InitialValues;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function SkillsFields({
  values,
  errors,
  touched,
}: SkillsFieldsProps) {
  return (
    <>
      <span>Skills</span>
      <FieldArray name="skills">
        {({ remove, push }) => (
          <>
            {values.skills.map((_, index) => (
              <div key={index}>
                <FastField
                  name={`skills[${index}]`}
                  id={`skills[${index}]`}
                  type="text"
                />
                {errors.skills && touched.skills ? (
                  <span>{errors.skills[index]}</span>
                ) : null}
                {index !== 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    X
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => push("")}>
              Add
            </button>
          </>
        )}
      </FieldArray>
    </>
  );
}
