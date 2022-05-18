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
    <FieldArray name="skills">
      {({ remove, push }) => (
        <>
          <FormLabel htmlFor="skills[0]">Skills</FormLabel>
          {values.skills.map((_, index) => (
            <Flex key={index}>
              <FastField name={`skills[${index}]`} type="text">
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!errors.skills &&
                      !!errors.skills[index] &&
                      touched.skills
                    }
                  >
                    <Input
                      {...field}
                      id={`skills[${index}]`}
                      placeholder="Skill"
                    />
                    <FormErrorMessage>
                      {errors.skills && errors.skills[index]}
                    </FormErrorMessage>
                    {index !== 0 && (
                      <Button type="button" onClick={() => remove(index)}>
                        X
                      </Button>
                    )}
                  </FormControl>
                )}
              </FastField>
            </Flex>
          ))}
          <Button type="button" onClick={() => push("")}>
            Add
          </Button>
        </>
      )}
    </FieldArray>
  );
}
