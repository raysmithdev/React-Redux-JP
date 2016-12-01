import { connect } from 'react-redux'
import FormView from '../components/FormView'
import { addBlog } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (title, content) => {
      return dispatch(addBlog(title, content))
    }
  }
}

export default connect(null, mapDispatchToProps)(FormView)
