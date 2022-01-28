import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

interface Props {
  user: string;
  currentDate: string;
  boss: string;
  city: string;
  world: string;
}

export const ChatMessage = ({
  user,
  currentDate,
  boss,
  city,
  world,
}: Props) => {
  return (
    <VStack w="full" align="flex-start" py="2" spacing="0">
      <HStack>
        <Avatar size="xs" src={`http://github.com/${user}.png`} />
        <Text fontSize="xs">{user}</Text>
        <Text fontSize="xs" color="gray.400">
          {currentDate}
        </Text>
      </HStack>
      <HStack pt="1">
        <Text>{boss}</Text>
        <Text color="gray.400">{city}</Text>
        <Text color="gray.400">{world}</Text>
      </HStack>
    </VStack>
  );
};
