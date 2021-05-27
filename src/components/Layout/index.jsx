import styles from './Layout.module.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;