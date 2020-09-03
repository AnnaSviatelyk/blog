import React, { FC } from 'react';
import App from 'next/app';
import { wrapper } from '../redux/store';

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
        return <Component {...pageProps} />;
    }
}

export default wrapper.withRedux(MyApp);
