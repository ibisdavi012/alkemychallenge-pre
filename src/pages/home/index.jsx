import styles from './home.module.css';
import React from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';

export default class Home extends React.Component {
       
    render(){
        const PageTitle = styled.h2``;

        return (
            <Page requireAuthentication={true} redirectTo="/login">
                <PageTitle>Home</PageTitle>
                <p className={styles.blueParagraph}>Paragraph from Home.js</p>
            </Page>
        );
    }
}  

