import { ChevronRight, ChevronLeft } from "tabler-icons-react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
} from "@mantine/core";

export const User = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colors.dark[4]}`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colors.dark[0],
          "&:hover": {
            backgroundColor: theme.colors.dark[6],
          },
        }}
      >
        <Group>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQHKbq26kFCvtw/profile-displayphoto-shrink_100_100/0/1640097686460?e=1654128000&v=beta&t=gcyzjvLZ1MZggJ0rYZUH0azBd8qTbtCnfqD0Xp4ik5M"
            radius="xl"
          />

          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Ranga Komarthi
            </Text>
            <Text color="dimmed" size="xs">
              reduxranga@gmail.com
            </Text>
          </Box>

          {theme.dir === "ltr" ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
  );
};
