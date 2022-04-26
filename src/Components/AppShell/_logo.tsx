import { Alarm, CirclePlus } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { Group, Text } from "@mantine/core";
export const Logo = () => {
  const navigation = useNavigate();
  const navigateHandler = () => {
    navigation("/dashboard");
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "0.3rem",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-1em",
        cursor: "pointer",
      }}
    >
      <Alarm size={30} strokeWidth={2} color={"rgb(51, 154, 240)"} />
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 800,
          color: "#fff",
          fontFamily: "system-ui",
          marginTop: "-3px",
          display: 'flex',
        }}
        onClick={navigateHandler}
      >
        <div> My Learning Hub </div>
        {/* <Group sx={{display: 'flex'}}>
          <CirclePlus size={20} strokeWidth={1} color={"white"} />
          <Text>Create New</Text>
        </Group> */}
      </div>
    </div>
  );
};
