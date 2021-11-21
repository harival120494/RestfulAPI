import { Request, Response, NextFunction } from "express";
import {Connect, Query} from "../config/mysql";
import {M_Login} from "../models/M_Login";                      //Import M_login model
import bcrypt from "bcrypt";

const GetUser = (req : Request, res : Response, next : NextFunction) => {
    Connect().
    then(connection => {
       Query(connection, M_Login.getAllUser)
       .then(results => {
           return res.status(200).json({results});
       })
       .catch(error => {
           console.log(error);
       })
    })
    .catch(error => {
        console.log(error);
    })
};

const Login = (req : Request, res : Response, next : NextFunction) => {
    let {username, password} = req.body;
    if(!req.body.username || !req.body.password)
    {
        return res.status(400).json({"message":"Opps username is mandatory"})
    }
    else {
        Connect()
        .then(connection => {
            Query(connection, M_Login.query_login(username, password))
            .then(results => {
                return res.status(200).json({results})
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
};

const UpdateUser = (req : Request, res : Response, next : NextFunction) => {
    let {user_id, username, password} = req.body;
    if(!req.body.username || !req.body.password)
    {
        return res.status(400).json({"message":"Opps username is mandatory"})
    }
    else {
        Connect().
        then(connection => {
            Query(connection, M_Login.query_update(username, password, user_id))
            .then(results => {
                return res.status(200).json({"message":"Data updated"});
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
};

const DeleteUser =(req : Request, res :  Response, next : NextFunction) => {
    let {user_id} = req.params;
    
    Connect()
    .then(connection => {
        Query(connection, M_Login.query_delete(user_id))
        .then(results => {
            return res.status(200).json(results);
        })
        .catch(error => {
            console.log(error);
        })
    })
    .catch(error => {
        console.log(error);
    })
};

const AddUser =  async (req : Request, res : Response, next : NextFunction) => {
    let {username, password, role} = req.body;
   
    Connect()
    .then(async connection => {
        Query(connection, M_Login.query_add(username, await password, role))
        .then(results => {
            return res.status(200).json(results);
        })
        .catch(error => {
            console.log(error);
        })
    })
    .catch(error => {
        console.log(error);
    })
};

export default {Login, GetUser, UpdateUser, DeleteUser, AddUser};