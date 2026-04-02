import Image from 'next/image';
import styles from './TyreVisual.module.css';

export default function TyreVisual() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/new-tyre.jpg" 
          alt="Autonomous Tyre Intelligence" 
          fill 
          style={{ objectFit: 'cover' }} 
          className={styles.animatedImage}
          priority
        />
        <div className={styles.glowOverlay} aria-hidden="true" />
        <div className={styles.scanner} aria-hidden="true" />
      </div>
    </div>
  );
}
