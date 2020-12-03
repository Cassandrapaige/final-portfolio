---
title: "ABCs of CSS"
date: "2020-09-04"
description: "26 layouts containing 26 code snippets to help build your portfolio and boost your creativity. Toggle between pages using the navigation menu or pressing any letter on your keyboard."
overview: "You heard it. This is the place where old projects go to die. Built using ReactJS, this websites sole purpose is to keep track of all the weird things I've built. **Coming soon!**"
website: "https://abcsofcss.netlify.app/"
github: "https://github.com/Cassandrapaige/abcsofcss"
featuredImage: "./images/abcs.png"
stack: ["ReactJs", "Gatsby", "GraphQl", "Javascript/ES6", "CSS/SCSS", "Styled Components", "Git/Github", "Netlify"]
---

Local storage is used throughout the application to maintain the users cart items, cart total and currency preference, making it easy to share user data across components without the added expense of using Redux.

<Title>Lessons Learned</Title>

By combining Context API with a reducer, we were able to create a global store for all the state in our application, without relying on passing props down through the component tree. This makes our application set up for any future expansions and the overall process was a lot easier to implement than I initially expected.

<Title isPurple>Accomplishments</Title>

I wanted to create this project from scratch, without the use of any added libraries so I spent a good amount of time creating the custom carousels and scroll animations. 

I also found the concept of creating custom hooks a little daunting before the start of this project, so I used this application as a playground to get more comfortable with extracting logic into custom hooks to make component compisition more accessible.

