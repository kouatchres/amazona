/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import './layout/index.css';
import Page from './Page';
import { useApollo } from './lib/apolloClient';
import theme from './theme';

function MyApp({ Component, pageProps }: AppProps) {
  const responsiveTheme = responsiveFontSizes(theme);
  const apolloClient = useApollo(pageProps);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={responsiveTheme}>
      <ThemeProvider theme={responsiveTheme}>
        <ApolloProvider client={apolloClient}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
