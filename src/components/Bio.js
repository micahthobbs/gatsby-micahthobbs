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
          marginBottom: rhythm(1),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Micah Hobbs`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        /> */}
        <p>
          Welcome to my site! Living and working Canberra. See some of my <a href="https://github.com/micahthobbs" target='_blank'>projects</a>, or get in <a href='mailto: micahthobbs@gmail.com'>contact</a>{' '}
          <a href="https://twitter.com/micahthobbs"></a>
        </p>
      </div>
    )
  }
}

export default Bio
