# Weather App

This project presents the weather of different locations around the world and cache history of locations.<br/>
This project uses packages such as: `react`, `@reduxjs/toolkit`, `@mui/material`...<br/>
The app supports all devices and most browsers.
[Deployed App](https://asaf11108.github.io/asaf-regev-10-01-2022/).

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
11. Implemented [new react design pattern return component from hooks](https://blog.bitsrc.io/new-react-design-pattern-return-component-from-hooks-79215c3eac00) in toolbar component, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/providers/menu).
12. `Snackbar provider`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/tree/master/src/providers/snackbar).
13. Date fns with lazy `locale` fetch, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/src/providers/locale/locale.provider.tsx).
14. `Github actions` - build, test, deploy. [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/.github/workflows/node.js.yml).
15. Generate `react cli`, [link](https://github.com/asaf11108/asaf-regev-10-01-2022/blob/master/generate-react-cli.json).
16. Improvements to be done: add `OpenAPI` to the project.

## React vs Angular
1. `SASS VS css-in-js`.<br/>
    SASS: cleaner style code, easy to manipulate style, strong utility libraries (I needed to make conversion from SASS to JS of 'include-media-spread').<br/>
    css-in-js: The code is cleaner (in the HTML part), it's easy to pass variable from js to css.<br/>
    Material Ui kinds of forces the use of styled components.
2. Init interceptors. There is no way to initialize the interceptors without wrapping them in first render logic and taking into account that the initialization needs to be happen before any rendering and also pass setState of snackbar to interceptor.
3. The route guard inefficient. There isn't build-in tool to implement route guard, so the solution is to load the page and in case that the route can't be activated the app will redirect to home page. This causes two page renders.
4. `RxJS` doesn't go along well with React. For example making a polling mechanism is easy with RxJS.
5. In material UI [Textfield](https://mui.com/components/text-fields/#components) is very powerful and easy to customise in respect to Angular material form field, [article](https://medium.com/geekculture/what-really-happens-when-you-use-the-textfield-component-in-material-ui-1e62652196f).
6. React is much `simpler`! there are no modules / services / pipes / ... like Angular.
7. `Rendering` in React is more complex compared to Angular (on push).<br/>
React component re-rendering when: update in State, update in prop, re-rendering of the parent component.<br/>
Angular component re-rendering when: input / output changed, async event (click / mouse move...).<br/>
Angular change detection is simplier, no need for useMemo / useCallback that make the code ugly.<br/>
Angular onPush kind of forces the developer to separate from business to UI components.
8. Typescript in react is stricter.
9. Angular's Input/Output is more suitable for web development. In JS the events are propagated up the DOM tree but in React it's only unidirectional.
10. Elf store management can be supported in Angular and React. It's based on RxJS. It produces very little boilerplate and can make the code simpler.
11. Easier to make `shallow testing` in Angular.

## Latest developments
https://www.loom.com/share/319e64b8cd654ee4aff9ad9aa2e62a7a

https://www.loom.com/share/81c5043b14904b158e7075b50e3f952c
