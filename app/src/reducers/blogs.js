const blogs = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return [
        ...action.blogs
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
