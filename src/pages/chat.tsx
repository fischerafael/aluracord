import {
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineX } from "react-icons/hi";

import { useEffect, useState } from "react";
import { ChatMessage } from "../components/ChatMessage";
import { Modal } from "../components/Modal";
import { db } from "../db/config";
import { IBoss } from "../data/IBoss";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { useRouter } from "next/router";

export const PageChat = () => {
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(true);

  const [bosses, setBosses] = useState<IBoss[]>([]);

  useEffect(() => {
    db.from("boss")
      .select("*")
      .order("created_at", { ascending: false })
      .then((res) => {
        if (res.data) {
          setBosses(res.data);
          setLoading(false);
        }
      });
  }, [onClose]);

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

      {isLoading ? (
        <Loading />
      ) : (
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
          <HStack w="full" justify="space-between">
            <Text>Boss Log</Text>

            <IconButton
              variant="ghost"
              aria-label="Close"
              _hover={{ bg: "gray.800" }}
              borderRadius="0"
              icon={<HiOutlineX />}
              onClick={() => push("/")}
            />
          </HStack>

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
              const currentDate = new Date(
                boss.created_at!
              ).toLocaleDateString();
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
            <Button action="Cadastrar Boss" onClick={() => onOpen()} />
          </HStack>
        </VStack>
      )}
    </Flex>
  );
};
