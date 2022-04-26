import React, { useState } from "react";
import {
  AppShell,
  Header,
  Burger,
  MediaQuery,
  useMantineTheme,
  Group,
  Button,
  ActionIcon,
} from "@mantine/core";
import { NavBar } from "./AppShell.navbar";
import { Logo } from "./_logo";
import { Plus } from "tabler-icons-react";
import { useNavigate } from 'react-router-dom';

export const AppShellWrapper: React.FC<any> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const navigator = useNavigate();

  const navigateTo = () => {
    navigator('/new-topic');
  }

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.dark[8],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<NavBar opened={opened} />}
      header={
        <Header p="md" height={60}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group sx={{ height: "100%" }} px={20} position="left">
              <Logo />
            </Group>
            <Group sx={{ height: "100%", flex: 1 }} px={20} position="right">
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Button
                  component="a"
                  href="#"
                  variant="outline"
                  leftIcon={<Plus size={14} />}
                  onClick={navigateTo}
                >
                  Create Topic
                </Button>
              </MediaQuery>

              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <ActionIcon variant="default" size={30}>
                  <Plus size={20} strokeWidth={1} color={"rgb(51, 154, 240)"} />
                </ActionIcon>
              </MediaQuery>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
