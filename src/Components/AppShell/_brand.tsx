import { Box, Group, ActionIcon, Text } from "@mantine/core";
import { CirclePlus } from "tabler-icons-react";
import { Logo } from "./_logo";
export const Brand = () => {
  const navigateTo = () => {};
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colors.dark[4]}`,
      })}
    >
      <Group position="apart">
        <Logo /> 
        <ActionIcon
          variant="default"
          onClick={navigateTo}
          size={30}
        >
           <CirclePlus size={20} strokeWidth={1} color={"white"} />
           <Text> Crete New</Text>
        </ActionIcon>
      </Group>
    </Box>
  );
};
