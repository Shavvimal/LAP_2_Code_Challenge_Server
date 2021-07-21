const postData = [
    { id: 1, title: 'Mochi', name: 1, content: 2 },
    { id: 2, title: 'Masha', name: 9, content: 2 },
    { id: 3, title: 'Jillaroo', name: 11, content: 1 }
]

class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    };

    static get all() {
        const posts = postsData.map(d => new Post(d))
        return posts
    }

    static findById (id) {
        const data = postsData.find(d => d.id === id)
        const post = new Post(data)
        return post
    }

    static findByOwner (id) {
        const data = postsData.filter(d => d.ownerId === id)
        const posts = data.map(d => new Post(d))
        return posts
    }

    static create(name, age){
        const newData = { id: postsData.length + 1, name, age: parseInt(age) }
        postsData.push(newData)
        const newpost= new Post(newData)
        return newPost
    }

    update(updateData) {
        const postData = postsData.find(d => d.id === this.id)
        const idx = postsData.indexOf(postData)
        const updatedPostData = { ...postData, ...updateData }
        postsData[idx] = updatedPostData
        const updatedPost = new Post(updatedPostData)
        return updatedPost
    }


}

module.exports = Post;