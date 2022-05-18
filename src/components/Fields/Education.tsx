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
            <Flex flexDir="column" gap={4} key={index}>
              <FastField name={`education[${index}].degree`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].degree`}>
                      Degree
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].degree`}
                      placeholder="Degree"
                    />
                    <FormErrorMessage>
                      {Errors.education && Errors.education[index]?.degree}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField name={`education[${index}].subjectArea`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].subjectArea`}>
                      Subject area
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].subjectArea`}
                      placeholder="Subject area"
                    />
                    <FormErrorMessage>
                      {Errors.education && Errors.education[index]?.subjectArea}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField name={`education[${index}].collegeName`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].collegeName`}>
                      College name
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].collegeName`}
                      placeholder="College name"
                    />
                    <FormErrorMessage>
                      {Errors.education && Errors.education[index]?.collegeName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField name={`education[${index}].city`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].city`}>
                      City
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].city`}
                      placeholder="City"
                    />
                    <FormErrorMessage>
                      {Errors.education && Errors.education[index]?.city}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField name={`education[${index}].state`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].state`}>
                      State
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].state`}
                      placeholder="State"
                    />
                    <FormErrorMessage>
                      {Errors.education && Errors.education[index]?.state}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`education[${index}].graduationYear`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.education &&
                      !!Errors.education[index] &&
                      touched.education
                    }
                  >
                    <FormLabel htmlFor={`education[${index}].graduationYear`}>
                      Graduation year
                    </FormLabel>
                    <Input
                      {...field}
                      id={`education[${index}].graduationYear`}
                      placeholder="Graduation year"
                    />
                    <FormErrorMessage>
                      {Errors.education &&
                        Errors.education[index]?.graduationYear}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              {index !== 0 && (
                <Button type="button" onClick={() => remove(index)}>
                  X
                </Button>
              )}
            </Flex>
          ))}
          <Button
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
          </Button>
        </>
      )}
    </FieldArray>
  );
}
