const findAllPost = async() => {

}

const createPost = async(obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        coverUrl: obj.coverUrl,
        categoryId: obj.categoryId
    })
    return data
}
exports = {
    findAllPost,
    createPost
}