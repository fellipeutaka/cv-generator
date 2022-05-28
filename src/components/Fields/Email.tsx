import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";
import Input from "../Input";

type EmailFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function EmailField({ errors, touched }: EmailFieldProps) {
  return (
    <FastField name="email" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl isInvalid={!!errors.email && touched.email}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input {...field} id="email" placeholder="E-mail" />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
