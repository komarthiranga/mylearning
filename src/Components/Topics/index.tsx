import { RichTextEditor } from "@mantine/rte";
import { useState, useEffect } from "react";
import { Accordion, Loader, Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';


const Topics = ({technologyName} : {technologyName: string}): React.ReactElement => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        `https://rangakomarthi-learning-hub.herokuapp.com/api/v1/topic/${technology}/getTopics`
      );
      if (!rawResponse.ok) {
        throw new Error("There some issue");
      }
      const content = await rawResponse.json();
      setData(content);
      setLoading(false);
    };
    get();
  }, []);

  return (
    <>
     {!loading && data.length === 0 ?   <Alert icon={<AlertCircle size={16} />} title="No Results!" variant="outline">
      Currently there are no results found!
    </Alert> : '' }
     {loading && data.length === 0 ? <Loader variant="bars" /> : '' }
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
