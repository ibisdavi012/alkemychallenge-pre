import React from 'react';
import Layout from '../Layout';


export default class PageContent extends React.Component 
{
    render(){
        const loggedIn = false;
        const RedirectTo = this.props.redirectTo;
        return(
            <Layout>
                {!this.props.requireAuthentication || loggedIn ? 
                    this.props.children 
                : 
                this.props.redirectTo != null ? <RedirectTo /> : <h1>Acceso Denegado</h1>
                }
            </Layout>
        )
    }
}

PageContent.defaultProps = {
    requireAuthentication: false,
    redirectTo: null
};