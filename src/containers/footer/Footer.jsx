/* Components are concerned with how things look.
Containers are concerned with how things work.

Containers are parent elements that contain components.

Containers are responsible for data fetching and passing data down to its child components to render.
Components are responsible for rendering the data from the container.
Services only interact with containers (which handle UI interactions), and never with components.
*/

import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        Footer
    </div>
  )
}

export default Footer