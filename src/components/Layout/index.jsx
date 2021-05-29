import styles from './Layout.module.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';

class Layout extends React.Component {
    render() {
        return (
            <main className={styles.screenCenteredContainer}>
                <Container>{this.props.children}</Container>
            </main>
        );
    }
}

export default Layout;