import ReactDOM from 'react-dom';
import GlobalStyles from './styles/index';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { providersWrapper } from './providers-wrapper';


ReactDOM.render(
  providersWrapper(<App />),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
