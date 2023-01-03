import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { providersWrapper } from './providers-wrapper';
import { devTools } from "@ngneat/elf-devtools";

if (process.env.REACT_APP_PRODUCTION !== 'true') {
  devTools();
}

ReactDOM.render(
  providersWrapper(<App />),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
