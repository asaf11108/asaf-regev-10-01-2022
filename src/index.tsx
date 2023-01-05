import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { providersWrapper } from './providers-wrapper';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(providersWrapper(<App />));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
