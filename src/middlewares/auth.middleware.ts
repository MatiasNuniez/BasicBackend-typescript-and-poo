import { Request, Response, NextFunction } from "express";
import { SECRETTOKEN } from "../config";
import jwt from "jsonwebtoken";
import { registerModel } from "../models/register.model";

export class AuthMiddleware {

  private key: string

  constructor() {
    this.key = SECRETTOKEN || ""
  }

  async verifyIdentity(req: Request, res: Response, next:NextFunction){
    try {
      const { token } = req.cookies
      const { user } = req.cookies
      const verify = jwt.verify(token, this.key)
      if (user != '') {
        await registerModel.find({ user: { $eq: user } }).then((data) => {
          if ((data[0].admin === true) && (verify)) {
            next()
          }else{
            res.send({error:"No tienes los permisos para realizar esta funcion"})
          }
        })
      } else {
        res.send({ error: 'El usuario no existe' })
      }

    } catch (error) {

    }
  }
}