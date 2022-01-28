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
import { ChatMessage } from "../components/ChatMessage";

export const PageChat = () => {
  const { query } = useRouter();

  const user = query.user as string;
  const currentDate = new Date().toLocaleDateString();

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
        maxW="container.sm"
        bg="gray.700"
        p="8"
        border="1px"
        borderColor="gray.600"
        align="flex-start"
        spacing="5"
        shadow="lg"
        maxH="60vh"
        h="full"
      >
        <Text>Boss Log</Text>
        <VStack
          w="full"
          bg="gray.800"
          border="1px"
          borderColor="gray.600"
          p="4"
          align="flex-start"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#444",
              borderRadius: "24px",
            },
          }}
          h="full"
        >
          <ChatMessage
            user={user}
            currentDate={currentDate}
            boss="Orshabaal"
            city="Ankrahmun"
            world="Pacera"
          />
          <ChatMessage
            user={user}
            currentDate={currentDate}
            boss="Orshabaal"
            city="Ankrahmun"
            world="Pacera"
          />
          <ChatMessage
            user={user}
            currentDate={currentDate}
            boss="Orshabaal"
            city="Ankrahmun"
            world="Pacera"
          />
          <ChatMessage
            user={user}
            currentDate={currentDate}
            boss="Orshabaal"
            city="Ankrahmun"
            world="Pacera"
          />
          <ChatMessage
            user={user}
            currentDate={currentDate}
            boss="Orshabaal"
            city="Ankrahmun"
            world="Pacera"
          />
        </VStack>
      </VStack>
    </Flex>
  );
};
