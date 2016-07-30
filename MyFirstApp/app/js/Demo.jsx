const $ = require("jquery");
const React = require("react");
const ReactDOM = require("react-dom");
const [targetNode] = $("#content")

ReactDOM.render(
    <h1>React + PhoneGap App Demo</h1>, targetNode);
