/* Each folder represents a component.
Brand is going to be a function component, so rafce can be used here too.
Component file names and const names usually start with an uppercase letter.
Folder names for component should be lowercase.
Each component needs its own CSS file, lowercase name */

import React from 'react'
import './brand.css' // Use CSS file for this Brand component
import { google, slack, atlassian, dropbox, shopify } from './imports' // Format not needed here

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
        <div>
            <img src={google} alt='google' />
        </div>
        <div>
            <img src={slack} alt='slack' />
        </div>
        <div>
            <img src={atlassian} alt='atlassian' />
        </div>
        <div>
            <img src={dropbox} alt='dropbox' />
        </div>
        <div>
            <img src={shopify} alt='shopify' />
        </div>
    </div>
  )
}

export default Brand