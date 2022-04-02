import { Alarm } from "tabler-icons-react";
export const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.3rem",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-1em",
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
        }}
      >
        My Learning Hub{" "}
      </div>
    </div>
  );
};
