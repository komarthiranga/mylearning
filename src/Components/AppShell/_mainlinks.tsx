import {
  BrandHtml5,
  BrandCss3,
} from "tabler-icons-react";
import React from "react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { NextJSIcon, ReactIcon, JavascriptIcon, NodejsIcon, GraphQLIcon} from '../../Icons'

interface MainLinkProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}
const MainLink = ({ icon, color, label }: MainLinkProps) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colors.dark[0],
        "&:hover": {
          backgroundColor: theme.colors.dark[6],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  { icon: <BrandHtml5 size={16} />, color: "red", label: "HTML" },
  { icon: <BrandCss3 size={16} />, color: "teal", label: "CSS" },
  { icon: <JavascriptIcon />, color: "yellow", label: "Javascript" },
  { icon: <ReactIcon />, color: "blue", label: "React" },
  { icon: <NextJSIcon />, color: "orange", label: "Next.js" },
  { icon: <NodejsIcon />, color: "green", label: "NodeJs" },
  { icon: <GraphQLIcon />, color: "pink", label: "GraphQL" },

];

export const MainLinks = () => {
  return (
    <div>
      {data.map((link) => (
        <MainLink {...link} key={link.label} />
      ))}
    </div>
  );
};
