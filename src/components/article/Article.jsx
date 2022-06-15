/* Each folder represents a component.
Article is going to be a function component, so rafce can be used here too.
Component file names and const names usually start with an uppercase letter.
Folder names for component should be lowercase.
Each component needs its own CSS file, lowercase name */

import React from 'react'
import './article.css' // use CSS file for this Article component

const Article = () => {
  return (
    <div>
        Article
    </div>
  )
}

export default Article