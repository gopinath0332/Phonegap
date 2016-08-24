import React from 'react';
import ReactDOM from 'react-dom';
//
// var React = require("react");
// var ReactDOM = require("react-dom");

import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";

import $ from "jquery";
import Counter from "./components/Counter.jsx";
// import "bootstrap";

const [targetNode] = $("#app");

ReactDOM.render(<Counter></Counter>,targetNode);

// ReactDOM.render(<h3 className="container" >Empty React APP!</h3>, targetNode);
