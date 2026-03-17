import Test from "./models.js";
import PostService from './models_service'

class Post_controller {
    async create(req, res){
        try{
            const {name, age} = req.body
            const Test = Test.create(name, age)
            res.json(post)
            // const post = await PostService.create(req.body)
        }
        catch(e){
            res.status(500).json(e)
        }
    }

    async get_all(req, res){
        try{
            const post = await Test.find()
            return res.json(post)
            // const post = await PostService.get_all()
        }
        catch (e){
            res.status(500).json(e)
        }
    }

    async get_one(req, res){
        try{
            const {id} = req.params
            if (!id){return res.status(400).json('Id не указан')}
            const post = await Test.findById(id)
            return res.json(post)
            // const post = await PostService.get_one(id)
        }
        catch (e){
            res.status(500).json(e)
        }
    }

    async apdete(req, res){
        try{
            const post = await req.body
            if(!post._id){return res.status(400).json('Id не указан')}
            const update_post = await Test.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(update_post)
            // const post = await PostService.apdete(req.body)
        }
        catch (e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params
            if (!id){return res.status(400).json('Id не указан')}
            const post = await Test.findByIdAndDelete(id)
            return res.json(post)
            // const post = await PostService.delete(req.param.id)
        }
        catch (e){
            res.status(500).json(e)
        }
    }
}

export default new Post_controller()