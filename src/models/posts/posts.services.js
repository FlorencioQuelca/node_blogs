const postControllers = requiere('./posts.controllers.js')
const getAllPost = (req, res) => {
    postControllers.findAllPost()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(e => {
            res.status(400).json({ message: e.message })
        })
}

const createNewPost = (req, res) => {
    const { title, content, coverUrl, categoryId } = req.body
    const userId = req.user.id
    postControllers.createNewPost({ title, content, coverUrl, categoryId, userId })
        .get(data => {
            res.status(201).json(data)
        })
        .catch(e => {
            res.status(400).json({ message: e.message })
        })
}
exports = {

}