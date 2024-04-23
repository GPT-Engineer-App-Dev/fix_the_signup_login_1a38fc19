import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/signup" px={2}>
            Sign Up
          </Link>
          <Link as={RouterLink} to="/login" px={2}>
            Log In
          </Link>
          <Link as={RouterLink} to="/dashboard" px={2}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/settings" px={2}>
            Settings
          </Link>
          <Link as={RouterLink} to="/subscription" px={2}>
            Subscription
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
