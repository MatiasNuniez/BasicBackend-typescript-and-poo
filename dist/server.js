"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_route_1 = require("./routes/login.route");
const items_route_1 = require("./routes/items.route");
const register_route_1 = require("./routes/register.route");
const mercadopago_1 = require("mercadopago");
const db_1 = __importDefault(require("./db"));
require('dotenv').config();
class Server extends db_1.default {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.configMercadopago = process.env.ACCESS_TOKEN_MERCADOPAGO;
        this.app.set('port', this.port);
        this.app.set('configMercadopago', this.configMercadopago);
        this.app.use(express_1.default.json());
        this.app.use('/api', this.routers());
        this.listen();
        this.initDB();
        this.pago();
    }
    routers() {
        return [new login_route_1.loginRouter().router, new items_route_1.itemRoute().router, new register_route_1.registerRouter().router];
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server escuchando el puerto ${this.app.get('port')}`);
        });
    }
    pago() {
        this.app.post('/pago', (req, res) => {
            const client = new mercadopago_1.MercadoPagoConfig({ accessToken: this.app.get('configMercadopago') });
            const preference = new mercadopago_1.Preference(client);
            const items = req.body.carrito;
            preference.create({
                body: {
                    items: items,
                }
            })
                .then(console.log)
                .catch(console.log);
        });
    }
}
new Server();
