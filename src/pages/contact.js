"use strict";
/* eslint-disable react/style-prop-object */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// import { useHistory } from "react-router-dom";
const react_toastify_1 = require("react-toastify");
const page_title_1 = __importDefault(require("../components/page_title"));
const bs_1 = require("react-icons/bs");
const Contact = () => {
    // const history = useHistory();
    const [user, setUser] = (0, react_1.useState)({
        name: "",
        email: "",
        message: "",
    });
    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => (Object.assign(Object.assign({}, prevUser), { [name]: value })));
    };
    const PostData = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const { name, email, message } = user;
        try {
            const res = yield fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });
            const data = yield res.json();
            if (res.status === 422 || !data) {
                react_toastify_1.toast.error("Invalid Inputs");
            }
            else {
                react_toastify_1.toast.info("Message Sent");
                setUser({ name: "", email: "", message: "" });
                // history.push("/contact");
            }
        }
        catch (error) {
            react_toastify_1.toast.error("An error occurred. Please try again.");
        }
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "contact" },
            react_1.default.createElement(page_title_1.default, { title: "Contact" }),
            react_1.default.createElement("div", { className: "content-wrap" },
                react_1.default.createElement("section", { id: "quick-support" },
                    react_1.default.createElement("h2", null, "Quick Support"),
                    react_1.default.createElement("p", { style: { marginBottom: 0 } },
                        "These are the words we live by in everything we do. Every story we tell, every brand ",
                        react_1.default.createElement("br", null),
                        "we build, and every interaction we create"),
                    react_1.default.createElement("div", { className: "myinfo" },
                        react_1.default.createElement("h5", null,
                            react_1.default.createElement(bs_1.BsTelephoneFill, null),
                            "Phone Me 24/7: ",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "small" }, "+918 766 813 856")),
                        react_1.default.createElement("h5", null,
                            react_1.default.createElement(bs_1.BsEnvelopeFill, null),
                            "Email Me 24/7: ",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "small" }, "prajwalkuchewar3@gmail.com")),
                        react_1.default.createElement("h5", null,
                            react_1.default.createElement(bs_1.BsLinkedin, null),
                            "Follow Me: ",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "small" }, "linkedin.com/in/prajwal018")))),
                react_1.default.createElement("section", { id: "comment" },
                    react_1.default.createElement("h2", null, "Get in Touch"),
                    react_1.default.createElement("form", { method: "POST", onSubmit: PostData },
                        react_1.default.createElement("input", { type: "text", id: "name", name: "name", required: true, placeholder: "Name", value: user.name, onChange: handleInputs }),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("input", { type: "email", id: "email", name: "email", required: true, placeholder: "Email", value: user.email, onChange: handleInputs }),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("textarea", { id: "message", name: "message", required: true, placeholder: "Message", value: user.message, onChange: handleInputs }),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("input", { type: "submit", value: "Leave a comment" })))))));
};
exports.default = Contact;
