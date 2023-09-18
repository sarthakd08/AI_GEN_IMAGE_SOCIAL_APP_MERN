


import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from '../MongoDB/models/posts.js';

dotenv.config();
const router = express.Router();

// LINK CLOUDINARY WITH CONFIG
// cloudinary.config({ 
//   cloud_name: 'dv1s9rxma', 
//   api_key: '379947593562385', 
//   api_secret: 'Rk9F6fY1tV2rOQekP8Pa_0FbzM8' 
// });

// GET ALL POSTS
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({}); // get all posts
        res.status(200).json({success: true, data: posts});
    } catch (error) {
        res.status(500).json({success: false, message: error});
    }
})

// CREATE A POST
router.route('/').post(async(req, res) => {
    try {
        const {name, prompt, photo} = req.body; // GETTING THESE FROM FE
        const photoOptimisedUrl = cloudinary.uploader.upload(photo);
    
        const newPost = await Post.create({
            name,
            prompt,
            photo: photo //photoOptimisedUrl.url
        })
        console.log("HHHHH ", newPost)
    
        res.status(200).json({success: true, data: newPost});
        
    } catch (error) {
        console.log('Error Posting to mongo')
        // res.status(500).json({success: false, message: error})
    }

})



export default router;