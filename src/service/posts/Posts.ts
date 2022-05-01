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
}