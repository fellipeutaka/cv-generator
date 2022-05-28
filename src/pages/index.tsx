import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import CVIlustration from "../components/CVIlustration";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout
      title="Home | CV Generator"
      description="The best and easiest way to generate your CV"
    >
      <Navbar />
      <Flex
        as="main"
        minH="calc(100vh - 70px)"
        justifyContent="center"
        alignItems="center"
      >
        <Flex as="section" flexDir="column" gap={8}>
          <Heading as="h1" size="2xl" maxW="40vw">
            CV Generator helps you to generate your CV
          </Heading>
          <Text maxW="25vw" fontSize="20px">
            Build your resume fast and easy. It&apos;s free!
          </Text>
          <NextLink href="/app" passHref>
            <Link
              px={4}
              h={10}
              fontWeight={600}
              borderRadius={6}
              bgColor="purple.400"
              display="flex"
              w="max-content"
              justifyContent="center"
              alignItems="center"
              _hover={{ bgColor: "purple.500" }}
              _focus={{
                boxShadow: "0 0 0 3px var(--chakra-colors-purple-500)",
              }}
              colorScheme="purple"
            >
              Create your CV
            </Link>
          </NextLink>
        </Flex>
        <section>
          <CVIlustration />
        </section>
      </Flex>
    </Layout>
  );
}
