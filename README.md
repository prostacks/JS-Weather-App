# JS Weather App

<img src='https://www.prostacks.io/imgs/weather-app-screenshot.png' alt='Weather App Screenshot' width='400'>

[Hosted Demo](https://www.prostacks.io/weatherapp.html)

### Overview

This project is a simple application where it fetches the current weather of any city based off the user's input. This application utilizes the Open Weather API. I used Brad Traversy's bootstrap theme for the UI, I made some minor styling changes but I wanted to focus on the actual functionality (JS) of the application and not the CSS/UI. The JS code was built from scratch. This project demonstrates my ability of utilizing the Fetch API as well as dealing with Promise based HTTP responses with ES7 async/await.

### Technologies Used

- JavaScript
- HTML5
- Bootstrap

### Challenges

Comprehending the API documentation as well as strategizing on the best way to utilize the data for the best user experience was the biggest challenge for this project.

### Solution

The JSON data response for wind direction was given in degrees, so I created a custom function that would take the wind direction data and convert it into a cardinal direction (N, S, E, W) before showing that data to the user.

### Key Features

- Change Location City
- Fetch API
- async/await
