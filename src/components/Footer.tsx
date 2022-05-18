import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap={4}
    >
      <Text>
        Developed with
        <span role="img">❤️</span>
        by{" "}
        <Link href="https://github.com/fellipeutaka" isExternal>
          Fellipe Utaka
        </Link>
      </Text>
    </Flex>
  );
}
