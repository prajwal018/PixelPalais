"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const about_1 = __importDefault(require("./pages/about"));
const contact_1 = __importDefault(require("./pages/contact"));
const footer_1 = __importDefault(require("./components/footer"));
const home_1 = __importDefault(require("./pages/home"));
const navbar_1 = __importDefault(require("./components/navbar"));
const projects_1 = __importDefault(require("./pages/projects"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_toastify_1.ToastContainer, null),
        react_1.default.createElement(navbar_1.default, null),
        react_1.default.createElement("div", null,
            react_1.default.createElement("main", null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(about_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/projects", element: react_1.default.createElement(projects_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/contact", element: react_1.default.createElement(contact_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(home_1.default, null) }))),
            react_1.default.createElement(footer_1.default, null))));
}
exports.default = App;
