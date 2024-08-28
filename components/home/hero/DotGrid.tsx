import React, { useState, useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const [ripples, setRipples] = useState<{ x: number; y: number; key: number }[]>([]);
  const [key, setKey] = useState(0);

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = e.currentTarget.dataset.index;
    setRipples((prev) => [
      ...prev,
      { x: e.clientX, y: e.clientY, key }
    ]);
    setKey((prevKey) => prevKey + 1);

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      backgroundColor: [
        { value: "#FF6347", easing: "easeOutSine", duration: 250 },
        { value: "#007BFF", easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: index ? parseInt(index) : 0,
      }),
    });
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const lastRipple = ripples[ripples.length - 1];
      anime({
        targets: `.ripple-${lastRipple.key}`,
        scale: [0, 4],
        opacity: [1, 0],
        duration: 1000,
        easing: "easeOutQuad",
        complete: () => {
          setRipples((prev) => prev.filter((r) => r.key !== lastRipple.key));
        },
      });
    }
  }, [ripples]);

  const dots = [];

  let index = 0;
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
          <div
              onClick={handleDotClick}
              className={styles.dotWrapper}
              data-index={index.toString()}
              key={`${i}-${j}`}
          >
            <div
                className={`${styles.dot} dot-point ${index}`}
                data-index={index.toString()}
            />
          </div>
      );
      index++;
    }
  }

  return (
      <div
          style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
          className={`${styles.dotGrid} hidden sm:block`} // Tailwind classes added here
      >
        {dots.map((dot) => dot)}
        {ripples.map((ripple) => (
            <div
                key={ripple.key}
                className={`${styles.ripple} ripple-${ripple.key}`}
                style={{ left: ripple.x, top: ripple.y }}
            />
        ))}
      </div>
  );
};
