import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Divider,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            here to join our clan✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"yellow.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
              <Text align={"center"} as="b">
                Or <Link color={"blue.400"}>Login With</Link>
              </Text>
              <Divider />
              <Center p={8}>
                <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                  {/* Facebook */}
                  <Button
                    w={"full"}
                    colorScheme={"facebook"}
                    leftIcon={<FaFacebook />}
                  >
                    <Center>
                      <Text>Continue with Facebook</Text>
                    </Center>
                  </Button>

                  {/* Google */}
                  <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>

                  
                  
                </Stack>
              </Center>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
