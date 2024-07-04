"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PageTitle = ({ title }) => {
    return (react_1.default.createElement("div", { className: "bg-gray-200 m-4 rounded-lg text-center" },
        react_1.default.createElement("div", { className: "text-4xl font-bold" }, title.toUpperCase())));
};
exports.default = PageTitle;
