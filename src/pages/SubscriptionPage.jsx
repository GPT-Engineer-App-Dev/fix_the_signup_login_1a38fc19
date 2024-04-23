import { Box, Heading, Button, VStack, Badge, Stack, Text } from "@chakra-ui/react";

const SubscriptionPage = () => {
  return (
    <Box p={4}>
      <VStack align="stretch" spacing={4}>
        <Heading as="h2">Subscription Management</Heading>
        <Stack direction={["column", "row"]} spacing={4} align="center">
          {/* Basic Plan */}
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h3" size="lg">
              Basic Plan
            </Heading>
            <Text mt={4}>Access to basic features.</Text>
            <Button mt={10} colorScheme="blue" w="full">
              Choose Plan
            </Button>
          </Box>
          {/* Popular Plan */}
          <Box p={5} shadow="md" borderWidth="1px" borderColor="blue.500" flex="1" borderRadius="md" position="relative">
            <Badge position="absolute" top="-1em" right="-1em" colorScheme="red" variant="solid" borderRadius="full" px={2}>
              Most Popular
            </Badge>
            <Heading as="h3" size="lg" color="blue.500">
              Pro Plan
            </Heading>
            <Text mt={4}>Everything in Basic, plus advanced features.</Text>
            <Button mt={10} colorScheme="blue" w="full">
              Choose Plan
            </Button>
          </Box>
          {/* Premium Plan */}
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading as="h3" size="lg">
              Premium Plan
            </Heading>
            <Text mt={4}>All features, including premium support.</Text>
            <Button mt={10} colorScheme="blue" w="full">
              Choose Plan
            </Button>
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
};

export default SubscriptionPage;
