import React, { FC } from 'react';
import App from 'next/app';
import { wrapper } from '../redux/store';
import { Global, css } from '@emotion/core';

// const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

// export default wrapper.withRedux(WrappedApp);

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return { pageProps: pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Global
                    styles={css`
                        html,
                        body {
                            padding: 0;
                            margin: 0;

                            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
                                Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                            background-color: #fafafa;
                        }
                        * {
                            box-sizing: border-box;
                        }
                        ul {
                            margin: 0;
                        }
                        a {
                            font-size: 18px;
                            text-decoration: none;
                            cursor: pointer;
                        }
                        p {
                            line-height: 1.5;
                            font-size: 16px;
                            font-weight: 200;
                        }
                    `}
                />
                <Component {...pageProps} />
            </>
        );
    }
}

export default wrapper.withRedux(MyApp);
