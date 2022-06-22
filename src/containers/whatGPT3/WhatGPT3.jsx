/* Components are concerned with how things look.
Containers are concerned with how things work.

Containers are parent elements that contain components.

Containers are responsible for data fetching and passing data down to its child components to render.
Components are responsible for rendering the data from the container.
Services only interact with containers (which handle UI interactions), and never with components.
*/

import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components/feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
        <div className='gpt3__whatgpt3-features'>
          <Feature />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
    </div>
  )
}

export default WhatGPT3