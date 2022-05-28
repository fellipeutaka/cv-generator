import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChakraButtonProps & {
  sizeWidth?: "full";
};

export default function Button({ sizeWidth, children, ...rest }: ButtonProps) {
  const props = {
    ...rest,
  };
  if (sizeWidth === "full") {
    props.w = "100%";
    props.mt = 4;
  }
  return (
    <ChakraButton
      colorScheme="purple"
      color="white"
      bgColor="purple.400"
      _hover={{ bgColor: "purple.500" }}
      _focus={{
        boxShadow: "0 0 0 3px var(--chakra-colors-purple-500)",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
