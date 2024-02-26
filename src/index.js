import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { withStore } from "./app/Providers/store/withStore";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {withStore(
            <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                <App />
            </DevSupport>
        )}
    </BrowserRouter>
);

reportWebVitals();
