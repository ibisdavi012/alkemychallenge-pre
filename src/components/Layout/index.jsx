import styles from './Layout.module.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
    render() {
        return (
            <main className={styles.screenCenteredContainer}>
                {this.props.children}
            </main>
        );
    }
}

export default Layout;