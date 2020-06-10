import React from 'react';
import { DefaultTheme, theme as defaultTheme } from '@chakra-ui/core';
import { mdiGithub, mdiLinkedin, mdiTrophyVariant, mdiTwitch, mdiYoutube } from '@mdi/js';

const fontFamily = `'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif`;

const customIcons: any = {
  github: {
    path: <path fill='currentColor' d={mdiGithub} />
  },
  linkedin: {
    path: <path fill='currentColor' d={mdiLinkedin} />
  },
  twitch: {
    path: <path fill='currentColor' d={mdiTwitch} />
  },
  youtube: {
    path: <path fill='currentColor' d={mdiYoutube} />
  },
  trophy: {
    path: <path fill='currentColor' d={mdiTrophyVariant} />
  }
};

const theme: DefaultTheme = {
  ...defaultTheme,
  fonts: {
    body: fontFamily,
    heading: fontFamily,
    mono: 'Menlo, monospace'
  },
  icons: {
    ...defaultTheme.icons,
    ...customIcons
  }
};

export const PALETTE = {
  primary: theme.colors.orange['300'],
  bg: theme.colors.gray['900'],
  altBg: '#241616',
  text: theme.colors.gray['50'],
  secondaryText: theme.colors.gray['300'],
  link: theme.colors.pink['300']
};

export const SIZES = {
  pageMaxWidth: '3xl',
  pagePadding: 4
};

export default theme;
