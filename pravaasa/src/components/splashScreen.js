import styles from './SplashScreen.module.css';
import splashicon from "next/image"
const SplashScreen = () => {
    return (
        <div className={styles.splashScreen}>
            <img src='/images/splashicon.jpg' alt='splashscreenlogo' layout='responsive' height={300} width={300}/>
        </div>
    );
};

export default SplashScreen;
