import { Grid, Title, Divider, useMantineTheme } from "@mantine/core";
import { CardWrapper } from "../Components/Card";
import { TECH_DATA } from '../MockData/technologies';

const DashboardPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Title
        order={3}
        style={{ color: "white"}}
      >
        Dashboard
      </Title>
      <div>
        <Divider
          my="sm"
          style={{ borderTopColor: `${theme.colors.gray[8]}` }}
        />
        <Title order={4} style={{ color: "white" }}>
          Tech Stack
        </Title>{" "}
        <br />
        <Grid>
          {TECH_DATA.map((item, key) => (
            <Grid.Col key={key} sm={12} md={6} lg={3}>
              <CardWrapper {...item} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default DashboardPage;
