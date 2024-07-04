"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const digitalMe_1 = __importDefault(require("../components/digitalMe"));
const aboutMe_1 = __importDefault(require("../components/aboutMe"));
const helloPrompter_1 = __importDefault(require("../components/helloPrompter"));
const heroBoard_1 = __importDefault(require("../components/heroBoard"));
const serviceCard_1 = __importDefault(require("../components/serviceCard"));
const react_1 = __importDefault(require("react"));
const Services = [
    {
        title: "Web Development",
        text: "Creating engaging and responsive websites tailored to your needs.",
        link: ["java", "react", "sql"],
    },
    {
        title: "Software Development",
        text: "Building scalable and efficient software solutions for various applications.",
        link: ["java", "react", "sql"],
    },
    {
        title: "UI/UX Designer",
        text: "Designing intuitive and user-friendly interfaces for enhanced user experience.",
        link: ["java", "react", "sql"],
    },
];
const Home = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "m-4 rounded-lg relative h-80 w-2/3 my-8 mx-auto bg-primary-300  back" },
            react_1.default.createElement(heroBoard_1.default, null),
            react_1.default.createElement(helloPrompter_1.default, null)),
        react_1.default.createElement("div", { className: "m-4 grid gap-4 sm:grid-cols-3" }, Services.map((item) => (react_1.default.createElement(serviceCard_1.default, { title: item.title, text: item.text, link: item.link })))),
        react_1.default.createElement("div", { className: "m-4 grid gap-4 sm:grid-cols-3" },
            react_1.default.createElement(aboutMe_1.default, null)),
        react_1.default.createElement("div", { className: "m-4 grid gap-4 sm:grid-cols-1" },
            react_1.default.createElement(digitalMe_1.default, null))));
};
exports.default = Home;
