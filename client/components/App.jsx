import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../sass/styles.scss'

import Login from './Login'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'

const App = ({auth}) => (<Router>
<section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">Dyna-Monitor</a>
              <span className="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Login
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>


      {!auth.isAuthenticated && <Route exact path="/" component={Login}/>}


      <div className=''>
        <Route path="/login" component={Login}/>
        <Route path="/meeting" component={Meeting}/>
        <Route path="/history" component={History}/>
      </div>
    </section>
  </Router>
  )

  const mapStateToProps = ({auth}) => {return {auth}}

  export default connect(mapStateToProps)(App)
