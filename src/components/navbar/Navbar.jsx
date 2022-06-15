/* Each folder represents a component.
Navbar is going to be a function component, so rafce can be used here too.
Component file names and const names usually start with an uppercase letter.
Folder names for component should be lowercase.
Each component needs its own CSS file, lowercase name */

import React, { useState } from 'react'; // useState is a hook that allows us to use state in a functional component.
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // importing icons
import './navbar.css' // use CSS file for this Navbar component
import logo from '../../assets/logo.svg' // logo image, put images in folder called assets under src

const Menu = () => ( // Parenthesis are returning a single value. In this case, it's just one JSX element. Same as using braces with nothing but a return statement.
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => { // Curly braces are executing multiple lines of code
  /* toggleMenu is a variable that will tell whether to show the menu or not.
  setToggleMenu is a function that will change the value of toggleMenu. */
  const [toggleMenu, setToggleMenu] = useState(false); // useState is being set to false initially
  
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links"> {/* BEM naming convention -> Block Element Modifier */}
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" /> {/* logo image, put images in folder called assets under src */}
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu /> 
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
        <div  className="gpt3__navbar-menu">
          {toggleMenu // JSX code. If toggleMenu is true, show the menu icon. If false, show the close icon. FOR ICON.
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> // display icon to close menu when menu is open, i.e., if toggleMenu is true. when clicked, set toggleMenu to false.
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> // display icon with 3 lines for menu when menu is closed, i.e., if toggleMenu is true. when clicked, set toggleMenu to true.
          }
          {toggleMenu && ( // short circuit operator, same as 'if (toggleMenu) {<>...</>}'. If toggleMenu is true, show the menu links. FOR LINKS.
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar