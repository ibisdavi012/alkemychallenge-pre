import React from 'react';
import Layout from '../Layout';


export default class Page extends React.Component 
{
    render(){
        const loggedIn = false;
        const RedirectTo = this.props.redirectTo;
        const PageContent = this.props.children;
        const requireAuthentication = this.props.requireAuthentication;
        return(
            <Layout>
                {!requireAuthentication || loggedIn ? 
                    <PageContent />
                : 
                    RedirectTo != null ? 
                        <RedirectTo /> 
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