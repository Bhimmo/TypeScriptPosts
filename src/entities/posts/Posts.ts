import { PostsInterface } from './PostsInterface';

export class EntitiesPosts{

    constructor(private readonly postInterface: PostsInterface) {}

    async save(title: string, description: string) {
        return await this.postInterface.savePosts(title, description);
    }
    async findAll() {
        return await this.postInterface.findAll();
    }
    async findOne(id: string) {
        return await this.postInterface.findOne(id);
    }
    async likePost(id: string, likes: number) {
        return await this.postInterface.likePost(id, likes);
    }
}