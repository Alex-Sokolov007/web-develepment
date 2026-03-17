import Test from "./models.js";

class PostService{
    async create(post){
            const create_post = await Test.create(post)
            return create_post
    }

    async get_all(post){
        const post = await Test.find(post)
        return post
    }

    async get_one(id){
        if(!id){throw new Error('Не указан id')}
        const post = await Test.findById(id)
        return post
    }

    async apdete(post){
            if(!post._id){throw new Error('Не указан id')}
            const update_post = await Test.findByIdAndUpdate(post._id, post, {new: true})
            return update_post    
    }

    async delete(id){
            if (!id){throw new Error('Не указан id')}
            const post = await Test.findByIdAndDelete(id)
            return post
    }
}

export default new PostService()