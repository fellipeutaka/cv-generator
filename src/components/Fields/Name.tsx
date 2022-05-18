import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type FullNameFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function FullNameField({ errors, touched }: FullNameFieldProps) {
  return (
    <FastField name="fullName" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl isInvalid={!!errors.fullName && touched.fullName}>
          <FormLabel htmlFor="fullName">Full name</FormLabel>
          <Input {...field} id="fullName" placeholder="Full name" />
          <FormErrorMessage>{errors.fullName}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
