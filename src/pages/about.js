"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@coreui/react");
const bs_1 = require("react-icons/bs");
const flip_1 = __importDefault(require("../components/flip"));
const page_title_1 = __importDefault(require("../components/page_title"));
const About = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(page_title_1.default, { title: "About" }),
        react_1.default.createElement("div", { className: "content-wrap" },
            react_1.default.createElement("section", { id: "my-process" },
                react_1.default.createElement("h3", null,
                    "I Complete",
                    react_1.default.createElement("br", null),
                    "Every Step Carefully"),
                react_1.default.createElement("p", null,
                    "These are the words we live by in everything we do. Every story we tell, every brand we ",
                    react_1.default.createElement("br", null),
                    "build, and every interaction we create must not only look beautiful."),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.CRow, { style: { marginLeft: "10%" } },
                    react_1.default.createElement(react_2.CCol, { sm: 4 },
                        react_1.default.createElement(react_2.CCard, { id: "process-card", role: "process-card" },
                            react_1.default.createElement(react_2.CCardBody, { id: "process-card" },
                                react_1.default.createElement(react_2.CCardTitle, { id: "process-card" }, "Web Development"),
                                react_1.default.createElement(react_2.CCardText, { id: "process-card" }, "this is step 1"),
                                react_1.default.createElement("a", { id: "process-card", href: "# " },
                                    react_1.default.createElement(bs_1.BsChevronRight, null))))),
                    react_1.default.createElement(react_2.CCol, { sm: 4 },
                        react_1.default.createElement(react_2.CCard, { id: "process-card", role: "process-card" },
                            react_1.default.createElement(react_2.CCardBody, { id: "process-card" },
                                react_1.default.createElement(react_2.CCardTitle, { id: "process-card" }, "Web Development"),
                                react_1.default.createElement(react_2.CCardText, { id: "process-card" }, "this is step 4"),
                                react_1.default.createElement("a", { id: "process-card", href: "# " },
                                    react_1.default.createElement(bs_1.BsChevronRight, null)))))),
                react_1.default.createElement(react_2.CRow, { className: "bottom", style: { marginLeft: "10%" } },
                    react_1.default.createElement(react_2.CCol, { sm: 4 },
                        react_1.default.createElement(react_2.CCard, { id: "process-card", role: "process-card" },
                            react_1.default.createElement(react_2.CCardBody, { id: "process-card" },
                                react_1.default.createElement(react_2.CCardTitle, { id: "process-card" }, "Web Development"),
                                react_1.default.createElement(react_2.CCardText, { id: "process-card" }, "this is step 3"),
                                react_1.default.createElement("a", { id: "process-card", href: "# " },
                                    react_1.default.createElement(bs_1.BsChevronRight, null))))),
                    react_1.default.createElement(react_2.CCol, { sm: 4 },
                        react_1.default.createElement(react_2.CCard, { id: "process-card", role: "process-card" },
                            react_1.default.createElement(react_2.CCardBody, { id: "process-card" },
                                react_1.default.createElement(react_2.CCardTitle, { id: "process-card" }, "Web Development"),
                                react_1.default.createElement(react_2.CCardText, { id: "process-card" }, "this is step 4"),
                                react_1.default.createElement("a", { id: "process-card", href: "# " },
                                    react_1.default.createElement(bs_1.BsChevronRight, null))))))),
            react_1.default.createElement("section", { id: "breif" },
                react_1.default.createElement("h3", null,
                    "Digital Web Products for",
                    react_1.default.createElement("br", null),
                    " Amazing Clients"),
                react_1.default.createElement("p", null,
                    "Since 2015 I have been a visionary and a reliable software engineer partner",
                    react_1.default.createElement("br", null),
                    " for world-class brands. These are the words we live by in everything we do.")),
            react_1.default.createElement("section", { id: "feedback" },
                react_1.default.createElement(flip_1.default, null),
                react_1.default.createElement(flip_1.default, null),
                react_1.default.createElement(flip_1.default, null)))));
};
exports.default = About;
