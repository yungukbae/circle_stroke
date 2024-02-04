import { useEffect, useRef } from "react";
import "./App.css";

const sizeWH = 800;

function CircleLine() {
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
    const cx = sizeWH / 2; // 원의 중심 x 좌표
    const cy = sizeWH / 2; // 원의 중심 y 좌표
    const r = 0.1; // 원의 반지름

    for (let i = 0; i < cx; i++) {
      const angle = (i / cx) * 2 * Math.PI; // 0에서 2π 사이의 각도
      const x1 = cx + r * Math.cos(angle); // 시작점 x 좌표
      const y1 = cy + r * Math.sin(angle); // 시작점 y 좌표
      const x2 = cx + sizeWH * Math.cos(angle); // 시작점 x 좌표
      const y2 = cy + sizeWH * Math.sin(angle); // 시작점 y 좌표

      // 선의 끝점 좌표는 예제에 따라 조정이 필요할 수 있습니다.
      addLine(x1, y1, x2, y2);
    }
  }, [sizeWH]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              width: sizeWH,
              height: sizeWH,
              mixBlendMode: "overlay",
              background: "#000",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: sizeWH,
              height: sizeWH,
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
            width={sizeWH}
            height={sizeWH}
            viewBox={`0 0 ${sizeWH} ${sizeWH}`}
            ref={svgRef}
          ></svg>
        </div>
      </div>
    </>
  );
}

export default CircleLine;
