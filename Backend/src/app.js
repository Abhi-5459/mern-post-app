const express = require('express');
const multer = require('multer'); // file ko read karne ke liye multer ka use karte hai express me
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.models');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json()); // ye middleware raw data ko parse karne ke liye use hota hai

const upload = multer({storage: multer.memoryStorage()})


app.post('/api/create-post', upload.single("image"), async (req, res)=> {

     const result = await uploadFile(req.file.buffer);

     const post = await postModel.create({
         image: result.url,
         caption: req.body.caption 
     })

     return res.status(201).json({
        message: "post created successfully",
        post
     })

})


app.get('/api/posts',async (req, res)=> {
    const posts = await postModel.find()

    res.status(200).json({
        message: "post fetched successfully",
        posts
    })
})

module.exports = app