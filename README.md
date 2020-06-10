# iancordle.com
*Source code and GitHub Pages repository for all static content.*

### Tech Stack

* TypeScript
* Next.js / React
* Chakra UI
* MDX

### Goals / Purpose

The main goal of this project was to be able to seamlessly publish static content to my GitHub pages site with as little
manual process as possible. The blog posts under /synth/blog, for instance, are written in Markdown, but can include React 
components if desired, and automatically generate links on the main page. If I want to add a new blog post, all I have to
do is create a new markdown file and the rest is done for me.

I also wanted as much type safety as possible and for everything to be as friendly as possible with WebStorm. The project
is very TypeScript friendly, I added my own typings for mdx, as they are not published by the creator.
