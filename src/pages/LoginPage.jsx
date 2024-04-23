import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useColorModeValue, VStack, HStack } from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Box minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
      <Box maxW="md" mx="auto">
        <Stack spacing="8">
          <Stack spacing="6">
            <Text fontSize="lg" fontWeight="bold">
              Log in to your account
            </Text>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" autoComplete="email" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" required />
            </FormControl>
            <Button mt="4" colorScheme="blue" type="submit">
              Log In
            </Button>
            <HStack spacing="1" justify="center">
              <Text fontSize="sm">Or continue with</Text>
              <Button variant="outline" leftIcon={<FaGoogle />} />
              <Button variant="outline" leftIcon={<FaFacebook />} />
            </HStack>
            <Stack pt="6">
              <Text align="center">
                Don't have an account?{" "}
                <Link to="/signup" color={useColorModeValue("blue.500", "blue.200")}>
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default LoginPage;
