"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_toastify_1 = require("react-toastify");
const HelloPrompter = () => {
    const handleHi = () => {
        (0, react_toastify_1.toast)("😺 Hello Visitor");
    };
    return (react_1.default.createElement("div", { className: "bg-primary-200  size-16 absolute ml-2 left-19 top-2 rounded-full", onClick: handleHi },
        react_1.default.createElement("span", { className: "text-5xl" }, "\uD83D\uDC4B")));
};
exports.default = HelloPrompter;
