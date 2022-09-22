"use strict";
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
exports.editUserId = void 0;
const connection_1 = __importDefault(require("../connection"));
const editUserId = (idParams, name, nickname) => __awaiter(void 0, void 0, void 0, function* () {
    if (name === "" && nickname) {
        yield connection_1.default.raw(`
        UPDATE Users SET nickname = "${nickname}" WHERE id = "${idParams}"
    `);
    }
    else if (name && nickname === "") {
        yield connection_1.default.raw(`
            UPDATE Users SET name = "${name}" WHERE id = "${idParams}"
        `);
    }
    else if (name && nickname) {
        yield connection_1.default.raw(`
            UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = "${idParams}"
        `);
    }
});
exports.editUserId = editUserId;
