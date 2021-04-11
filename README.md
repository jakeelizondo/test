# Coding Challenge

Table of Contents:\
\
[Summary](#summary)\
[Technologies Used](#technologies-used)\
[What I Learned](#what-i-learned)\
[Core Decisions](#core-decisions-for-discussion)

## Summary

This application was developed as part of a coding challenge to replicate a Figma file of an online sign-up form.

## Technologies Used

- Create-React-App - boilerplate setup for React, initiated for this application with npx create-react-app --template typescript
- React Hooks - this project is built using React Hooks and functional components as well as one class component
- CSS 3 - I chose to use vanilla CSS to style this form to show my capability to use CSS3, but am certainly open to using CSS in JS like styled components, or a preprocessor like SASS

## What I Learned

This project was a good learning experience for using CSS to conform to someone elses design. I also got a lot of practice specifically with using position:fixed to make the hovering select menu work. Really a lot of good practice with positioning in general.

## Core decisions for discussion

1. I chose to move the Drop Down into another isolated component, 1 to show that I can modularize components to make them more reusable, and 2 because after trying to get the drop down to work with select & option elements I realized that I was going to need to look for a more custom component solution in order to get it to look like the design.

2. Currently the form stores changes to the inputs in state, but doesn't do anything on submission since that was not included in the assignment. I would be happy to refactor it to group the data and send a POST request or anything like that if so desired.
