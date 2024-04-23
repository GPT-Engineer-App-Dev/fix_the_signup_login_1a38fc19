import { Box, Button, Container, Heading, VStack, HStack, Text, Select, Input, useToast } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSchedule = () => {
    // Here you would typically handle the form submission, e.g., save the appointment
    toast({
      title: "Appointment Scheduled",
      description: "Your appointment has been successfully scheduled.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1">Schedule Your Appointment</Heading>
        <Box boxShadow="md" p={5} rounded="md" w="100%" bg="white">
          <VStack spacing={4}>
            <HStack w="100%" justifyContent="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                Choose a Date
              </Text>
              <FaCalendarAlt />
            </HStack>
            <Select placeholder="Select date">
              {/* Here you would generate date options */}
              <option value="2023-04-01">April 1, 2023</option>
              <option value="2023-04-02">April 2, 2023</option>
              {/* ... more dates */}
            </Select>
            <Select placeholder="Select time slot">
              {/* Here you would generate time slot options */}
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              {/* ... more time slots */}
            </Select>
            <Input placeholder="Enter your name" />
            <Input placeholder="Enter your email" />
            <Button colorScheme="blue" w="100%" onClick={handleSchedule}>
              Schedule Appointment
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
