import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";
import Input from "../Input";

type StateFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function StateField({ errors, touched }: StateFieldProps) {
  return (
    <FastField name="state" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl isInvalid={!!errors.state && touched.state}>
          <FormLabel htmlFor="state">State</FormLabel>
          <Input {...field} id="state" placeholder="State" />
          <FormErrorMessage>{errors.state}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
