
import styles from "./Landscape.module.css";

export default function Landscape() {
  return (
    <div className={styles.landscape} aria-hidden="true">
      <picture className={styles.picture}>
        <source
          media="(max-width: 768px)"
          srcSet="/images/wayra-landscape-mobile.jpg"
        />

        <img
          src="/images/wayra-landscape-desktop.jpg"
          alt=""
          className={styles.image}
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
