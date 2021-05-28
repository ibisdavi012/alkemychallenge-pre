import styles from './Footer.module.css';
import CornerLeft from './assets/corner_left.svg'; 
import CornerRight from './assets/corner_right.svg';
import Flare from './assets/flare.svg';
import React from 'react';

class Footer extends React.Component {
    render(){        
        return (
            <footer className={styles.footer}>
                    <img className={styles.cornerImage} src={CornerLeft} alt="" />
                    
                    <div className={styles.flareContainer}>
                        <img src={Flare} alt="" className={styles.flare}/>
                    </div>

                    <img className={styles.cornerImage} src={CornerRight} alt=""/>
            </footer>
        )
    }
}


export default Footer
