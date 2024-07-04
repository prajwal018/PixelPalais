"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (react_1.default.createElement("div", { className: "flex items-right justify-between flex-wrap bg-transparent text-gray-800 p-3" },
        react_1.default.createElement("div", { className: "flex items-center flex-shrink-0 mr-6" },
            react_1.default.createElement("span", { className: "text-gray-800 font-bold text-xl tracking-tight" }, "PRAJWAL.")),
        react_1.default.createElement("div", { className: "block lg:hidden" },
            react_1.default.createElement("button", { className: "flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-gray-400 hover:border-gray-200", onClick: toggleMenu },
                react_1.default.createElement("svg", { className: "fill-current h-3 w-3", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("title", null, "Menu"),
                    react_1.default.createElement("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })))),
        react_1.default.createElement("div", { className: `w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}` },
            react_1.default.createElement("div", { className: "text-md text-base lg:flex-grow lg:justify-end lg:text-right" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4" }, "Home"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/contact", className: "block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4" }, "Contact"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/about", className: "block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4" }, "About"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/projects", className: "block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400" }, "Projects")))));
};
exports.default = Navbar;
