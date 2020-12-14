var PostMessage = require('../models/postMessage')

module.exports = getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = createPost = async(req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        // https://www.restapitutorial.com/httpstatuscodes.html
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}