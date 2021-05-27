import React from 'react';
import Layout from '../Layout';
import LoginForm from '../LoginForm'

export default class PageContent extends React.Component 
{
    render(){
        const loggedIn = true;

        return(
            <Layout>
                {loggedIn ? this.props.children : <LoginForm />}
            </Layout>
        )
    }
}