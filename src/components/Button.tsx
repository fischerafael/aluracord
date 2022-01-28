import { Avatar, Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  user?: string;
  action: string;
}

export const Button = ({ user, action, ...props }: Props) => {
  const avatarImage = `https://github.com/${user}.png`;

  return (
    <ChakraButton
      bg="gray.700"
      color="gray.200"
      border="1px"
      borderColor="gray.600"
      fontSize="xs"
      fontWeight="normal"
      borderRadius="0"
      _hover={{ bg: "gray.800" }}
      {...props}
    >
      {action}
      {user && user?.length > 3 && (
        <Avatar size="xs" ml="4" src={avatarImage} />
      )}
    </ChakraButton>
  );
};
