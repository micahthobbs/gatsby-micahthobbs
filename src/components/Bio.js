import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Micah Hobbs`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Writings by <strong>Micah Hobbs</strong> who lives and works Canberra{' '}
          <a href="https://twitter.com/micahthobbs">
            Follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
