import { connect } from "mongoose";
require('dotenv').config()

export default class connection {

    private URI: any = process.env.DBURL

    public async initDB() {

        console.log("hola");
        
        
        try {
            let result = await connect(this.URI)
            console.log('Base de datos conectada correactamente')
        
        } catch (error) {
            console.log(error);
            
        }
    }

}