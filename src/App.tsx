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
      }}
    >
      <div style={{ border: "1px solid rgba(50,50,50)" }} />
      <div style={{ border: "1px solid rgba(50,50,50)" }} />
      <div style={{ border: "1px solid rgba(50,50,50)" }} />
      <div style={{ border: "1px solid rgba(50,50,50)" }} />
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
        minHeight: "100vh",
        margin: "0px auto",
        overflow: "hidden",
        height: "100vh",
        cursor: "grab",
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
          position: "fixed",
          backgroundClip: "content-box",
          top: "50%",
          left: "50%",
          opacity: "1",
          transition: "opacity 300ms ease 0s",
          willChange: "transform",
          background: "black",
          overflow: "hidden",
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
          PidARAS
        </p>
        <p
          style={{
            fontSize: 20,
            color: "white",
            gridColumn: "20 / 14",
            gridRow: "15 / span 5",
          }}
        >
          PidARAS222
        </p>
        {[...Array(800).keys()].map((_, i) => (
          <Tile key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
