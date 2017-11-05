import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Link extends Component {

  // to use Context (same as exposing childContextTypes)
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  handleClick = (event) => {
    event.preventDefault()
    // replace history.pushState() with:
    this.context.linkHandler(this.props.to)
  }
  render () {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    // children are in Footer.js
    return <a href='#' className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}
