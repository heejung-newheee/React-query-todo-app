import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StBg } from '../components/Background';

function Detail() {
    return (
        <>
            <StBg>
                <Header />
                <Layout>detail</Layout>
                <Footer />
            </StBg>
        </>
    );
}

export default Detail;
