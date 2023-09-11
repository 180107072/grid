import { FC, useEffect, useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{
            boxShadow: "0px 0px 0px rgba(50,50,50)",
            transform: "translate(0px, 0px)",
            borderRadius: 40,
            padding: 10,
            opacity: 0,
          }}
          animate={{
            boxShadow: "10px 10px 0px rgba(50,50,50)",
            transform: "translate(-10px, -10px)",
            borderRadius: 40,
            padding: 10,
            opacity: 1,
            transition: {
              delay: 2,
            },
          }}
          style={{
            fontSize: 20,
            color: "white",
            gridColumn: "10 / 20",
            gridRow: "11 / span 2",
            overflow: "hidden",
            position: "relative",
            boxShadow: "10px 10px 0px rgba(50,50,50)",
            transform: "translate(-10px, -10px)",
            borderRadius: 40,
            padding: 10,
          }}
        >
          SOME TEXT
        </motion.div>
        <motion.div
          initial={{
            boxShadow: "0px 0px 0px rgba(50,50,50)",
            transform: "translate(0px, 0px)",

            opacity: 0,
          }}
          animate={{
            boxShadow: "10px 10px 0px rgba(50,50,50)",
            transform: "translate(-10px, -10px)",

            opacity: 1,
            transition: {
              delay: 3,
            },
          }}
          style={{
            fontSize: 20,
            color: "white",
            gridColumn: "20 / 14",
            gridRow: "15 / span 5",
            overflow: "hidden",
            position: "relative",
            boxShadow: "10px 10px 0px rgba(50,50,50)",
            transform: "translate(-10px, -10px)",
            borderRadius: 10,
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
        </motion.div>
        {[...Array(800).keys()].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: i * 0.005,
              },
            }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
