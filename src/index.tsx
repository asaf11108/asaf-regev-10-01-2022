import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { providersWrapper } from './providers-wrapper';
import { devTools } from "@ngneat/elf-devtools";
import { createRoot } from "react-dom/client";

if (process.env.REACT_APP_PRODUCTION !== 'true') {
  devTools();
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(providersWrapper(<App />));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
