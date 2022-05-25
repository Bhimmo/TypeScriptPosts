export interface PostsInterface {
    savePosts: (title: string, description: string) => {}
    findAll: () => {}
    findOne: (id: string) => {}
    likePost: (id: string, likes: number) => {}
}