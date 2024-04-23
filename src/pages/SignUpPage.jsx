import { Box, FormControl, FormLabel, Input, Button, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" w="full" mt={4}>
          Sign Up
        </Button>
        <Button colorScheme="teal" w="full" mt={4}>
          Sign Up with SSO
        </Button>
        <Link as={RouterLink} to="/login" color="teal.500" mt={2}>
          Already have an account? Log in
        </Link>
      </VStack>
    </Box>
  );
};

export default SignUpPage;
