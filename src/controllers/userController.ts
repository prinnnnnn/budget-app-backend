import { Request, Response } from "express";
import UserModel from "../models/userModel";

/* / */
export const getAllUsersInfo = async (req: Request, res: Response) => {

    console.log(`Retrieving every users in database...`);

    try {
        const foundUsers = await UserModel.find({});

        if (!foundUsers) {
            return res.sendStatus(400);
        }

        return res.status(200).send(foundUsers);

    } catch (error) {
        console.error(`Error retrieving all users`, error);
        return res.sendStatus(400);
    }

}

/* /:name */
export const getUserInfo = async (req: Request, res: Response) => {
    
    console.log(`Retrieving user info...`);

    try {
        
        const username = req.params.name;
        const userInfo = await UserModel.findOne({ "name": username});

        if (!userInfo) {
            return res.sendStatus(404);
        }

        return res.status(200).send(userInfo?.toJSON());

    } catch (error) {
        console.error(`Error retrieving user info: `, error);
        return res.sendStatus
    }

}