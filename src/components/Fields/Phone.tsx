import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import InputMask from "react-input-mask";
import { InitialValues } from "../Form";

type PhoneFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function PhoneField({ errors, touched }: PhoneFieldProps) {
  return (
    <FastField name="phone" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl isInvalid={!!errors.phone && touched.phone}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            {...field}
            id="phone"
            as={InputMask}
            mask="(99) 99999-9999"
            placeholder="(__) _____-____"
            maskChar={null}
          />
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
