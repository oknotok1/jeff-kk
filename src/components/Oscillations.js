import React from "react";
import Sketch from "react-p5";

const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(900, 600).parent(canvasParentRef);
  p5.angleMode(p5.DEGREES);
};

const draw = (p5) => {
  p5.background(0);
  p5.fill(255);
  p5.translate(p5.width / 2, p5.height / 2);

  let amplitude = 250;
  let frequency = 1.0;
  let phase = 0;

  var locX = p5.sin(p5.frameCount * 6 * frequency + phase) * amplitude;
  p5.ellipse(locX, 0, 30, 30);
};

export default function Oscillations() {
  return (
    <div className="oscillations">
      <h1>Ocillations</h1>
      <p>
        This was a simple little program created with the <code>p5.js</code>{" "}
        library. The canvas below shows an ellipse oscillating horizonatally to
        a sine wave function, constrained to a single axis.
      </p>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
