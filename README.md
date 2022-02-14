# Weather App

This project presents the weather of different locations around the world and cache history of locations.<br/>
This project uses packages such as: `react-redux`, `@reduxjs/toolkit`, `@mui/material`...<br/>
[Deployed App](https://master.d3gu4qyc5vhimx.amplifyapp.com/).

## API notes
1. I used the following API to fetch data: https://developer.accuweather.com/.
2. This free API enables `50 requests` per day for some API key, if a request failed the app we'll fetch `mock data`.

## Code notes
1. The code of temperature type toggle is being done by `custom hook`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/hooks/temprature-type.hook.ts).
2. The are 2 `interceptors`: one is attaching API_KEY to each request, and the other for showing any server error by snackbar, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/interceptors).
3. The `project structure` is devided to generic pieces (such as [api](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/api) / [components](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components) / [guards](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/guards) / ...) and [pages](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/pages).
4. The `table` component is generic, so it could fit to different inputs of data, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components/Table).
5. The autocomplete is also generic, so it could be used 
5. `Advance TS`, [example](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/store/favorite-locations/favorite-locations.model.ts).
6. `Media breakpoints`: 'xs': 600px, 'sm': 960px, 'md': 1280px, 'lg': 1920px, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/styles/vendors/_vendors.scss).
7. The Home component contains `unit tests`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/pages/Home/Home.test.tsx).
8. The toolbar `supports desktop and mobile devices`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components/Toolbar).
9. `Animation` can be found in favorites component, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/pages/Favorites/Favorites.tsx).
10. `App routing` contains lazy loaded routes and guards in case there is no data, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/app-routing.tsx).
10. Improvements to be done: add `OpenAPI` to the project, use `style components` instead of SASS.

## React disparity from Angular
1. Style vendors.
2. Interceptors on init.
3. Route guard