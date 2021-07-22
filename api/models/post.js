const db = require ('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.story = data.story
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static create(title, name, story){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, name, story) VALUES ($1, $2, $3) RETURNING *;`, [ title, name, story ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating Post');
            }
        });
    }



}

module.exports = Post;