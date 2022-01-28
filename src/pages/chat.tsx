import {
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { ChatMessage } from "../components/ChatMessage";
import { Modal } from "../components/Modal";
import { db } from "../db/config";
import { IBoss } from "../data/IBoss";

export const PageChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bosses, setBosses] = useState<IBoss[]>([]);

  console.log(bosses);

  useEffect(() => {
    db.from("boss")
      .select("*")
      .then((res) => {
        if (res.data) {
          setBosses(res.data);
        }
      });
  }, []);

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
      <Modal isOpen={isOpen} onClose={onClose} />
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
          {bosses?.map((boss) => {
            const currentDate = new Date(boss.created_at!).toLocaleDateString();
            return (
              <ChatMessage
                key={boss.id}
                user={boss.user}
                currentDate={currentDate}
                boss={boss.name}
                city={boss.city}
                world={boss.world}
              />
            );
          })}
        </VStack>
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
            onClick={() => onOpen()}
          >
            Cadastrar Boss
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};
