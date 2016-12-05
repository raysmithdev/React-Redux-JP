import { connect } from 'react-redux'
import BlogListView from '../components/BlogListView'

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(BlogListView)
