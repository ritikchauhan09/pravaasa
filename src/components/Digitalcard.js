import React from 'react';
import styles from './DigitalCard.module.css'; // Import the CSS module
import Image from "next/image"

const DigitalCard = () => {
  return (
    <div className={`flex items-center justify-center p-10 ${styles.perspective}`}>
      <div className={styles.cardContainer}>
        {/* Front Side */}
        <div className={`${styles.card} ${styles.front}`}>
          <div>
            
            <Image src="/images/pravaasa.png" alt='pravaasa logo' width={150} height={50}/>
            
            <div className='mt-4'>
            <h2 className="text-2xl font-bold">Pravaasa Bliss</h2>
            </div>
           
          </div>
          
        </div>

        {/* Back Side */}
        <div className={`${styles.card} ${styles.back}`}>
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2">Name: Pravaasa Bliss</p>
            <p className="mt-2">Phone: <a href="tel:+918988336969" className="text-blue-600 hover:underline">+91 8988336969</a></p>
            <p className="mt-2">Email: <a href="mailto:Chauhanmukil@gmail.com" className="text-blue-600 hover:underline">Chauhanmukil@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
