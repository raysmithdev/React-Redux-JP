import React from 'react'
import { Icon } from 'semantic-ui-react'

const BlogListView = ({ blogs, onDelete }) => (
  <div>
    <ul>
      {blogs.map((b, index) =>
        <li key={b.id}>
          <h1>{b.title}</h1>
          <p>{b.content}</p>
          <Icon
            onClick={ () => onDelete(index) }
            circular
            inverted name='trash'
          />
        </li>
      )}
    </ul>
  </div>
)

export default BlogListView
