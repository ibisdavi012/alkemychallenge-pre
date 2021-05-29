import styles from './home.module.css';
import React from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import SuperHerosAPI from '../../js/api/super-heroes';

export default class Home extends React.Component {
    componentWillMount() {
        SuperHerosAPI.getCharacterById(16).then(ps => console.log('Character',ps));
        SuperHerosAPI.getPowerStatsById(16).then(ps => console.log('PowerStat',ps));
    }
    render(){
        const PageTitle = styled.h2``;
        return (
            <Page requireAuthentication={false} redirectTo="/login">
                <PageTitle>Home</PageTitle>
                <p className={styles.blueParagraph}>Paragraph from Home.js</p>
            </Page>
        );
    }
}  

