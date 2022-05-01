import {
  Card,
  Text,
  Button,
  Group,
  useMantineTheme,
  ThemeIcon,
  RingProgress,
  Center,
} from "@mantine/core";

import {
  HTML,
  JavascriptIcon,
  ReactIcon,
  NextJSIcon,
  NodejsIcon,
  GraphQLIcon,
  CSS
} from "../../Icons";
import { Trophy } from "tabler-icons-react";
import React from "react";
import { CardProps } from "./Card.model";
import { useNavigate } from 'react-router-dom';

export const CardWrapper = ({ label, description }: CardProps) => {
  const theme = useMantineTheme();
  const secondaryColor = theme.colors.dark[1];
  const navigation = useNavigate();

  const Component: React.FC = () => {
    switch (label) {
      case "HTML":
        return <HTML width="6em" height="6em" />;
      case "CSS":
        return <CSS width="6em" height="6em" />;  
      case "Javascript":
        return <JavascriptIcon width="6em" height="6em" />;
      case "React":
        return <ReactIcon width="6em" height="6em" />;
      case "Nextjs":
        return <NextJSIcon width="6em" height="6em" />;
      case "Nodejs":
        return <NodejsIcon width="6em" height="6em" />;
      case "GraphQL":
        return <GraphQLIcon width="6em" height="6em" />;
      default:
        return <HTML />;
    }
  };

  const navigateHandler = (technologyId: string) => {
    navigation(`/technology/${technologyId.toLowerCase()}`)
  }

  return (
    <div style={{ width: "200", margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
              backgroundColor: "hsl(222, 14%, 10%)",
            }}
          >
            <Component />
          </div>
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{label}</Text>
          <RingProgress
            sections={[{ value: 0, color: "blue" }]}
            size={70}
            thickness={4}
            label={
              <Center>
                <ThemeIcon color="dark" variant="filled" radius="xl" size="xl">
                  <Trophy size={22} />
                </ThemeIcon>
              </Center>
            }
          />
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={navigateHandler.bind(this, label)}
        >
          Start Learning
        </Button>
      </Card>
    </div>
  );
};
