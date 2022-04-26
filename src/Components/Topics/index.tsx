import { Accordion, Notification } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { useState, useEffect } from "react";

const Topics = ({technologyName} : {technologyName: string}): React.ReactElement => {
  const [data, setData] = useState([]);
  let technology = '';

  switch (technologyName) {
    case "javascript":
      technology ='Javascript';
      break;
    case "html":
      technology ='HTML';
      break;
    case "react":
      technology ='React';
      break;
    case "nextjs":
      technology ='Nextjs';
      break;
    case "nodejs":
      technology ='Nodejs';
      break;
    case "graphql":
      technology ='GraphQL';
      break;
    default:
      break;
  } 

  useEffect(() => {
    const get = async () => {
      const rawResponse = await fetch(
        `http://localhost:3001/api/v1/topic/${technology}/getTopics`
      );
      if (!rawResponse.ok) {
        throw new Error("There some issue");
      }
      const content = await rawResponse.json();
      console.log(content);
      setData(content);
    };
    get();
  }, []);

  return (
    <>
     {data.length === 0 ?  <Notification title="No Results" disallowClose={true}>
        Currently there is no results
      </Notification> : '' }
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Item key={index} label={item["name"]}>
            <RichTextEditor
              value={item["description"]}
              onChange={() => {}}
              readOnly
              controls={[]}
            />
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Topics;
