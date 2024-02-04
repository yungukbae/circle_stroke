import { useEffect, useRef } from "react";

function ColorCircle() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;

    const addLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color = "rgba(255,255,255,0.25)",
      width = "0"
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
        line.setAttribute("stroke-linecap", "square");
        line.setAttribute("stroke-width", width);

        // SVG에 line 요소 추가
        svg.appendChild(line);
      }
    };

    for (let i = 0; i < window.innerWidth; i++) {
      addLine(i * 5, 0, i * 5, window.innerHeight);
    }
    const timeoutIds: number[] = [];
    if (svg) {
      const lines = svg.querySelectorAll("line");
      lines.forEach((line, index) => {
        const id = setTimeout(() => {
          line.setAttribute("stroke-width", "3");
          // CSS transition 속성을 사용하여 애니메이션 효과를 줄 수 있습니다.
          line.style.transition = "stroke-width 1s ease";
        }, index * 10 + 1000); // 인덱스에 비례하여 지연 시간을 설정합니다.
        timeoutIds.push(id);
      });
    }

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
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
            width: "100vw",
            height: "100vh",
            mixBlendMode: "overlay",
            background: "#000",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 1,
            mixBlendMode: "overlay",
            background: `conic-gradient(from 0.5turn at 50% 50%,#000, rgba(0,89,171,.8),rgba(15,255,169,.8),rgba(255,206,32,.8),rgba(197,0,0,.8), #000)
            `,
          }}
        ></div>
        <svg
          width={"100vw"}
          height={"100vh"}
          viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
          ref={svgRef}
        ></svg>
      </div>
    </>
  );
}

export default ColorCircle;
