import React from 'react';
import { styled } from 'styled-components';

function Background({ children }) {
    return <StBg>{children}</StBg>;
}

export default Background;

export const StBg = styled.div`
    min-height: 100vh;
    background: rgb(180, 192, 255);
    background: linear-gradient(180deg, rgba(180, 192, 255, 1) 5%, rgba(62, 255, 245, 0.5) 100%);
`;
