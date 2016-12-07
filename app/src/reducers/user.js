const initialState = {
  username: 'ray',
  age: 26,
  location: 'Space'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return ''
    default:
      return state
  }
}

export default user
