import express from 'express'
import cookieParser from 'cookie-parser'
import { LoginRouter } from './routes/login.route'
import { ItemRoute } from './routes/items.route'
import { RegisterRouter } from './routes/register.route'
import { MercadoPagoConfig, Preference } from 'mercadopago'
import { PORT, ACCESS_TOKEN_MERCADOPAGO } from './config'

import db from './db'
require('dotenv').config()

class Server extends db {

    public app: express.Application = express();
    private port: number = parseInt(PORT || '3000')
    private configMercadopago: string | undefined = ACCESS_TOKEN_MERCADOPAGO

    constructor() {
        super()

        this.app.set('port', this.port)

        this.app.set('configMercadopago', this.configMercadopago)

        this.app.use(express.json())
        
        this.app.use(cookieParser())

        this.app.use('/api', this.routers())


        this.listen()

        this.initDB()

        this.pago()

    }

    routers(): Array<express.Router> {
        return [new LoginRouter().router, new ItemRoute().router, new RegisterRouter().router]
    }

    public listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server escuchando el puerto ${this.app.get('port')}`);
        })
    }

    public pago() {
        this.app.post('/pago', (req, res) => {
            const client = new MercadoPagoConfig({ accessToken: this.app.get('configMercadopago') })
            const preference = new Preference(client);

            const items = req.body.carrito

            preference.create({
                body: {
                    items: items,
                }
            })
                .then(console.log)
                .catch(console.log);

        })
    }

}

new Server();