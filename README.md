# Weather App

This project presents the weather of different locations around the world and save favorite locations.<br/>
This project uses packages such as: `react-redux`, `@reduxjs/toolkit`, `@mui/material`...<br/>
[Deployed App](https://master.d3gu4qyc5vhimx.amplifyapp.com/).

## API notes
1. I used the following API to fetch data: https://developer.accuweather.com/.
2. This free API enables `50 requests` per day for some API key, if a request failed the app we'll fetch `mock data`.

## React disparity from Angular
1. Style vendors.
2. Interceptors on init.
3. Route guard