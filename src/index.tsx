import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App></App></StrictMode>);

/** Service worker **/
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then((reg) => {
    reg.addEventListener("updatefound", function () {
      console.log(
        "A new version of this application is availalllble. Refresh to update."
      );
    });
  });
}
