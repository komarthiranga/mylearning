import { Navbar } from "@mantine/core";
import { MainLinks } from "./_mainlinks";
import { User } from "./_user";
export const NavBar = ({opened}: any) => {
  return (
      <Navbar p="md" hidden={!opened} hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Navbar.Section grow mt="md">
          <MainLinks />
        </Navbar.Section>
        <Navbar.Section>
          <User />
        </Navbar.Section>
      </Navbar>
  );
};
