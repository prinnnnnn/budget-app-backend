import { Request, Response } from "express";
import User from "../models/userModel";

/* GET- / */
export const getAllUsersInfo = async (req: Request, res: Response) => {

    console.log(`Retrieving every users in database...`);

    try {
        const foundUsers = await User.find({});

        if (!foundUsers) {
            return res.sendStatus(400);
        }

        return res.status(200).send(foundUsers);

    } catch (error) {
        console.error(`Error retrieving all users`, error);
        return res.sendStatus(400);
    }

}

/* GET - /:name */
export const getUserInfo = async (req: Request, res: Response) => {
    
    console.log(`Retrieving user info...`);

    try {
        
        const username = req.params.name;
        const userInfo = await User.findOne({ "name": username});

        if (!userInfo) {
            return res.sendStatus(404);
        }

        return res.status(200).send(userInfo?.toJSON());

    } catch (error) {
        console.error(`Error retrieving user info: `, error);
        return res.sendStatus
    }

}

/* POST - /:name */
export const createUser = async (req: Request, res: Response) => {

    try {
        
        const username = req.params.name;

        const foundUser = await User.findOne({ name: username });

        if (!foundUser) {

            const newUser = new User({ 
                name: username,
                budgetsCount: 0
            })        
    
            await newUser.save();
            
            return res.status(200).send(newUser.toJSON());
        }

        return res.status(200).send(foundUser.toJSON());

    } catch (error) {
        console.error('Error creating a user', error);
        return res.sendStatus(400);
    }

}