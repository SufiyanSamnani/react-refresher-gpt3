/* index.js within /components helps keep things clean for all components that need importing.
Instead of stating each import line individually in the main App.js file,
we can create an index.js file in the components folder and import all components into it. */

/* export { default as XXX } from './xxx/Xxx' cam be written as two separate statements:
import Article from './article/Article'
export { default as Article }
The braces are used for being able to have multiple exports as one default object. */

// every importable component needs an export default statement
// anything that needs to be imported into the main App.js file, needs to be exported
// export defaults are not named, so they can be imported into other files with any name
// when importing, you can name each export within braces and export it directly from ./components
export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as CTA } from './cta/CTA';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';