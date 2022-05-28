import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type DescriptionFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function DescriptionField({
  errors,
  touched,
}: DescriptionFieldProps) {
  return (
    <FastField name="personalDescription" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl
          isInvalid={
            !!errors.personalDescription && touched.personalDescription
          }
        >
          <FormLabel htmlFor="personalDescription">
            Personal description
          </FormLabel>
          <Textarea
            {...field}
            maxH="128px"
            id="personalDescription"
            placeholder="Personal description"
            focusBorderColor="purple.500"
          />
          <FormErrorMessage>{errors.personalDescription}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
