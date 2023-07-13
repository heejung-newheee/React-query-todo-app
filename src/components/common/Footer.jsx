import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <img src="/logo.svg" alt="logo" />
                Hagra Todo
            </FooterLogo>

            <FooterSpan>
                <span className="svgIcon">
                    <a href="https://github.com/heejung-newheee/React-query-todo-app" target="_blank">
                        <img src="/github.svg" alt="" />
                    </a>
                </span>
                <span className="svgIcon">
                    <a href="https://oil-binder-258.notion.site/Lv-4-d4a57f71e88c48e5ac31f89659a86622?pvs=4" target="_blank">
                        <img src="/notion.svg" alt="" />
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.figma.com/file/vVyFVl7X62q721NpV2BhzO/my-todo-list-app?type=design&node-id=0-1&mode=design&t=QlOqEYEcAB4I5uIu-0"
                        target="_blank">
                        <img src="/figma.svg" alt="" />
                    </a>
                </span>
            </FooterSpan>
            <p>내일배움캠프 React 6</p>
            <p> &copy; 2023 NBC newheee All rights reserved</p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    color: white;
    padding: 20px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
        font-size: 0.8rem;
        color: #7ab4fb;
        font-weight: 500;
        margin: 3px;
    }
`;
const FooterLogo = styled.h1`
    display: flex;
    align-items: center;
    background: linear-gradient(to right top, #879bff, rgba(62, 255, 245, 1));
    color: transparent;
    -webkit-background-clip: text;
    img {
        width: 30px;
        margin-right: 5px;
    }
`;
const FooterSpan = styled.div`
    margin: 15px 0;
    span {
        a {
            width: 30px;
            height: 30px;
            padding: 6px;
            display: inline-flex;
            border: 1px solid #7ab4fb;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            line-height: 1;
            margin: 10px;

            &::before {
                content: '';
                width: 15px;
                height: 15px;
                padding: 8px;
                position: absolute;
                top: -1.5px;
                left: -1.5px;
                border-radius: 50%;
                background: linear-gradient(to right top, #879bff, rgba(62, 255, 245, 1));
                transform: scale(0);
                transition: 0.3s ease-in-out;
            }
            img {
                filter: invert(68%) sepia(5%) saturate(6597%) hue-rotate(190deg) brightness(129%) contrast(97%);
            }
        }

        &:hover a::before {
            transform: scale(1);
        }
        &:hover img {
            -webkit-filter: brightness(0) invert(1);
            filter: brightness(0) invert(1);
        }
    }
`;
