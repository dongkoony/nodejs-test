const Post = require("../models/postModel")

// 모든 게시물 검색 //
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()

        res.status(200).json({
            status: "succes",
            results: posts.length,
            data:{
                posts
            },
        });
    }   catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};
// localhost:8000/posts/:id //

// 개별 게시물 검색 //
exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(200).json({
            status: "succes",

            data:{
                post,
            },
        });
    }   catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};

// 새로운 게시물 //
exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body)

        res.status(200).json({
            status: "succes",

            data:{
                post,
            },
        });
    }   catch (e) {
        console.log(e);
        res.status(400).json({
            status: "fail",
        });
    }
};

// 업데이트 //              // Arrow Function //
exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "succes",

            data:{
                post,
            },
        });
    }   catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};


// 삭제 //
exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "succes",
        });
    }   catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};