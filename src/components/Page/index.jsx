import React from 'react';
import Layout from '../Layout';
import {Redirect} from 'react-router-dom';

export default class Page extends React.Component 
{
    render(){
        const loggedIn = localStorage.getItem('logged') !== null;
        const RedirectTo = this.props.redirectTo;
        const requireAuthentication = this.props.requireAuthentication;
        return(
            <Layout>
                {!requireAuthentication || loggedIn ? 
                    this.props.children
                : 
                    RedirectTo ? 
                        <Redirect to={RedirectTo} />
                    : 
                        <h1>Acceso Denegado</h1>
                }
            </Layout>
        )
    }
}

Page.defaultProps = {
    requireAuthentication: false,
    redirectTo: null
};