import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.dispatch(loginUser({user_name, password}))
  }
  render() {
    const {auth} = this.props
    return (

      <div className="hero-body columns">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title">
            Dyna-Monitor
          </h1>
          <form className="form">
            {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
            <input required className="input" placeholder="Username" type="text" name="username" />
            <br />
            <br />
            <input required className="input" placeholder="Password" type="text" name="password" />
            <input className="button is-success" value="Login" type="submit" />
          </form>

        </div>
      </div>

    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
