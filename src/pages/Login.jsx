import { StBg } from 'components/Background';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import React from 'react';

function Login() {
    return (
        <StBg>
            <Header />
            <Layout>Login</Layout>
            <Footer />
        </StBg>
    );
}

export default Login;
