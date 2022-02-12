import React, { useRef, useLayoutEffect } from 'react';
import { _particles } from './Particles.styled';

const Particles = ({ height }) => {
  const canvas_ref = useRef();

  useLayoutEffect(() => {
    const $ = canvas_ref.current?.getContext('2d');
    if ($) {
      const w = 400;
      const h = height;
      const arr = [];

      const part = () => {
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.random() * 0.5,
          vy: Math.random() * 0.5 + 0.2,
          col: `hsla(205, 65%, 75%, 1)`,
          rad: Math.random() * 2 + 2,
        };
      };

      for (let i = 0; i < 100; i++) arr.push(part());

      const draw = () => {
        $.globalCompositeOperation = 'source-over';
        $.clearRect(0, 0, w, h);
        $.globalCompositeOperation = 'hard light';
        for (let j = 0; j < arr.length; j++) {
          let p = arr[j];
          $.beginPath();
          let g = $.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.rad);
          g.addColorStop(0, 'hsla(0,0%,0%,.4)');
          g.addColorStop(0.4, p.col);
          g.addColorStop(1, 'hsla(0,0%,0%,0)');
          $.fillStyle = p.col;
          $.arc(p.x, p.y, p.rad, Math.PI * 2, false);
          $.fill();
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -50) p.x = w + 50;
          if (p.y < -50) p.y = h + 50;
          if (p.x > w + 50) p.x = -50;
          if (p.y > h + 50) p.y = -50;
        }
        window.requestAnimationFrame(draw);
      };

      draw();
    }
  }, [canvas_ref]);

  return <_particles ref={canvas_ref} width={400} height={height} />;
};

export default Particles;
