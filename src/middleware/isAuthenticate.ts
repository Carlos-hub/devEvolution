import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
export async function isAuthenticate(
 request: Request,
 response: Response,
 next:NextFunction
){
 const token = request.headers.authorization?.split(' ')[1];
  const isAuth = decode(token ?? '',{complete: true})
  if(isAuth){
    next();
  }else{
    return response.status(403).json("Access Denied");
  }
}