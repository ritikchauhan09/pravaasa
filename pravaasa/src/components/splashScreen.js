import Image from 'next/image';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
    return (
        <div className={styles.splashScreen}>
            <Image
                src="/images/splashicon.jpg"
                alt="Splash Screen Logo"
                width={400}
                height={400}
                priority
                
            />
        </div>
    );
};

export default SplashScreen;
