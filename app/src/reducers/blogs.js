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
    case 'DELETE_ITEM':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

export default blogs
