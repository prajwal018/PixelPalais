"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bs_1 = require("react-icons/bs");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Footer = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "bg-primary-200 rounded-lg m-8 p-4" },
            react_1.default.createElement("div", { className: "text-3xl font-bold text-center" }, "Let's Talk!"),
            react_1.default.createElement("div", { className: "m-4 grid gap-12 sm:grid-cols-3 text-center item-center" },
                react_1.default.createElement("div", { className: "grid grid-cols-1 text-center" },
                    react_1.default.createElement("div", { className: "flex justify-center" },
                        react_1.default.createElement(bs_1.BsTelephoneFill, null)),
                    react_1.default.createElement("p", { className: "font-semibold" }, "Phone Me:"),
                    react_1.default.createElement("p", { className: "font-thin" }, "+91 876 681 3856")),
                react_1.default.createElement("div", { className: "grid grid-cols-1" },
                    react_1.default.createElement("div", { className: "flex justify-center" },
                        react_1.default.createElement(bs_1.BsEnvelopeFill, null)),
                    react_1.default.createElement("div", { className: "font-semibold" }, "Email Me:"),
                    react_1.default.createElement("div", { className: "font-thin" },
                        react_1.default.createElement("a", { href: "mailto:prajwalkuchewar3@gmail.com", target: "_blank", rel: "noopener noreferrer" }, "prajwalkuchewar3@gmail.com"))),
                react_1.default.createElement("div", { className: "grid grid-cols-1" },
                    react_1.default.createElement("div", { className: "flex justify-center" },
                        react_1.default.createElement(bs_1.BsLink, null)),
                    react_1.default.createElement("div", { className: "font-semibold" }, "Follow Me:"),
                    react_1.default.createElement("div", { className: "font-thin" },
                        react_1.default.createElement("a", { href: "https://linkedin.com/in/prajwal018", target: "_blank", rel: "noopener noreferrer" }, "linkedin.com/in/prajwal018")))),
            react_1.default.createElement("a", { className: "flex justify-center mx-auto", href: "/contact" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/contact" },
                    react_1.default.createElement("button", { className: "item-center rounded-full py-2 px-4 text-primary-200 bg-primary-800 shadow-lg shadow-gray-800/40 " }, "Hire Me")))),
        react_1.default.createElement("div", { className: "flex justify-end mx-auto" },
            react_1.default.createElement("p", null, "\u00A9 2023 Prajwal Inc."))));
};
exports.default = Footer;
