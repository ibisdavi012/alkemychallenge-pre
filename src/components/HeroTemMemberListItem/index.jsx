import React, { Component } from 'react'
import {HeroItem} from './styled/hero-item';
import {HeroName} from './styled/hero-name';
import {HeroImage} from './styled/hero-image';
import {PowerstatsHeader} from './styled/powerstats-header';
import {Powerstats} from './styled/powerstats';
import {UserActions} from './styled/user-actions';
import SuperHeroesAPI from '../../js/api/super-heroes';

export default class HeroTemMemberListItem extends Component {

  constructor(...props)
  {
    super(...props);
    this.state = {name:'Cargando...',image_url:''}

  }

  componentDidMount()
  {
    SuperHeroesAPI.getCharacterById(this.props.id).then(character => {
      this.setState({...this.state,name:character.name,image_url: character.image.url});
    })
  }

  render() {

    const powerStatLabelStyle = {
      color: 'orange',
      display: 'inline-block',
      width: '95px',
    }

    return (
      <HeroItem>
                <HeroName>{this.state.name}</HeroName>
                <HeroImage src={this.state.image_url} alt="" />
                <PowerstatsHeader>Powerstats:</PowerstatsHeader>
                <Powerstats>
                    <div><span style={powerStatLabelStyle}>Intelligence:</span><span className="poweStatValue">10</span></div>
                    <div><span style={powerStatLabelStyle}>Strength:</span><span className="poweStatValue">8</span></div>
                    <div><span style={powerStatLabelStyle}>Speed:</span><span className="poweStatValue">13</span></div>
                    <div><span style={powerStatLabelStyle}>Durability:</span><span className="poweStatValue">5</span></div>
                    <div><span style={powerStatLabelStyle}>Power:</span><span className="poweStatValue">5</span></div>
                    <div><span style={powerStatLabelStyle}>Combat:</span><span className="poweStatValue">20</span></div>
                </Powerstats>
                <UserActions>
                    <span className="user-action btn btn-primary">Detalles</span><span className="user-action btn btn-danger">Eliminar</span>
                </UserActions>
      </HeroItem>
    )
  }
}
