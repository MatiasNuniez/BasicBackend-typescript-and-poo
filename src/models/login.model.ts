import mongoose from "mongoose";

export default class schemaLogin {

    public loginSchema

    public model

    constructor(){
        this.loginSchema = new mongoose.Schema({
            user: {
                type: String,
                required:true,
                unique: true
            },
            password: {
                type: String,
                required: true
            }
        }, {
            versionKey: false,
            timestamps: true
        })
        this.model = mongoose.model('users', this.loginSchema)
    }
}