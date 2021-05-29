import styles from './home.module.css';
import React from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import {GetCharacterById} from '../../js/api/super-hero';

export default class Home extends React.Component {
       
    render(){
        const PageTitle = styled.h2``;
        console.log(GetCharacterById(16));
        return (
            <Page requireAuthentication={false} redirectTo="/login">
                <PageTitle>Home</PageTitle>
                <p className={styles.blueParagraph}>Paragraph from Home.js</p>
            </Page>
        );
    }
}  

