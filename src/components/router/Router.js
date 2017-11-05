import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    this.setState({route})
    //eslint-disable-next-line
    history.pushState(null, '', route)
  }

  // expose types want available to child component
  // why static?
  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  // method to get values from component
  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
