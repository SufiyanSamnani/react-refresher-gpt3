// rafce - rafce is an acronym for "React Functional Component"

import React from 'react'

/* you can import all components into main React App
import Article from './components/article/Article'
import Brand from './components/brand/Brand' ....
or create an index.js file in the components folder and import all components into it.

Or, you can list all exports in ./compoenents/index.js and import them as:
import { Article, Brand, CTA } from './components'

This approach makes it really easy to see where a component or a container is coming from
*/

// index.js doesn't need to be specified in "from", the folder name presumes & looks for index.js file
import { Blog, Footer, Possibility, Features, Header, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'
import './app.css' // CSS file containing the main styles for the app

const App = () => { // this is stating that App is a constant function and instead of declaring the function separately, we can use arrow function to declare it
  return ( // we're returning a JSX expression directly instead of doing it in a separate function, which gets rendered at root div
    <div className="App">
      <div className="gradient__bg">
        <Navbar /> {/* Cmd+click to go to the component file */}
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App