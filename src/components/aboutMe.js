"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bs_1 = require("react-icons/bs");
const AboutMe = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "border-4 rounded-full bg-primary-200 col-span-2 p-4" },
            react_1.default.createElement("h3", { className: "font-bold text-2xl " }, "Need a Creative Website?"),
            react_1.default.createElement("h3", { className: "font-semibold text-xl mb-4" }, "I Can Help You!"),
            react_1.default.createElement("p", { className: " text-l mb-8" }, "Proactive student eager to contribute to the coding community through hard work and dedication to quality. Seeking to use exceptional communication skills as a team member/software developer. Proficiency in Python, Java, Data Structures, and Algorithms. Passionate about web development and user experience design."),
            react_1.default.createElement("p", { className: " text-right mb-2" }, "You Can Follow Me Here:"),
            react_1.default.createElement("div", { className: "flex gap-2 justify-end" },
                react_1.default.createElement("button", { onClick: () => window.open("https://www.instagram.com/prxjwxl.018/", "_blank", "noopener,noreferrer") },
                    react_1.default.createElement(bs_1.BsInstagram, { className: "size-12 p-2" })),
                react_1.default.createElement("button", { onClick: () => window.open("https://www.linkedin.com/in/prajwal018", "_blank", "noopener,noreferrer") },
                    react_1.default.createElement(bs_1.BsLinkedin, { className: "size-12 p-2" })),
                react_1.default.createElement("button", { onClick: () => window.open("https://github.com/prajwal018", "_blank", "noopener,noreferrer") },
                    react_1.default.createElement(bs_1.BsGithub, { className: "size-12 p-2" })))),
        react_1.default.createElement("div", { className: "rounded-lg p-4 " },
            react_1.default.createElement("img", { alt: "A beautiful sunset over the mountains", src: `./aboutme-pic.png`, className: "object-cover mx-auto rounded-full size-80 shadow-lg shadow-gray-500/40" }))));
};
exports.default = AboutMe;
