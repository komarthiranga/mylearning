import { Grid, Title, Divider, useMantineTheme } from "@mantine/core";
import { CardWrapper } from "../Components/Card";
import { CardProps } from "../Components/Card/Card.model";

const data: CardProps[] = [
  {
    title: "HTML",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    title: "Javascript",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    title: "React",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    title: "Nextjs",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    title: "Nodejs",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    title: "GraphQl",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
];

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
          {data.map((item, key) => (
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
