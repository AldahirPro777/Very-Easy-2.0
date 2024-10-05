import { useEffect, useRef, useState } from "react";
import "../../../scss/sub-pages/dashboard/cumpleaños/cumpleaños.css";
import confetti from "canvas-confetti";

const defaults = {
  particleCount: 500,
  spread: 80,
  angle: 90,
};

const fire = (particleRatio, opts) => {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(defaults.particleCount * particleRatio),
    })
  );
};

function Cumpleaños() {
  const confettiBtn = useRef(null);
  const [exploding, setExploding] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (exploding) return;
      setExploding(true);
      confettiBtn.current.classList.add("animate__rubberBand");

      setTimeout(() => {
        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        setTimeout(() => {
          confettiBtn.current.classList.remove("animate__rubberBand");
          setExploding(false);
        }, 300);
      }, 300);
    };

    const button = confettiBtn.current;
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [exploding]);

  return (
    <section id="cumpleaños">
      <h1>Siguiente Cumpleañera</h1>
      <h2 className="cumple">Sunem</h2>
      <h3>1 de Octubre</h3>
      <button
        ref={confettiBtn}
        className="canvas-confetti-btn animate__animated"
      >
        🎉
        <span className="tool-tip">Click me!</span>
      </button>
    </section>
  );
}

export default Cumpleaños;
