import styles from './Footer.module.css';
import CornerLeft from './assets/corner_left.svg'; 
import CornerRight from './assets/corner_right.svg';
import React from 'react';

class Footer extends React.Component {
    render(){        
        return (
            <footer className={`container ${styles.footer}`}>
                    <img className={styles.cornerImage} src={CornerLeft} alt="" />
                    
                    <div className={styles.flareContainer}>
                        <img alt="" className={styles.flare}/>
                    </div>

                    <img className={styles.cornerImage} src={CornerRight} alt=""/>
            </footer>
        )
    }
}


export default Footer
