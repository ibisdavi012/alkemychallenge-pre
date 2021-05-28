import styles from './Header.module.css';
import CornerLeft from './assets/corner_left.svg'; 
import CornerRight from './assets/corner_right.svg';
import Flare from './assets/flare.svg';
import React from 'react';

class Header extends React.Component {
    render(){        
        return (
            <header className={styles.header}>
                    <img  className={styles.cornerImage} src={CornerLeft} alt="" />
                    
                    <div className={styles.flareContainer}>
                        <img src={Flare} alt="" className={styles.flare}/>
                    </div>

                    <img  className={styles.cornerImage} src={CornerRight} alt=""/>
            </header>
        )
    }
}


export default Header
