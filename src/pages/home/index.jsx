import styles from './home.module.css';
import React from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import SuperHerosAPI from '../../js/api/super-heroes';
import HeroTeamMembers from '../../components/TeamMemberList';
import Container from 'react-bootstrap/Container';

export default class Home extends React.Component {
    componentWillMount() {
        SuperHerosAPI.getCharacterById(16).then(ps => console.log('Character',ps));
        SuperHerosAPI.getPowerStatsById(16).then(ps => console.log('PowerStat',ps));
    }
    render(){
        const PageTitle = styled.h2``;
        return (
            <Page requireAuthentication={false} redirectTo="/login">
                <Container fluid="sm">
                    <PageTitle>Home</PageTitle>
                    <HeroTeamMembers />
                </Container>
            </Page>
        );
    }
}  

