import styles from './Footer.module.css';
import CornerLeft from './assets/corner_left.svg'; 
import CornerRight from './assets/corner_right.svg';
import Flare from './assets/flare.svg';
import React from 'react';

class Footer extends React.Component {
    render(){        
        return (
            <header className={`container ${styles.header}`}>
                    <img src={CornerLeft} alt="" />
                    
                    <div className={styles.flareContainer}>
                        <img src={Flare} alt="" className={styles.flare}/>
                    </div>

                    <img src={CornerRight} alt=""/>
            </header>
        )
    }
}


export default Footer
