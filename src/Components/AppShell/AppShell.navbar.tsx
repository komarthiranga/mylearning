import { Navbar } from "@mantine/core";
import { MainLinks } from "./_mainlinks";
import { User } from "./_user";
import { useLocation } from "react-router-dom";
export const NavBar = ({ opened }: any) => {
  const location = useLocation();
  const shouldNavBarHidden =
    location.pathname.split("/").length >= 3 && !opened;
  return (
    <div>
      {!shouldNavBarHidden && (
        <Navbar
          p="md"
          hidden={!opened}
          hiddenBreakpoint="sm"
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow mt="md">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      )}
    </div>
  );
};
