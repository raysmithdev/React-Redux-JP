import { connect } from 'react-redux'
import BlogListView from '../components/BlogListView'
import { deleteBlog } from '../actions'

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (index) => dispatch(deleteBlog(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListView)
