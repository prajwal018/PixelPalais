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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_card_flip_1 = __importDefault(require("react-card-flip"));
const Flip = () => {
    const [flip, setFlip] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_card_flip_1.default, { isFlipped: flip, flipDirection: "horizontal" },
        react_1.default.createElement("div", { className: "react-card-front" },
            react_1.default.createElement("div", { className: "flip-switch", onClick: () => setFlip(!flip), style: {
                    borderRadius: "100px",
                    backgroundColor: "#eee",
                    width: "15rem",
                    height: "15rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                } },
                react_1.default.createElement("span", null, "Flip Me"))),
        react_1.default.createElement("div", { className: "react-card-back", onClick: () => setFlip(!flip), style: {
                borderRadius: "100px",
                backgroundColor: "#eee",
                width: "15rem",
                height: "15rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            } },
            react_1.default.createElement("div", { className: "card-body" },
                react_1.default.createElement("h4", { className: "card-title" }, "Client Testimonials"),
                react_1.default.createElement("p", { className: "card-text", style: { overflow: "hidden", textAlign: "center" } }, "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."),
                react_1.default.createElement("h5", { className: "card-subtitle mb-2 text-muted" }, "Ronald Green"),
                react_1.default.createElement("h6", { className: "card-subtitle mb-2 text-muted" }, "UX Designer")))));
};
exports.default = Flip;
