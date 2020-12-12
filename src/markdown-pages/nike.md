---
title: "Nike"
date: "2020-09-08"
description: "A Nike clone built using ReactJS, Redux and Firebase. It uses the Stripe API and NodeJs to receive payments* and includes multiple features to filter the products."
overview: "This website is an expansion of a project I built in one of the many Udemy courses I've completed: 'Complete React Developer in 2020'. I expanded on the project greatly with a complete re-design including individual product pages and filter options."
website: "https://nike-clone-app.herokuapp.com/"
github: "https://github.com/Cassandrapaige/e-commerce-store"
featuredImage: "./images/nike.png"
stack: ["ReactJs", "NodeJs", "Redux", "Styled Components"]
---

Reacts context API and local storage are used throughout the application to maintain the users cart items, cart total and currency preference, making it easy to share data across components without the added expense of using Redux. 

This project uses the Exchange Rate API and updates the universal state depending on the users currency preference.

<Title>Lessons Learned</Title>

By combining Context API with a reducer, we were able to create a global store for all the state in our application, without relying on passing props down through the component tree. This makes our application set up for any future expansions and the overall process was a lot easier to implement than I initially expected.

<Title isPurple>Accomplishments</Title>

I wanted to create this project from scratch, without the use of any added libraries so I spent a good amount of time creating the custom carousels and scroll animations. 

I also found the concept of creating custom hooks a little daunting before the start of this project, so I used this application as a playground to get more comfortable with extracting logic into custom hooks to make component compisition more accessible.

