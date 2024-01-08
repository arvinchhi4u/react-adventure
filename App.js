import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello World from JSX!</h1>
console.log(jsxHeading); // React Element (Object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
