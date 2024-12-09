import Image from "next/image";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      <Image
        src="/images/splashicon.jpg"
        alt="Splash Screen Logo"
        width={400}
        height={400}
        priority
        className="w-48 h-48 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
      />
    </div>
  );
};

export default SplashScreen;
