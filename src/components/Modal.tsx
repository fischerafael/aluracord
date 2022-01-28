import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Modal as ChakraModal,
  Input,
  VStack,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useState } from "react";
import { IBoss } from "../data/IBoss";
import { db } from "../db/config";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: Props) => {
  const { query } = useRouter();
  const user = query.user as string;

  const [boss, setBoss] = useState<IBoss>({
    city: "",
    name: "",
    world: "",
  } as IBoss);

  const [isLoading, setLoading] = useState(false);

  const handleCreateBoss = () => {
    setLoading(true);
    db.from("boss")
      .insert({ ...boss, user })
      .then((res) => {
        setLoading(false);
        onClose();
      });
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="0"
        bg="gray.800"
        color="gray.200"
        p="8"
        fontFamily="monospace"
      >
        <ModalCloseButton />
        <ModalBody>
          <VStack w="full" align="flex-start" spacing="8">
            <Text>Cadastrar Aparição de Boss</Text>
            <Input
              placeholder="Boss"
              borderRadius="0"
              bg="gray.700"
              fontSize="xs"
              border="1px"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.800", bg: "gray.800" }}
              value={boss.name}
              onChange={(e) => setBoss({ ...boss, name: e.target.value })}
            />
            <Input
              placeholder="Cidade"
              borderRadius="0"
              bg="gray.700"
              fontSize="xs"
              border="1px"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.800", bg: "gray.800" }}
              value={boss.city}
              onChange={(e) => setBoss({ ...boss, city: e.target.value })}
            />
            <Input
              placeholder="Mundo"
              borderRadius="0"
              bg="gray.700"
              fontSize="xs"
              border="1px"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.800", bg: "gray.800" }}
              value={boss.world}
              onChange={(e) => setBoss({ ...boss, world: e.target.value })}
            />
            <HStack w="full" justify="flex-end">
              {isLoading ? (
                <Image src="/orsh.gif" />
              ) : (
                <Button
                  bg="gray.700"
                  color="gray.200"
                  border="1px"
                  borderColor="gray.600"
                  fontSize="xs"
                  fontWeight="normal"
                  borderRadius="0"
                  _hover={{ bg: "gray.800" }}
                  onClick={handleCreateBoss}
                >
                  Cadastrar
                </Button>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
