import { PostsInterface } from "./PostsInterface";
import prisma from '../../lib/prisma';

export class PostsRepository implements PostsInterface{
    title?: string;
    description?: string;
    likes = 0;

    async savePosts (title: string, description: string) {
        this.title = title;
        this.description = description;
        const likes = this.likes;

        const result = await prisma.posts.create({
            data: {title, description, likes}
        });
        return result;
    };

    async findAll() {
        const find = await prisma.posts.findMany();

        return find;
    }

    async findOne(id: string) {
        const find = await prisma.posts.findUnique({
            where: {
                id: id
            }
        });
        return find;
    }

    async likePost (id: string, likes: number)  {
        const likesUpdate = await prisma.posts.update({
            where: {
                id: id
            },
            data: {
                likes: likes
            }
        });
        return likesUpdate;
    };

}