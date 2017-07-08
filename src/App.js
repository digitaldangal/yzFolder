"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "App-header" },
                React.createElement("h2", null, "Welcome to React")),
            React.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload.")));
    }
}
exports.default = App;
