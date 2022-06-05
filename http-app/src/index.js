import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

// Raven.config(
//   "https://026a51a91336480d9ba0de40429b881c@o1272326.ingest.sentry.io/6465852",
//   {
//     release: "1-0-0",
//     environment: "development-test",
//   }
// ).install();

// Sentry.init({
//   dsn: "https://026a51a91336480d9ba0de40429b881c@o1272326.ingest.sentry.io/6465852",
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
