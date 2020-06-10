import React from 'react';

export interface FrontMatterBase {
  title: string;
}

export interface SynthBlogFrontMatter extends FrontMatterBase {
  date: string;
  author: string;
  blurb: string;
  __resourcePath: string;
}

export type FrontMatter = FrontMatterBase | SynthBlogFrontMatter;

export type MdxTemplate = (frontMatter: FrontMatter) => React.FC;
