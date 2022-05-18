import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  FastField,
  FastFieldProps,
  FieldArray,
  FormikErrors,
  FormikTouched,
} from "formik";
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
            <Flex flexDir="column" gap={4} key={experienceIndex}>
              <FastField
                name={`experience[${experienceIndex}].jobTitle`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel
                      htmlFor={`experience[${experienceIndex}].jobTitle`}
                    >
                      Job title
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].jobTitle`}
                      placeholder="Job title"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.jobTitle}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`experience[${experienceIndex}].companyName`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel
                      htmlFor={`experience[${experienceIndex}].companyName`}
                    >
                      Company name
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].companyName`}
                      placeholder="Company name"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.companyName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`experience[${experienceIndex}].city`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel htmlFor={`experience[${experienceIndex}].city`}>
                      City
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].city`}
                      placeholder="City"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.city}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`experience[${experienceIndex}].state`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel htmlFor={`experience[${experienceIndex}].state`}>
                      State
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].state`}
                      placeholder="State"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.state}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`experience[${experienceIndex}].startYear`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel
                      htmlFor={`experience[${experienceIndex}].startYear`}
                    >
                      Start year
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].startYear`}
                      placeholder="Start year"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.startYear}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`experience[${experienceIndex}].endYear`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.experience &&
                      !!Errors.experience[experienceIndex] &&
                      touched.experience
                    }
                  >
                    <FormLabel
                      htmlFor={`experience[${experienceIndex}].endYear`}
                    >
                      End year
                    </FormLabel>
                    <Input
                      {...field}
                      id={`experience[${experienceIndex}].endYear`}
                      placeholder="End year"
                    />
                    <FormErrorMessage>
                      {Errors.experience &&
                        Errors.experience[experienceIndex]?.endYear}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FieldArray name={`experience[${experienceIndex}].jobDuty`}>
                {({ remove, push }) => (
                  <>
                    {experience.jobDuty.map((_, jobDutyIndex) => (
                      <div key={jobDutyIndex}>
                        <FastField
                          name={`experience[${experienceIndex}].jobDuty[${jobDutyIndex}]`}
                          type="text"
                        >
                          {({ field }: FastFieldProps) => (
                            <FormControl
                              isInvalid={
                                !!Errors.experience &&
                                !!Errors.experience[experienceIndex]?.jobDuty &&
                                !!Errors.experience[experienceIndex]?.jobDuty[
                                  jobDutyIndex
                                ] &&
                                touched.experience
                              }
                            >
                              <FormLabel
                                htmlFor={`experience[${experienceIndex}].jobDuty[${jobDutyIndex}]`}
                              >
                                Job duty
                              </FormLabel>
                              <Flex gap={1}>
                                <Input
                                  {...field}
                                  id={`experience[${experienceIndex}].jobDuty[${jobDutyIndex}]`}
                                  placeholder="Job duty"
                                />
                                {jobDutyIndex !== 0 && (
                                  <Button
                                    type="button"
                                    onClick={() => remove(jobDutyIndex)}
                                  >
                                    X
                                  </Button>
                                )}
                              </Flex>

                              <FormErrorMessage>
                                {Errors.experience &&
                                  Errors.experience[experienceIndex]?.jobDuty[
                                    jobDutyIndex
                                  ]}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </FastField>
                      </div>
                    ))}
                    <Button type="button" onClick={() => push("")}>
                      Add duty
                    </Button>
                  </>
                )}
              </FieldArray>
              {experienceIndex !== 0 && (
                <Button type="button" onClick={() => remove(experienceIndex)}>
                  Remove experience
                </Button>
              )}
            </Flex>
          ))}
          <Button
            type="button"
            w="100%"
            mt={4}
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
            Add new experience
          </Button>
        </>
      )}
    </FieldArray>
  );
}
