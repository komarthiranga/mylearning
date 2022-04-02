import React, { useState } from "react";
import {
  AppShell,
  Header,
  Burger,
  MediaQuery,
  useMantineTheme,
  Group,
} from "@mantine/core";
import { NavBar } from "./AppShell.navbar";
import { Logo } from "./_logo";

export const AppShellWrapper: React.FC<any> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
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
      navbar={<NavBar opened={opened}/>}
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
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <Logo />
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
