import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
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
          <Input
            {...field}
            id="personalDescription"
            placeholder="Personal description"
          />
          <FormErrorMessage>{errors.personalDescription}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
