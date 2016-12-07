const blog = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        id: action.id,
        title: action.title,
        content: action.content,
        createdAt: Date.now()
      }
    default:
      return state
  }
}


const blogs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...state,
        blog(undefined, action)
      ]
    case 'DELETE_BLOG':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default blogs
