let id = 1

export const addBlog = (title, content) => {
  return {
    type: 'ADD_BLOG',
    title,
    content,
    id: id++
  }
}

export const deleteBlog = (index) => {
  return {
    type: 'DELETE_BLOG',
    index
  }
}
