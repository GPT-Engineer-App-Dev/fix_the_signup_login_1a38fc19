import { Box, Heading, Text, Button, Image, VStack, Flex, useColorModeValue } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box w="full" h="xl" bgImage="url('https://via.placeholder.com/1200x600')" bgPos="center" bgSize="cover">
      <VStack w="full" justify="center" px={useColorModeValue("4", "8")} bgGradient={useColorModeValue("linear(to-r, blackAlpha.600, transparent)", "linear(to-r, whiteAlpha.600, transparent)")} h="full">
        <Flex w="full" maxW="md" mx="auto" align="center" direction="column">
          <VStack spacing={4} maxW="lg" align="left">
            <Heading as="h1" size="3xl" fontWeight="bold" color="white">
              Welcome to Appointment Scheduler SaaS
            </Heading>
            <Text fontSize="2xl" color="white">
              Key features highlighted here.
            </Text>
            <Button size="lg" colorScheme="blue" px={8} py={6} fontSize="xl" boxShadow="lg">
              Sign Up Now
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LandingPage;
