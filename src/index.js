"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
let appRoot = document.getElementById('root');
exports.appRoot = appRoot;
ReactDOM.render(React.createElement(App_1.default, null), appRoot);
