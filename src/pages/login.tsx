import { Avatar, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";

export const PageLogin = () => {
  const [user, setUser] = useState("");
  const { push } = useRouter();

  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!user || user.length < 3) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
  }, [user]);

  const handleChat = () => {
    push(`/chat?user=${user}`);
  };

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
            action="Entrar"
            user={user}
            isDisabled={isDisabled}
            onClick={handleChat}
          />
        </HStack>
      </VStack>
    </Flex>
  );
};
