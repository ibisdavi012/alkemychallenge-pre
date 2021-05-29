import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

export default class TeamMemberList extends React.Component {
  /*
Intelligence
Strength
Speed
Durability
Power
Combat
  */
  render(){
    
    const TeamMemberItem = styled.div`
    color:red; 
    display:flex;
    flex-direction:column;
    border:1px solid yellow;`;


    const HeroName = styled.h2`justify-self:center;`;
    const HeroeImage = styled.img`width:100px; height:100px; border:1px solid red;`;
    const PowerStats = styled.div``;
    const PowerStat = styled.div``;

    return(
       
          <Row>
            <Col>
            <TeamMemberItem>
              <h2>Nombre</h2>
                <HeroeImage />
                <PowerStats>
                  <PowerStat></PowerStat>
                </PowerStats>
                <div>Actions</div>
            </TeamMemberItem>
            </Col>
          </Row>
 
    )
}

}