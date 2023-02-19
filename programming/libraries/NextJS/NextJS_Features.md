# Next.JS

# Next.JS basic features

## Pages

- Every component in the /pages directory creates a route associated with the file name.
- Dynamic routes: pages/posts/[id].js
- Pages get pre-rendered and HTML is generated in advance
    - Loading into browser “hydrates” page to make it interactive
- Two forms of pre-rendering:
    - Static Generation: HTML genated at buld time
        - Static pages can be cached by CDN to boost performance
        - Next.JS prerenders pages using static generation by default when there is no data fetching
        - When data fetching:
            - Page content depends on data: `getStaticProps`
                
                ```jsx
                function Blog({ posts }) {
                  // Render posts...
                }
                
                // This function gets called at build time
                export async function getStaticProps() {
                  const res = await fetch('https://.../posts')
                  const posts = await res.json()
                
                  return {
                    props: {
                      posts,
                    },
                  }
                }
                
                export default Blog
                ```
                
            - Page paths depend on data: `getStaticPaths` + `getStaticProps`
                
                ```jsx
                function Post({ post }) {
                  // Render post...
                }
                
                export async function getStaticPaths() {
                  // Call an external API endpoint to get posts
                  const res = await fetch('https://.../posts')
                  const posts = await res.json()
                
                  // Get the paths we want to pre-render based on posts
                  const paths = posts.map((post) => ({
                    params: { id: post.id },
                  }))
                
                  // We'll pre-render only these paths at build time.
                  // { fallback: false } means other routes should 404.
                  return { paths, fallback: false }
                }
                
                export async function getStaticProps({ params }) {
                  // params contains the post `id`.
                  // If the route is like /posts/1, then params.id is 1
                  const res = await fetch(`https://.../posts/${params.id}`)
                  const post = await res.json()
                
                  // Pass post data to the page via props
                  return { props: { post } }
                }
                ```
                
        - ISR: revalidate prop on getStaticProps will update pages after building site. Provide revalidate key to `getStaticProps` function.
    
    - Server-Side Rendering: HTML generated on each request instead of on build time.
        
        ```jsx
        // This gets called on every request
        export async function getServerSideProps() {
          // Fetch data from external API
          const res = await fetch(`https://.../data`)
          const data = await res.json()
        
          // Pass data to the page via props
          return { props: { data } }
        }
        
        export default Page
        ```
        
    - Client- side data fetching: When page doesn’t require SEO, when doesn’t need to be prerrendered or when content updaters frequently
        - UseEffect with React
        - useSWR - hook for caching, revalidation, focus tracking, etc.
        
        ```jsx
        import useSWR from 'swr'
        
        const fetcher = (...args) => fetch(...args).then((res) => res.json())
        
        function Profile() {
          const { data, error } = useSWR('/api/profile-data', fetcher)
        
          if (error) return <div>Failed to load</div>
          if (!data) return <div>Loading...</div>
        
          return (
            <div>
              <h1>{data.name}</h1>
              <p>{data.bio}</p>
            </div>
          )
        }
        ```
        

## Built in CSS Support

- Global stylesheets can be added to `pages/_app.js`
- `_app.js` can be used to set a custom Layout to wrap all pages.

```jsx
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

// pages/_app.js

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

- Per page layouts to maintain component tree

## Image Optimization

- `next/image`

```jsx
import Image from 'next/image'
import profilePic from '../public/me.png'
```

```html
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
```

- For local images, `import` image files and provide to src. Width/Height auto generated
- For remote images, use url. Must provide width/height. For remote images, must add domain to image/config.
    - `priority` attribute prioritizes images for loading
    - Avoid layout shift by always sizing your images - allows browsers to reserve precisely enough space.
    - **When using `layout='fill'`, the parent element must have `position: relative`**
    - **When using `layout='responsive'`, the parent element must have `display: block`**

## Font Optimization

- Supports google fonts + Typekit
    - Add font to custom `Document*`
    
    ```html
    import Document, { Html, Head, Main, NextScript } from 'next/document'
    
    class MyDocument extends Document {
      render() {
        return (
          <Html>
            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                rel="stylesheet"
              />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }
    
    export default MyDocument
    ```
    
    - Custom Document used to update <html> and <body> tags. Used for code that is common to all pages - use `next/head` for any code that changes such as changing `<title>` tags.
    - Rendered on the server

## Static File Serving

- Static files served under `public` and can be referenced from base url `/`

## Loading Env Variables

- built in support for .env.local —> process.env
- To expose to browser: prepend with `NEXT_PUBLIC_`

# Routing

- Dynamic Routes
- `Link` component
    
    ```jsx
        <Link href="/blog/hello-world">
              <a>Blog Post</a>
            </Link>
    ```