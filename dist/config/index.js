"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRETTOKEN = exports.DBURL = exports.ACCESS_TOKEN_MERCADOPAGO = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.PORT = _a.PORT, exports.ACCESS_TOKEN_MERCADOPAGO = _a.ACCESS_TOKEN_MERCADOPAGO, exports.DBURL = _a.DBURL, exports.SECRETTOKEN = _a.SECRETTOKEN;
