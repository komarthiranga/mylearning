import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { Button, Box, Group, Text, Select, TextInput } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import React, { forwardRef } from "react";
import { TECH_DATA } from "../../MockData/technologies";
import {
  HTML,
  JavascriptIcon,
  ReactIcon,
  NextJSIcon,
  NodejsIcon,
  GraphQLIcon,
} from "../../Icons";
import { useHttp } from '../../Hooks/use-http';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  technology: z
    .string()
    .min(2, { message: "Name should have at least 2 letters" }),
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
});

const FormWrapper = () => {
  const [value, onChange] = React.useState("");
  const { data, error, save } = useHttp({url : 'https://rangakomarthi-learning-hub.herokuapp.com/api/v1/topic/save'});
  const navigate = useNavigate();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      technology: "",
      name: "",
    },
  });

  interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    label: string;
    description: string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          {Component(label)}

          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

  const Component: React.FC<any> = (title) => {
    switch (title) {
      case "HTML":
        return <HTML width="2em" height="2em" />;
      case "Javascript":
        return <JavascriptIcon width="2em" height="2em" />;
      case "React":
        return <ReactIcon width="2em" height="2em" />;
      case "Nextjs":
        return <NextJSIcon width="2em" height="2em" />;
      case "Nodejs":
        return <NodejsIcon width="2em" height="2em" />;
      case "GraphQL":
        return <GraphQLIcon width="2em" height="2em" />;
      default:
        return <HTML />;
    }
  };

  const submitHandler = (values: any) => {
    const requestPayload = {...values, description: value};
    console.log(requestPayload);
    save(requestPayload).then( (response) => {
      navigate('/dashboard');
      
    });
  }

  return (
    <Box sx={{ maxWidth: "20cv" }} mx="auto">
      <form onSubmit={form.onSubmit(submitHandler)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Text sx={{ color: "#C1C2C5" }}>New Topic </Text>
          <Select
            label="Select Technology"
            placeholder="Pick one"
            itemComponent={SelectItem}
            data={TECH_DATA}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            {...form.getInputProps("technology")}
            filter={(value: any, item: any) =>
              item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.description
                .toLowerCase()
                .includes(value.toLowerCase().trim())
            }
          />

          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />

          <label style={{ color: "#C1C2C5", fontSize: "14px" }}>
            Description
          </label>
          <RichTextEditor value={value} onChange={onChange} />
          <Group position="right" mt="xl">
            <Button type="submit">Submit</Button>
          </Group>
        </div>
      </form>
    </Box>
  );
};

export default FormWrapper;
