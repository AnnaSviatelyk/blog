import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
    children?: ReactNode;
    title?: string;
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;
const Header = styled.header`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    background-color: #000;

    position: relative;

    nav {
        position: absolute;

        right: 40px;
    }

    a {
        margin-right: 16px;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 100;
        color: #fff;
        transition: all 0.3s;

        &:hover {
            transform: scale(0.9);
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;

    p {
        margin-right: 8px;
        color: #fff;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 100;
        opacity: 0.8;
    }
`;

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header>
            <Nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                <p>Have something to say?</p>
                <Link href="/posts/new">
                    <a>Create New Post</a>
                </Link>
            </Nav>
        </Header>
        <ContentContainer>{children}</ContentContainer>
    </div>
);

export default Layout;
