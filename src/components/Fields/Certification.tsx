import {
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import {
  FastField,
  FastFieldProps,
  FieldArray,
  FormikErrors,
  FormikTouched,
} from "formik";
import Button from "../Button";
import { InitialValues } from "../Form";
import Input from "../Input";

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
            <Flex flexDir="column" gap={4} key={index}>
              {index > 0 && <Divider mt={4} mb={-2} />}
              <FastField name={`certifications[${index}].name`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.certifications &&
                      !!Errors.certifications[index] &&
                      touched.certifications
                    }
                  >
                    <FormLabel htmlFor={`certifications[${index}].name`}>
                      Name
                    </FormLabel>
                    <Input
                      {...field}
                      id={`certifications[${index}].name`}
                      placeholder="Name"
                    />
                    <FormErrorMessage>
                      {Errors.certifications &&
                        Errors.certifications[index]?.name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`certifications[${index}].organization`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.certifications &&
                      !!Errors.certifications[index] &&
                      touched.certifications
                    }
                  >
                    <FormLabel
                      htmlFor={`certifications[${index}].organization`}
                    >
                      Organization
                    </FormLabel>
                    <Input
                      {...field}
                      id={`certifications[${index}].organization`}
                      placeholder="Organization"
                    />
                    <FormErrorMessage>
                      {Errors.certifications &&
                        Errors.certifications[index]?.organization}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              <FastField
                name={`certifications[${index}].yearEarned`}
                type="text"
              >
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!Errors.certifications &&
                      !!Errors.certifications[index] &&
                      touched.certifications
                    }
                  >
                    <FormLabel htmlFor={`certifications[${index}].yearEarned`}>
                      Year earned
                    </FormLabel>
                    <Input
                      {...field}
                      type="number"
                      id={`certifications[${index}].yearEarned`}
                      placeholder="Year earned"
                    />
                    <FormErrorMessage>
                      {Errors.certifications &&
                        Errors.certifications[index]?.yearEarned}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
              {index !== 0 && (
                <Button type="button" onClick={() => remove(index)}>
                  Remove certification
                </Button>
              )}
            </Flex>
          ))}
          <Button
            type="button"
            sizeWidth="full"
            onClick={() =>
              push({
                name: "",
                organization: "",
                yearEarned: "",
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
