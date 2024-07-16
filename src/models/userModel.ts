import { Document, Schema, model } from "mongoose";

/*

{
  "_id": ObjectId("60d5ec49d2f1b2a5c88b2b2e"),
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "hashed_password",
  "createdAt": "2023-06-30T12:34:56.789Z",
  "updatedAt": "2023-06-30T12:34:56.789Z"
}

*/

interface User extends Document<string> {
    name: string
}

const UserSchema: Schema = new Schema({
    "name": { type: String, required: true }
});

const UserModel = model<User>("User", UserSchema, "User");

export default UserModel;