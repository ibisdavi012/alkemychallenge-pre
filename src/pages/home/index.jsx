import styles from './home.module.css';
import React from 'react';
import PageContent from '../../components/PageContent';

export default class Home extends React.Component {
    render(){
        return (
            <PageContent>
                <h2>Home</h2>
                <p className={styles.blueParagraph}>Paragraph from Home.js</p>
            </PageContent>
        );
    }
}  

