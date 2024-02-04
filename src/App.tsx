import "./App.css";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";

function App() {
  return (
    <div
      style={{
        zIndex: 0,
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
