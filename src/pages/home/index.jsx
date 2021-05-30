import styles from './home.module.css';
import React from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import SuperHerosAPI from '../../js/api/super-heroes';
import HeroTeamMemberList from '../../components/HeroTeamMemberList';
import Container from 'react-bootstrap/Container';

export default class Home extends React.Component {

    render(){
        
        return (
            <Page requireAuthentication={false} redirectTo="/login">
                <Container>
                    <HeroTeamMemberList />
                </Container>
            </Page>
        );
    }
}  

