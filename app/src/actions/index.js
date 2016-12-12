import fetch from 'isomorphic-fetch'

const receiveData = (blogs) => {
  return {
    type: 'RECEIVE_DATA',
    blogs
  }
}

export const addBlog = (title, content) =>  {
  return dispatch => {
    return fetch('http://localhost:8080/create-blog', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title,
                content
              })
            })
            .then(response => response.json())
            .then(blogs => dispatch(receiveData(blogs)) )
  }
}

export const deleteBlog = (index) => {
  return {
    type: 'DELETE_BLOG',
    index
  }
}
