---
title: "Movies R Us"
date: "2020-09-09"
description: "Find your favourite movies and save them for later! This React application allows you to browse through thousands of movies or search for your favourites to find ones that are similar."
overview: "Find your favourite movies and save them for later! This React application allows you to browse through thousands of movies or search for your favourites to find ones that are similar."
website: "https://moviesrus.netlify.app/"
github: "https://github.com/Cassandrapaige/movies-r-us"
featuredImage: "./images/movies.png"
stack: ["ReactJs", "Javascript/ES6", "CSS/SCSS", "React Spring"]
---

This application receives data from multiple API endpoints, making React a good choice thanks to its ability to lazy load data, only when and if requested by the user. 

Reacts Context API and local storage are used throughout the application to maintain the users favourite movies, and react spring and SCSS are used to create smooth transitions between states.

<Title>Lessons Learned</Title>

Being the first real React project that I built, I learned a lot regarding API integration and component structure. When I first began building this project I did a lot of code repetition making the codebase a lot more complicated than it needed to be. Originally built using class based components, I later refactored the code to use functional components and React hooks.

<Title isPurple>Accomplishments</Title>

This project includes an advanced search component that displays a list of populated movie suggestions based on the users text input. The user can then navigate through the list of suggestions using keypress or click events, and retrieve the results with help from react-router-doms built-in history API.

