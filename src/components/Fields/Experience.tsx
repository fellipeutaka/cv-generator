import { FastField, FieldArray, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type ExperienceFieldProps = {
  values: InitialValues;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

type Errors = {
  experience?: [
    {
      jobTitle: string;
      companyName: string;
      city: string;
      state: string;
      startYear: string;
      endYear: string;
      jobDuty: string[];
    }
  ];
};

export default function ExperienceField({
  values,
  errors,
  touched,
}: ExperienceFieldProps) {
  const Errors = errors as Errors;

  return (
    <FieldArray name="experience">
      {({ remove, push }) => (
        <>
          {values.experience!.map((experience, experienceIndex) => (
            <div key={experienceIndex}>
              <label htmlFor={`experience[${experienceIndex}].jobTitle`}>
                Job title
              </label>
              <FastField
                name={`experience[${experienceIndex}].jobTitle`}
                id={`experience[${experienceIndex}].jobTitle`}
                type="text"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.jobTitle}</span>
              ) : null}
              <label htmlFor={`experience[${experienceIndex}].companyName`}>
                Company name
              </label>
              <FastField
                name={`experience[${experienceIndex}].companyName`}
                id={`experience[${experienceIndex}].companyName`}
                type="text"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.companyName}</span>
              ) : null}
              <label htmlFor={`experience[${experienceIndex}].city`}>
                City
              </label>
              <FastField
                name={`experience[${experienceIndex}].city`}
                id={`experience[${experienceIndex}].city`}
                type="text"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.city}</span>
              ) : null}
              <label htmlFor={`experience[${experienceIndex}].state`}>
                State
              </label>
              <FastField
                name={`experience[${experienceIndex}].state`}
                id={`experience[${experienceIndex}].state`}
                type="text"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.state}</span>
              ) : null}
              <label htmlFor={`experience[${experienceIndex}].startYear`}>
                Start year
              </label>
              <FastField
                name={`experience[${experienceIndex}].startYear`}
                id={`experience[${experienceIndex}].startYear`}
                type="number"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.startYear}</span>
              ) : null}
              <label htmlFor={`experience[${experienceIndex}].endYear`}>
                End year
              </label>
              <FastField
                name={`experience[${experienceIndex}].endYear`}
                id={`experience[${experienceIndex}].endYear`}
                type="number"
              />
              {Errors.experience && touched.experience ? (
                <span>{Errors.experience[experienceIndex]?.endYear}</span>
              ) : null}
              <FieldArray name={`experience[${experienceIndex}].jobDuty`}>
                {({ remove, push }) => (
                  <>
                    {experience.jobDuty.map((_, jobDutyIndex) => (
                      <div key={jobDutyIndex}>
                        <FastField
                          name={`experience[${experienceIndex}].jobDuty[${jobDutyIndex}]`}
                          id={`experience[${experienceIndex}].jobDuty[${jobDutyIndex}]`}
                          type="text"
                        />
                        {Errors.experience && touched.experience ? (
                          <span>
                            {
                              Errors.experience[experienceIndex]?.jobDuty[
                                jobDutyIndex
                              ]
                            }
                          </span>
                        ) : null}
                        {jobDutyIndex !== 0 && (
                          <button
                            type="button"
                            onClick={() => remove(jobDutyIndex)}
                          >
                            X
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => push("")}>
                      Add duty
                    </button>
                  </>
                )}
              </FieldArray>
              {experienceIndex !== 0 && (
                <button type="button" onClick={() => remove(experienceIndex)}>
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              push({
                jobTitle: "",
                companyName: "",
                city: "",
                state: "",
                startYear: "",
                endYear: "",
                jobDuty: [""],
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
