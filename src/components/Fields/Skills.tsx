import { Field, FieldArray } from "formik";
import { InitialValues } from "../Form";

type SkillsFieldsProps = {
  values: InitialValues;
};

export default function SkillsFields({ values }: SkillsFieldsProps) {
  return (
    <>
      <span>Skills</span>
      <FieldArray name="skills">
        {({ remove, push }) => (
          <>
            {values.skills.map((_, index) => (
              <div key={index}>
                <Field
                  name={`skills[${index}]`}
                  id={`skills[${index}]`}
                  type="text"
                />
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
