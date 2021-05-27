import styles from './home.module.css';
import React from 'react';
import PageContent from '../../components/PageContent';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';

export default class Home extends React.Component {
       
    render(){
        const PageTitle = styled.h2``;

        return (
            <PageContent requireAuthentication={true} redirectTo={LoginForm}>
                <PageTitle>Home</PageTitle>
                <p className={styles.blueParagraph}>Paragraph from Home.js</p>
            </PageContent>
        );
    }
}  

