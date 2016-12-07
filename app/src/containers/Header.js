import { connect } from 'react-redux'
import HeaderView from '../components/HeaderView'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(HeaderView)
