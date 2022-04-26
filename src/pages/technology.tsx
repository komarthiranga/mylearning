import {
  Divider,
  useMantineTheme,
} from "@mantine/core";
import Topics from "../Components/Topics";
import TitleWrapper from "../Components/Topics/Title";
import { useLocation } from 'react-router-dom';

const Technology = () => {
  const location = useLocation();
  const technologyName = location.pathname.split('/')[2];

  const theme = useMantineTheme();
  return (
    <>
      <TitleWrapper technologyName={technologyName} />
      <Divider my="sm" style={{ borderTopColor: `${theme.colors.gray[8]}` }} />
      <Topics technologyName={technologyName} />
    </>
  );
};

export default Technology;
