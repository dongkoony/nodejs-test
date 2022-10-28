const { Router } = require("express")
const express = require("express")

const postcontroller = require("../controllers/postcontrollers")

const router = express.Router()


/// localhost:8000/ ///
router.router("/")
.get(postcontroller.getAllPosts)
.post(postcontroller.createPost);

router.route("/:id")
.get(postcontroller.getOnePost)
.patch(postcontroller.updatePost)
.delete(postcontroller.deletePost);

module.exports = router;