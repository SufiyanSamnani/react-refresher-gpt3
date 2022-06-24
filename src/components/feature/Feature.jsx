/* Each folder represents a component.
Feature is going to be a function component, so rafce can be used here too.
Component file names and const names usually start with an uppercase letter.
Folder names for component should be lowercase.
Each component needs its own CSS file, lowercase name */

import React from 'react'
import './feature.css' // use CSS file for this Feature component

const Feature = ({ title, text }) => { {/* props are passed in as an object to be used as "variables"*/}
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div /> {/* For the short line above each feature in WhatGPT3 */}
        <h1>
          {title} {/* Variable from props for what text should be displayed */}
        </h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>
          {text} {/* Variable from props for what text should be displayed */}
        </p>
      </div>
    </div>
  )
}

export default Feature