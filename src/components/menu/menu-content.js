import React, { Component } from 'react'

import './menu-content.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="/"
            onClick={this.props.closeCallback}
            target="_blank">
            Menu item {i}
          </a>
        </div>)}

        <p className="hint">Do something...</p>
      </div>
    )
  }
}



export default MenuContent
