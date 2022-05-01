import { PostsInterface } from './PostsInterface';

export class EntitiesPosts{

    constructor(private readonly postInterface: PostsInterface) {}

    async save(title: string, description: string) {
        return await this.postInterface.savePosts(title, description);
    }
}