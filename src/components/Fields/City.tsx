import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FastField, FastFieldProps, FormikErrors, FormikTouched } from "formik";
import { InitialValues } from "../Form";

type CityFieldProps = {
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
};

export default function CityField({ errors, touched }: CityFieldProps) {
  return (
    <FastField name="city" type="text">
      {({ field }: FastFieldProps) => (
        <FormControl isInvalid={!!errors.city && touched.city}>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input {...field} id="city" placeholder="City" />
          <FormErrorMessage>{errors.city}</FormErrorMessage>
        </FormControl>
      )}
    </FastField>
  );
}
