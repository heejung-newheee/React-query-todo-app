import React from 'react';
import { styled } from 'styled-components';

function Layout({ children }) {
    return <StContainer>{children}</StContainer>;
}

export default Layout;

const StContainer = styled.div`
    max-width: 1200px;
    padding: 40px 10px;
    margin: 0 auto;
`;
