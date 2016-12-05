import React from 'react'

const BlogListView = ({ blogs }) => (
  <div>
    <ul>
      {blogs.map(b =>
        <li key={b.id}>
          <h1>{b.title}</h1>
          <p>{b.content}</p>
        </li>
      )}
    </ul>
  </div>
)

export default BlogListView
