import { Image, Text, VStack } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <VStack>
      <Image src="/orsh.gif" />
      <Text>Carregando...</Text>
    </VStack>
  );
};
