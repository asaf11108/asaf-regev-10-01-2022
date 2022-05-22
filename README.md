# Weather App

This project presents the weather of different locations around the world and cache history of locations.<br/>
This project uses packages such as: `react`, `@reduxjs/toolkit`, `@mui/material`...<br/>
[Deployed App](https://master.d3gu4qyc5vhimx.amplifyapp.com/).

## API notes
1. I used the following API to fetch data: https://developer.accuweather.com/.
2. This free API enables `50 requests` per day for some API key, if a request failed the app we'll fetch `mock data`.

## Code notes
1. The code of temperature type toggle is being done by `custom hook`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/hooks/temprature-type.hook.ts).
2. The are 2 `interceptors`: one is attaching API_KEY to each request, and the other for showing any server error by snackbar, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/interceptors).
3. `Generic table`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components/table).
4. `Generic autocomplete`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components/autocomplete).
5. `Advance TS`, [example](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/store/favorite-locations/favorite-locations.model.ts).
6. `Media breakpoints`: 'xs': 600px, 'sm': 960px, 'md': 1280px, 'lg': 1920px, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/styles/vendors/_vendors.scss).
7. The Home component contains `unit tests`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/pages/home/home.test.tsx).
8. The toolbar `supports desktop and mobile devices`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/components/toolbar).
9. `Generic Animation`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/pages/favorites/favorites.tsx).
10. `App routing` contains lazy loaded routes and guards in case there is no data, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/app-routing.tsx).
11. Implemented [new react design pattern return component from hooks](https://blog.bitsrc.io/new-react-design-pattern-return-component-from-hooks-79215c3eac00) in toolbar component, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/hooks/menu).
12. `Snackbar provider`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/providers/snackbar).
12. Date fns with lazy `locale` fetch, [usage example](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/providers/locale/locale.provider.tsx).
13. Generate `react cli`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/generate-react-cli.json).
14. Improvements to be done: add `OpenAPI` to the project.

## React vs Angular
1. `SASS VS css-in-js`.<br />
    SASS: There are strong utility libraries that implemented by SASS, SASS selectors (BEM) is easy to build style, overriding MUI classes isn't intuitive.<br />
    css-in-js: The code is cleaner (in the HTML part), it's easy to pass variable from js to css.
2. Init interceptors. There is no way to initialize the interceptors without wrapping them in first render logic and taking into account that the initialization needs to be happen before any rendering and pass setState of snackbar to interceptor error response.
3. The route guard inefficient. There isn't build-in tool to implement route guard, so the solution is to load the page and in case that the route can't be activated the app will redirect to home page. This cause to 2 page renders.
4. `RxJS` doesn't go along well with React. The code can be messy, for example take a look in the autocomplete component, it could be cleaner in RxJS.
5. In material UI [Textfield](https://mui.com/components/text-fields/#components) is very powerful and easy to customise in respect to Angular material form field, [article](https://medium.com/geekculture/what-really-happens-when-you-use-the-textfield-component-in-material-ui-1e62652196f).
6. React is much `simpler`! there are no modules / services / pipes / ... like Angular.
7. `Rendering` in react can be slow in contrast to Angular (OnPush).<br/>
React component re-rendering when: update in State, update in prop, re-rendering of the parent component.<br/>
Angular component re-rendering when: input / output changed, async event (click / mouse move...).<br/>
Angular change detection is simplier, no need for useMemo / useCallback that make uglify the code and slower the app.

## Latest developments
https://www.loom.com/share/319e64b8cd654ee4aff9ad9aa2e62a7a
