import { FC, useEffect, useRef, useState } from "react";
import "./App.css";

const Tile: FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        width: 80,
        height: 80,
        pointerEvents: "all",
      }}
    >
      <div
        style={{ border: "0.5px solid rgba(50,50,50)" }}
        className="grid-item"
      ></div>
      <div
        style={{ border: "0.5px solid rgba(50,50,50)" }}
        className="grid-item"
      />
      <div
        style={{ border: "0.5px solid rgba(50,50,50)" }}
        className="grid-item"
      />
      <div
        style={{ border: "0.5px solid rgba(50,50,50)" }}
        className="grid-item"
      />
    </div>
  );
};

function App() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  const { width, height } = { width: 2400, height: 3000 };

  useEffect(() => {
    function handleResize() {
      function average(a: number, b: number) {
        return (a * 1 + b * 1) / 2;
      }
      setScale(
        average(
          window.screen.availWidth / width,
          window.screen.availHeight / height
        )
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: "0px auto",
        overflow: "hidden",
        height: "100vh",
        background: "black",
      }}
    >
      <div
        ref={gridRef}
        className="grid-container"
        style={{
          transform: `translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) translateZ(0)`,
          display: "grid",
          padding: 5,
          gridTemplateColumns: "repeat(30, 1fr)",
          gridTemplateRows: "repeat(30, 1fr)",
          position: "absolute",
          top: "50%",
          left: "50%",
          willChange: "transform",
          background: "black",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontSize: 20,
            color: "white",
            gridColumn: "10 / 20",
            gridRow: "11 / span 2",
          }}
        >
          SOME TEXT
        </p>
        <div
          style={{
            fontSize: 20,
            color: "white",
            gridColumn: "20 / 14",
            gridRow: "15 / span 5",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="https://picsum.photos/1000/1000"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </div>
        {[...Array(800).keys()].map((_, i) => (
          <Tile key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
