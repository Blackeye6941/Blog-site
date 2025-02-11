// const users = [
//     {id:1, name:"Joe"},
//     {id:2, name:"Jack"},
//     {id:3, name:"Oggy"},
//     {id:4, name:"Marco"},

import { Post, User } from "./model";
import { connectToDb } from "./utils";

    
// ]
// const posts = [
//     {id:1, title:"Post 1", body:".......", userId:1},
//     {id:2, title:"Post 2", body:".......", userId:1},
//     {id:3, title:"Post 3", body:".......", userId:3},
//     {id:4, title:"Post 4", body:".......", userId:2},
//     {id:5, title:"Post 5", body:".......", userId:4}
// ]

export const getPosts = async () =>{
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.find({slug});
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (id) =>{
    try{
       connectToDb();

       const user = await User.findById(id);
       return user;
   }
   catch(err){
    console.log(err);
   }
}

export const getUsers = async () =>{
    try{
       connectToDb();

       const users = await User.find();
       return users;
   }
   catch(err){
    console.log(err);
   }
}