# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [[@github](https://github.com/davidrhyne/rest-countries-api)]
- Live Site URL: [@github pages](https://your-live-site-url.com)

## My process

After reading and analyzing the design spec, I focused on getting all the essentials working, like the API, routing, and parsing the JSON data. From there, I worked on file structure to make the components reusable and easier to maintain.  And finally, there were several rounds of component coding, styling, and refactoring.

### Built with

- [REST Countries API](https://restcountries.eu/)
- [React](https://reactjs.org/) - JS library
- [React Router]https://reactrouter.com/core/guides/quick-start
- [Styled Components](https://styled-components.com/) - For styles
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was a great React single page application to interface with the REST Countries API.  While I have written a few React applications from scrath, this was the first to use React Router and an API.  This provided a great opportunity to manage the information from the API and to control the navigation between pages.  

My knowledge of styled components grew to incorporated the ThemeProvider and createGlobalStyle modules.  I initially struggled with trying to code the theme functionality and was very happy to switch to ThemeProvider.  And this was the first project where I incorporated CSS grid with styled-components and was very pleased with results.

### Continued development

I plan to continue building React single page applications to get more experience with hooks and styled components.  I will continue to use and improve on the file structure adopted for this project, where the components are stored in their own folders with a subfolder for styles and the component is named index.js.  And I will research the nature of state within React application to understand the best practices for managing state and how to handle browser refreshes.

### Useful resources

- [stackoverflow](https://stackoverflow.com/questions/56900826/how-do-i-use-grid-template-areas-in-styled-components-with-react) - This is a great resource on used CSS grid with styled components.
- [Css-Tricks](https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/) - This is an excellent resource on ThemeProvider and createGlobalStyle.

## Author

- Frontend Mentor - [@davidrhyne](https://www.frontendmentor.io/profile/davidrhyne)
- Twitter - [@DavidRhyne16](https://www.twitter.com/DavidRhyne16)

