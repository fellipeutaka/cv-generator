import { Checkbox as ChakraCheckbox, CheckboxProps } from "@chakra-ui/react";

export default function Checkbox({
  id,
  isChecked,
  onChange,
  ...rest
}: CheckboxProps) {
  return (
    <ChakraCheckbox
      id={id}
      isChecked={isChecked}
      onChange={onChange}
      colorScheme="purple"
      {...rest}
    />
  );
}
