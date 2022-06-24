/* Components are concerned with how things look.
Containers are concerned with how things work.

Containers are parent elements that contain components.

Containers are responsible for data fetching and passing data down to its child components to render.
Components are responsible for rendering the data from the container.
Services only interact with containers (which handle UI interactions), and never with components.
*/

import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components' // Link to parent folder because braces are looking for component within it

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
        <div className='gpt3__whatgpt3-features'>
          <Feature
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />  {/* title & text for this specific feature are passed in as props for Feature.jsx*/}
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1> {/* Gradient text comes from app.css */}
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature 
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature 
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
    </div>
  )
}

export default WhatGPT3