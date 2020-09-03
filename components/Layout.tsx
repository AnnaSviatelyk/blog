import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Header = styled.header`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    background-color: #000;

    nav {
        margin-left: 40px;
    }

    a {
        text-decoration: none;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 100;
        color: #fff;
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
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
            </nav>
        </Header>
        {children}
    </div>
);

export default Layout;
