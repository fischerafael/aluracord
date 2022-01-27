import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";

export const PageLogin = () => {
  return (
    <Flex
      w="100vw"
      bg="blue.200"
      h="100vh"
      justify="center"
      align="center"
      bgImg="/bg-login.jpg"
      bgPos="center"
      bgSize="cover"
      color="gray.100"
      fontFamily="monospace"
    >
      <VStack
        w="full"
        maxW="400px"
        bg="gray.700"
        p="8"
        border="1px"
        borderColor="gray.800"
        align="flex-start"
        spacing="5"
        shadow="lg"
      >
        <Text>Tibia Boss Alerter</Text>
        <Input
          placeholder="GitHub User"
          borderRadius="0"
          bg="gray.600"
          fontSize="xs"
          border="1px"
          borderColor="gray.800"
        />
        <Button
          bg="gray.600"
          color="gray.200"
          border="1px"
          borderColor="gray.800"
          borderRadius="0"
          _hover={{ bg: "gray.700" }}
        >
          Entrar
        </Button>
      </VStack>
    </Flex>
  );
};
