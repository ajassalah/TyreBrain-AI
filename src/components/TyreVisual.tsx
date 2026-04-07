'use client';
import { useEffect, useRef } from 'react';
import styles from './TyreVisual.module.css';

export default function TyreVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const outerR = Math.min(W, H) * 0.42;

      // Prevent negative radius on small/0-sized canvas
      if (outerR < 16) {
        animFrame = requestAnimationFrame(draw);
        return;
      }

      const innerR = outerR * 0.55;
      const hubR = outerR * 0.18;

      // Outer tyre glow
      const glowGrad = ctx.createRadialGradient(cx, cy, innerR * 0.8, cx, cy, outerR * 1.1);
      glowGrad.addColorStop(0, 'rgba(0, 212, 255, 0)');
      glowGrad.addColorStop(0.7, 'rgba(0, 212, 255, 0.04)');
      glowGrad.addColorStop(1, 'rgba(0, 212, 255, 0.15)');
      ctx.beginPath();
      ctx.arc(cx, cy, outerR * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Outer ring - outer edge
      ctx.beginPath();
      ctx.arc(cx, cy, outerR - 16, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Tread pattern
      const treadCount = 48;
      for (let i = 0; i < treadCount; i++) {
        const angle = (i / treadCount) * Math.PI * 2 + t * 0.3;
        const x1 = cx + Math.cos(angle) * (outerR - 16);
        const y1 = cy + Math.sin(angle) * (outerR - 16);
        const x2 = cx + Math.cos(angle) * outerR;
        const y2 = cy + Math.sin(angle) * outerR;
        const alpha = 0.3 + 0.3 * Math.sin(i * 0.5 + t * 2);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 3.5;
        ctx.stroke();
      }

      // Inner ring
      ctx.beginPath();
      ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Spokes
      const spokeCount = 6;
      for (let i = 0; i < spokeCount; i++) {
        const angle = (i / spokeCount) * Math.PI * 2 + t * 0.2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * hubR, cy + Math.sin(angle) * hubR);
        ctx.lineTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);

        const grad = ctx.createLinearGradient(
          cx + Math.cos(angle) * hubR, cy + Math.sin(angle) * hubR,
          cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR
        );
        grad.addColorStop(0, 'rgba(245, 166, 35, 0.9)');
        grad.addColorStop(0.5, 'rgba(0, 212, 255, 0.6)');
        grad.addColorStop(1, 'rgba(0, 212, 255, 0.2)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Spoke cross brace
        const angle2 = angle + Math.PI / spokeCount;
        const r1 = innerR * 0.5;
        const r2 = innerR * 0.8;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
        ctx.lineTo(cx + Math.cos(angle2) * r2, cy + Math.sin(angle2) * r2);
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Hub
      const hubGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR);
      hubGrad.addColorStop(0, 'rgba(245, 166, 35, 0.9)');
      hubGrad.addColorStop(0.5, 'rgba(0, 150, 180, 0.6)');
      hubGrad.addColorStop(1, 'rgba(0, 212, 255, 0.1)');
      ctx.beginPath();
      ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
      ctx.fillStyle = hubGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Data arc overlays
      const dataArcs = [
        { r: outerR * 0.72, start: 0.1, end: 0.7, color: 'rgba(10, 240, 200, 0.4)' },
        { r: outerR * 0.82, start: 0.4, end: 1.2, color: 'rgba(0, 212, 255, 0.25)' },
        { r: outerR * 0.92, start: 1.5, end: 2.3, color: 'rgba(245, 166, 35, 0.3)' },
      ];
      dataArcs.forEach(({ r, start, end, color }) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, start + t * 0.4, end + t * 0.4);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      // Scanning line
      const scanAngle = t * 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(scanAngle) * outerR, cy + Math.sin(scanAngle) * outerR);
      const scanGrad = ctx.createLinearGradient(
        cx, cy,
        cx + Math.cos(scanAngle) * outerR, cy + Math.sin(scanAngle) * outerR
      );
      scanGrad.addColorStop(0, 'rgba(0, 212, 255, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)');
      scanGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Floating data points
      const dataPoints = [
        { angle: 0.5, dist: outerR * 1.15, label: 'GRIP: 94%' },
        { angle: 2.2, dist: outerR * 1.18, label: 'TEMP: 67°C' },
        { angle: 4.0, dist: outerR * 1.16, label: 'WEAR: 2.1mm' },
      ];
      ctx.font = '500 11px JetBrains Mono, monospace';
      dataPoints.forEach(({ angle, dist, label }) => {
        const px = cx + Math.cos(angle + t * 0.1) * dist;
        const py = cy + Math.sin(angle + t * 0.1) * dist;
        ctx.fillStyle = 'rgba(0, 212, 255, 0.7)';
        ctx.fillText(label, px - 28, py);
        // connector line
        const px2 = cx + Math.cos(angle + t * 0.1) * outerR;
        const py2 = cy + Math.sin(angle + t * 0.1) * outerR;
        ctx.beginPath();
        ctx.moveTo(px2, py2);
        ctx.lineTo(px - 10, py - 3);
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      t += 0.008;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrame);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
