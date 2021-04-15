import Post from "./Post.js"

class PostController{
    async create(req,res){
        try{
            const {title, content, author} = req.body// дисттруктуризация
            const post = await Post.create({title, content, author})
            res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController()