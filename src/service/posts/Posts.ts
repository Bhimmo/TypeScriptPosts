import { EntitiesPosts } from "../../entities/posts/Posts";
import { PostsRepository } from '../../entities/posts/PostsRepository';


export default class PostsService {

    createdPost(title: string, description: string) {
        const postsRepository = new PostsRepository();
        const postEntities = new EntitiesPosts(postsRepository);

        //salvar
        const save = postEntities.save(title, description);

        //resultados
        return save;
    }

    getAllPosts() {
        const postsRepository = new PostsRepository();
        const postEntities = new EntitiesPosts(postsRepository);

        //pegar
        const getAll = postEntities.findAll();

        return getAll;
    }

    getOnePost(id: string) {
        const postsRepository = new PostsRepository();
        const postEntities = new EntitiesPosts(postsRepository);

        //pegar
        const getOne = postEntities.findOne(id);

        return getOne;
    }

    async likePost(id: string) {
        const postsRepository = new PostsRepository();
        const postEntities = new EntitiesPosts(postsRepository);

        //verificar se existe post
        const getOne: any = await postEntities.findOne(id);

        if (getOne) {
            let likes: number = getOne.likes;
            likes += 1;
            const postUpdate = await postEntities.likePost(id, likes);
            return postUpdate;
        }
    }
}