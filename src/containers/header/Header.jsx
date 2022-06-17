/* Components are concerned with how things look.
Containers are concerned with how things work.

Containers are parent elements that contain components.

Containers are responsible for data fetching and passing data down to its child components to render.
Components are responsible for rendering the data from the container.
Services only interact with containers (which handle UI interactions), and never with components.
*/

import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home"> {/* id is used for anchor links */}
        <div className="gpt3__header-content">
          <h1 className="gradient__text"> {/* gradient__text defined in index.css */}
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>

          <div className="gpt3__header-content-input">
            <input type="email" placeholder="Your email address" />
            <button type="button">Get Started</button>
          </div>

        <div className="gpt3__header-content-people">
          <img src={people} alt="people"/>
          <p>
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
        </div>
    </div>
  )
}

export default Header