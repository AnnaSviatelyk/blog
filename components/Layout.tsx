import React, { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Modal from './Modal/Modal';
import ErrorMessage from './ErrorMessage';
import * as actions from '../redux/actions/index';
import { RootState } from '../redux/reducers/rootReducer';

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
    height: 60px;

    display: flex;
    align-items: center;
    background-color: #000;

    position: relative;

    nav {
        position: absolute;

        right: 120px;
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

const Logo = styled.div`
    position: absolute;
    left: 120px;
    font-size: 24px;
    color: #fff;

    cursor: pointer;
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

const Layout = ({ children, title = 'This is the default title' }: Props) => {
    const dispatch = useDispatch();

    const isError = useSelector((state: RootState) => {
        return state.posts.error;
    });

    const isModalShown = useSelector((state: RootState) => {
        return state.posts.isModalShown;
    });

    const backdropClickHandler = () => {
        dispatch(actions.backDropClick());
    };

    const message = isError ? <ErrorMessage /> : <p>Your post was successfully published!</p>;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header>
                <Link href="/">
                    <Logo>MyBlog</Logo>
                </Link>
                <Nav>
                    <p>Have something to say?</p>
                    <Link href="/posts/new">
                        <a>Create New Post</a>
                    </Link>
                </Nav>
            </Header>
            <ContentContainer>
                <Modal show={isModalShown} backDropClick={backdropClickHandler}>
                    {message}
                </Modal>
                {children}
            </ContentContainer>
        </div>
    );
};

export default Layout;
