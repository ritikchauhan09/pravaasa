import styles from './splashScreen.module.css';
import Image from "next/image"
const SplashScreen = () => {
    return (
        <div className={styles.splashScreen}>
            <Image
        src="/images/splashicon.jpg" // Ensure the image is in the public folder
        alt="Splash Screen Logo"
        layout="intrinsic" // Dynamically adjusts the size while preserving aspect ratio
        height={300}
        width={300}
        className="rounded-full object-cover"
        priority // Preloads for faster display
      />
        </div>
    );
};

export default SplashScreen;
