import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/CSS/index.css";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);