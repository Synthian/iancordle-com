import React from 'react';
import { AppProps } from 'next/app';
import '../styles/styles.css';
import theme from '../styles/theme';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { MdxComponents } from '../components/MdxComponents';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MdxComponents}>
        <CSSReset />
        <ColorModeProvider value={'dark'}>
          <Component {...pageProps} />
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
