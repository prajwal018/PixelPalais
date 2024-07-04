"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ServiceCard = ({ title, text, link }) => {
    return (react_1.default.createElement("div", { className: "rounded-lg bg-primary-200 m-8" },
        react_1.default.createElement("div", { className: "px-6 py-4" },
            react_1.default.createElement("div", { className: "font-bold text-xl mb-2" }, title),
            react_1.default.createElement("p", { className: "text-gray-700 text-base mb-2 line-clamp-2" }, text),
            react_1.default.createElement("div", { className: "pr-6" }, link.map((item, index) => (react_1.default.createElement("span", { key: index, className: "inline-block bg-secondary-200 shadow-lg shadow-gray-500/40 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" },
                "#",
                item)))),
            react_1.default.createElement("div", { className: "flex justify-end text-white" },
                react_1.default.createElement("button", { className: "bg-primary-800 shadow-lg shadow-gray-900/40  hover:bg-primary-600 text-primary-200 py-1 px-3 rounded-full", onClick: () => window.open("https://www.linkedin.com/in/prajwal018", "_blank", "noopener,noreferrer") }, "Learn More")))));
};
exports.default = ServiceCard;
