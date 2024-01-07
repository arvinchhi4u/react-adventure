/**
 *  <div id="parent">
 *    <div id="child">
 *      <h1>I am an H1 tag</h1>
 *      <h2>I am an H2 tag</h2>
 *    </div>
 *    <div id="child2">
 *      <h1>I am an H1 tag</h1>
 *      <h2>I am an H2 tag</h2>
 *    </div>
 *  </div>
 */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
console.log(heading); // React Element (Object)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "1" }, [
    React.createElement("h1", { key: "11" }, "I am an H1 tag"),
    React.createElement("h2", { key: "12" }, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "2" }, [
    React.createElement("h1", { key: "21" }, "I am an H1 tag"),
    React.createElement("h2", { key: "22" }, "I am an H2 tag"),
  ]),
]);
console.log(parent); // React Element (Object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
