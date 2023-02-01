---
layout: '../Layout.astro'
---

# Example of a paginated route using SSR in Astro

```astro
---
// src/posts/[...page].astro

import { Paginate, Pagination, Breadcrumb } from 'astro-headless-ui';

// Get page number from url
const { page: pageNumber } = Astro.params

// Get array of data to paginate
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
const json = await posts.json()
---

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{pageNumber?`Page ${pageNumber}`:'Pagination Example'}</title>
    </head>
    <body>
        <nav class="breadcrumb">
            <Breadcrumb />
        </nav>
        <Paginate data={json} size="3" page={pageNumber}>
        
            <!-- Create a render template for each page -->
            { page => <>

                <!-- Map over array of data for page -->
                { page.data.map(post => (
                    <article>
                        <h2>{post.title}</h2>
                        <p><strong>{post.id}</strong> - {post.body}</p>
                    </article>
                ))}

                <!-- Create page link navigation for all pages -->
                <nav class="pagination">
                    <Pagination index url="/posts" total={page.last} current={page.current} />
                </nav>
            </>}

            <!-- Render an error page if page number does not exist -->
            <main slot="error">
                <h1>This page does not exist!</h1>
                <a href="/posts">Back</a>
            </main>
        </Paginate>
    </body>
</html>
```

## Example of a `page` argument

```js
{
  // Items passed to page from main array
  data: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    },
    // 2 more items...
  ],
  // Number of total items in array
  total: 100,
  // Number of items passed to each page
  size: '3',
  // Number of current page
  current: 1,
  // Number of last page in array
  last: 34,
  // Index of first item on page
  start: 0,
  // Index of last item on page
  end: 2
}
```