import {
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
          <Flex flexDir="column" gap={4}>
            {values.skills.map((_, index) => (
              <FastField name={`skills[${index}]`} type="text" key={index}>
                {({ field }: FastFieldProps) => (
                  <FormControl
                    isInvalid={
                      !!errors.skills &&
                      !!errors.skills[index] &&
                      touched.skills
                    }
                  >
                    <Flex gap={1}>
                      <Input
                        {...field}
                        id={`skills[${index}]`}
                        placeholder="Skill"
                      />
                      {index !== 0 && (
                        <Button type="button" onClick={() => remove(index)}>
                          X
                        </Button>
                      )}
                    </Flex>
                    <FormErrorMessage>
                      {errors.skills && errors.skills[index]}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </FastField>
            ))}
          </Flex>
          <Button type="button" onClick={() => push("")}>
            Add new skill
          </Button>
        </>
      )}
    </FieldArray>
  );
}
