import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Flex
      as="header"
      h="70px"
      alignItems="center"
      justifyContent="space-between"
      px={6}
    >
      <NextLink href="/">CV Generator</NextLink>
      <NextLink href="/app" passHref>
        <Link
          px={4}
          h={10}
          fontWeight={600}
          borderRadius={6}
          bgColor="purple.400"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{ bgColor: "purple.500" }}
          _focus={{ boxShadow: "0 0 0 3px var(--chakra-colors-purple-500)" }}
          colorScheme="purple"
        >
          Create your CV
        </Link>
      </NextLink>
    </Flex>
  );
}
