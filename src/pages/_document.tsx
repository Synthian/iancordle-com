import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
          />
          <link rel='icon' type='image/png' href='/ic-icon-16.png' sizes='16x16' />
          <link rel='icon' type='image/png' href='/ic-icon-32.png' sizes='32x32' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
