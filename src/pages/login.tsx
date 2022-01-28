import {
  Avatar,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const PageLogin = () => {
  const [user, setUser] = useState("");
  const { push } = useRouter();

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
        borderColor="gray.600"
        align="flex-start"
        spacing="5"
        shadow="lg"
      >
        <Text>Tibia Boss Alerter</Text>
        <Text fontSize="xs">
          Descubra em tempo real em quais mundos e lugares no mapa há respawn de
          bosses.
        </Text>
        <Input
          placeholder="GitHub User"
          borderRadius="0"
          bg="gray.700"
          fontSize="xs"
          border="1px"
          borderColor="gray.600"
          _hover={{ borderColor: "gray.800", bg: "gray.800" }}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <HStack w="full" justify="flex-end">
          <Button
            bg="gray.700"
            color="gray.200"
            border="1px"
            borderColor="gray.600"
            fontSize="xs"
            fontWeight="normal"
            borderRadius="0"
            _hover={{ bg: "gray.800" }}
            onClick={() => push(`/chat?user=${user}`)}
          >
            Entrar
            <Avatar size="xs" ml="4" src={`https://github.com/${user}.png`} />
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};
