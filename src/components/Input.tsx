import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export default function Input({ id, placeholder, ...rest }: InputProps) {
  return (
    <ChakraInput
      {...rest}
      id={id}
      placeholder={placeholder}
      focusBorderColor="purple.500"
    />
  );
}
