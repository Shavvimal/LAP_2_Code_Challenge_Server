const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM posts;')
                const posts = result.rows.map(a => ({ id: a.id, title: a.title, pseudonym: a.pseudonym, body: a.body }))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving Posts");
            }
        })
    };

};