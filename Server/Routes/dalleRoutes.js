

import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

router.route('/').get((req, res) => {
    res.send('GET Route From Dalle routes')
})

router.route('/').post(async (req, res) => {
    try {
        console.log('REQ BODY: ',req.body);
        const {prompt} = req.body;
        console.log('prompt', prompt)
        const apiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        // console.log('apiResponse', apiResponse.data);
        const image = apiResponse.data[0].b64_json;

        // Now finally send this image in the route response
        res.status(200).json({photo: image})

    } catch (error) {
        console.log('Error creating image', error)
        res.status(500).send(error?.response?.data?.error.message)
    }
})

export default router;