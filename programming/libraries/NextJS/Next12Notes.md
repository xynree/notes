# Next.JS 12 notes:

New Features:

>>> Rust Compiler

    - built on SWC
    - faster builds
    - good for large codebases
    - fast refresh shown in console for both client/server
    - webpack improved- optimized fast refresh
    - 17x faster than babel
        - ported babel transforms to rust to do this
    - opt-in to using rust for minification
        - module.exports = { swcMinify: true }

>>> Middleware

    - use code over configuration
        - run code before a request is compleed
        - based on incoming request, modify response
        - can be used for:
            - authentication
            - bot protection
            - redirects/rewrites
            - ss analytics
            - logging
    - supports standard web api's like fetch
    - to use: ``  pages/_middleware.js ``
        - export function middleware(req,ev){
        return new Response('hello,world')}
        - demo on next.js conf

>>> React 18

    - use experimental flag: npm install react@alpha react-dom@alpha to use with next12
    
    - SS Streaming
        - server-render pages using http streaming* (look this up later)
            - SSR uses same runtime as middleware
            - to enable: module.exports = { experimental: {concurrentFeatures: true }}

    - React Server Components

`` module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  }
} ``

    - data fetching works at the component level as JSX, so getServerSideProps and getStaticProps are not needed.

>>> ES Modules Support and URL Import

    - new import convention is default: 
        - import { addTwo } from './addTwo.js';

>>> URL Imports
    
    - experimental support for importing ES Modules through URL's
    - Next.JS processes remote HTTP resources just like local dependencies
        - next generates a next.lock to track remote resources but imports are cached locally
    - to opt in add URL's inside next.config.js:
        module.exports = {
        experimental: {
        urlImports: ['urlhere.com']}}
    - then import directly from URL: 
        - import confetti from '.....'
    - check demo for more

>>> Bot Aware ISR Fallback

    - In Next.js 12, web crawlers & search will automatically server-render ISR pages with fallback:true will sill serving fallback data, so crawlers don't index loading states.

>>> Smaller Images with AVIG

    - image optimization API supports AVIG, enabling 20% smaller images than webP
    - turn on in module.exports.images.formats

>>> Output File Tracing

    - * look this up * next.js 8 `target` option
    - switched to @vercel/nft - helps with deployment
    - new updates made it so Next.js will need no depencies installed to run an application

>>> Other

    - ESLint supports single file linting with `--file`
    - Next.js 12 supports a custom tsconfig.json path
    - Fast Refresh uses a websocket connection instead of EventSource

>>> Breaking Changes
    
    - no more webpack4
    - next/image uses a span as wrapping element instead of div
    - minimum node version bumped up to 12.22.0, for native ES module support
