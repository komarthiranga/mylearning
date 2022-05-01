import { Title, Group, ThemeIcon } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import { JavascriptIcon } from "../../Icons/Javascript";
import { HTML } from "../../Icons/HTML";
import { ReactIcon } from "../../Icons/React";
import { NextJSIcon } from "../../Icons/Next";
import { NodejsIcon } from "../../Icons/Nodejs";
import { GraphQLIcon } from '../../Icons/GraphQL';
import { CSS } from '../../Icons/CSS';
const TitleWrapper = ({
  technologyName,
}: {
  technologyName: string;
}): ReactElement => {
  let technologyIcon: ReactNode = null;

  switch (technologyName) {
    case "javascript":
      technologyIcon = <JavascriptIcon width="5em" height="5em" />;
      break;
    case "html":
      technologyIcon = <HTML width="5em" height="5em" />;
      break;
    case "css":
      technologyIcon = <CSS width="5em" height="5em" />;
        break;  
    case "react":
      technologyIcon = <ReactIcon width="5em" height="5em" />;
      break;
    case "nextjs":
      technologyIcon = <NextJSIcon width="5em" height="5em" />;
      break;
    case "nodejs":
      technologyIcon = <NodejsIcon width="5em" height="5em" />;
      break;
    case "graphql":
      technologyIcon = <GraphQLIcon width="5em" height="5em" />;
      break;
    default:
      break;
  }

  return (
    <Group>
      <ThemeIcon color="dark">{technologyIcon}</ThemeIcon>
      <Title order={3} style={{ color: "white" }}>
        {technologyName}
      </Title>
    </Group>
  );
};

export default TitleWrapper;
