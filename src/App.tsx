import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const addLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color = "rgba(255,255,255,0.1)",
      width = "3"
    ) => {
      if (svg) {
        // line 요소 생성
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        // line 요소에 속성 설정
        line.setAttribute("x1", `${x1}`);
        line.setAttribute("y1", `${y1}`);
        line.setAttribute("x2", `${x2}`);
        line.setAttribute("y2", `${y2}`);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", width);

        // SVG에 line 요소 추가
        svg.appendChild(line);
      }
    };

    // for (let i = 0; i < 100; i++) {
    //   addLine(`500`, "500", `${i * 10}`, "0");
    //   addLine("500", "500", "0", `${(i + 1) * 10}`);
    //   addLine("500", "500", `${(i + 1) * 10}`, "1000");
    //   addLine("500", "500", "1000", `${i * 10}`);
    // }
    const cx = 500; // 원의 중심 x 좌표
    const cy = 500; // 원의 중심 y 좌표
    const r = 0.1; // 원의 반지름

    for (let i = 0; i < 500; i++) {
      const angle = (i / 500) * 2 * Math.PI; // 0에서 2π 사이의 각도
      const x1 = cx + r * Math.cos(angle); // 시작점 x 좌표
      const y1 = cy + r * Math.sin(angle); // 시작점 y 좌표
      const x2 = cx + 1000 * Math.cos(angle); // 시작점 x 좌표
      const y2 = cy + 1000 * Math.sin(angle); // 시작점 y 좌표

      // 선의 끝점 좌표는 예제에 따라 조정이 필요할 수 있습니다.
      addLine(x1, y1, x2, y2);
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "1000px",
            height: "1000px",
            mixBlendMode: "overlay",
            background: "#000",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "1000px",
            height: "1000px",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 1,
            mixBlendMode: "overlay",
            background: `conic-gradient(from 0.5turn at 50% 50%,#fff, orange,red,purple,blue,aqua, #fff)
            `,
          }}
        ></div>
        <svg
          width={1000}
          height={1000}
          viewBox="0 0 1000 1000"
          ref={svgRef}
        ></svg>
      </div>
    </>
  );
}

export default App;
