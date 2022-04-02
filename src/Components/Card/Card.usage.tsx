import {
  Card,
  Image,
  Text,
  Badge,
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
} from "../../Icons";
import { Trophy } from "tabler-icons-react";
import React from "react";
import { CardProps } from "./Card.model";

export const CardWrapper = ({ title, description }: CardProps) => {
  const theme = useMantineTheme();
  const secondaryColor = theme.colors.dark[1];

  const Component: React.FC = () => {
    switch (title) {
      case "HTML":
        return <HTML width="6em" height="6em" />;
      case "Javascript":
        return <JavascriptIcon width="6em" height="6em" />;
      case "React":
        return <ReactIcon width="6em" height="6em" />;
      case "Nextjs":
        return <NextJSIcon width="6em" height="6em" />;
      case "Nodejs":
        return <NodejsIcon width="6em" height="6em" />;
      case "GraphQl":
        return <GraphQLIcon width="6em" height="6em" />;
      default:
        return <HTML />;
    }
  };

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
          <Text weight={500}>{title}</Text>
          <RingProgress
            sections={[{ value: 40, color: "blue" }]}
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
        >
          Start Learning
        </Button>
      </Card>
    </div>
  );
};
