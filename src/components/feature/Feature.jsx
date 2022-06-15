/* Each folder represents a component.
Feature is going to be a function component, so rafce can be used here too.
Component file names and const names usually start with an uppercase letter.
Folder names for component should be lowercase.
Each component needs its own CSS file, lowercase name */

import React from 'react'
import './feature.css' // use CSS file for this Feature component

const Feature = () => {
  return (
    <div>
        Feature
    </div>
  )
}

export default Feature