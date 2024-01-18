import mongoose from "mongoose";

export default class schemaRegister {

    public registerSchema

    public model

    constructor() {
        this.registerSchema = new mongoose.Schema({
            user: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            admin: {
                type: Boolean,
                default: false
            }
        }, {
            versionKey: false,
            timestamps: true
        })

        this.model = mongoose.model('user', this.registerSchema)

    }


}