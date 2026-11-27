
import { getImageProps } from "next/image";

import styles from "./Landscape.module.css";

const imageOptions = {
  alt: "",
  sizes: "100vw",
  quality: 85,
  fetchPriority: "high" as const,
};

export default function Landscape() {
  const { props: desktopImage } = getImageProps({
    ...imageOptions,
    src: "/images/wayra-landscape-desktop.jpg",
    width: 2752,
    height: 1536,
  });
  const { props: mobileImage } = getImageProps({
    ...imageOptions,
    src: "/images/wayra-landscape-mobile.jpg",
    width: 1536,
    height: 2752,
  });

  return (
    <div className={styles.landscape} aria-hidden="true">
      <picture className={styles.picture}>
        <source
          media="(max-width: 768px)"
          sizes="100vw"
          srcSet={mobileImage.srcSet}
        />
        <img {...desktopImage} alt="" className={styles.image} />
      </picture>
    </div>
  );
}
