import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

import './utils/i18n';
import "./index.css";
import App from "./App";

const loadingMarkup = (
  <div class="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,

  document.getElementById("root")
);
