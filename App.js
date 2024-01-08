import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>This is title</h1>;
};

// Component Composition:
// a component referred in output of another component
// here, <Title /> is referred in <Heading />
const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h2>Hello World from React Composite Component!</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
