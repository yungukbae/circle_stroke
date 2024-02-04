import ColorCircle from "../components/ColorCircle";

const Section1 = () => {
  return (
    <>
      <ColorCircle />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: 80, paddingLeft: "20px" }}>
          STRIPE MOVIE
        </h1>
      </div>
    </>
  );
};

export default Section1;
