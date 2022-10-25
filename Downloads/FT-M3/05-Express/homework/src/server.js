// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
let id = 1;

server.post('/posts', (req, res) => {
    const {author, title, contents} = req.body;

    if(!author || !title || !contents){
        return res.status(STATUS_USER_ERROR).json(
            {error: "No se recibieron los parámetros necesarios para crear el Post"}
        )
    }

    const newPost = {
        id: id++,
        author,
        title,
        contents
    }

    posts.push(newPost)
    return res.status(200).json(newPost)
})

server.post('/posts/author/:author', (req, res) => {
    const {title, contents} = req.body;
    const {author} = req.params;

    if(!author || !title || !contents){
        return res.status(STATUS_USER_ERROR).json(
            {error: "No se recibieron los parámetros necesarios para crear el Post"}
        )
    }

    const newPost = {
        id: id++, 
        author,
        title,
        contents
    }

    posts.push(newPost)
    return res.status(200).json(newPost)
})
// body -> json que me llega para agregar info
// params -> me determina una ruta
// query -> es opcional, no me determina una ruta

server.get('/posts', (req, res) => {
    const {term} = req.query;

    if(term){
        const filterPosts = posts.filter(
            post => post.title.includes(term) || post.contents.includes(term)
        )

        return res.status(200).json(filterPosts)
    }
    else{
        return res.status(200).json(posts)
    }
})

server.get('/posts/:author', (req, res) => {
    const {author} = req.params;
    // const author = req.params.author

    const postAuthor = posts.filter(
        post => post.author === author
    )

    if(postAuthor.length){
        return res.status(200).json(postAuthor)
    }
    else{
        return res.status(STATUS_USER_ERROR).json(
            {error: "No existe ningun post del autor indicado"}
        )
    }
})

server.get('/posts/:author/:title', (req, res) => {
    const {author, title} = req.params;

    const postAuthor = posts.filter(
        post => post.author === author && post.title === title
    )

    if(postAuthor.length){
        return res.status(200).json(postAuthor)
    }
    else{
        return res.status(STATUS_USER_ERROR).json(
            {error: "No existe ningun post con dicho titulo y autor indicado"}
        )
    }
})

server.put('/posts', (req, res) => {
    const {id, title, contents} = req.body;

    if(!id || !title || !contents){
        return res.status(STATUS_USER_ERROR).json(
            {error: "No se recibieron los parámetros necesarios para modificar el Post"}
        )
    }
    else{
        const findPost = posts.find(
            post => post.id === parseInt(id)
        )

        if(findPost){
            findPost.title = title;
            findPost.contents = contents;

            return res.status(200).json(findPost)            
        }
        else{
            return res.status(STATUS_USER_ERROR).json(
                {error: 'ID inválido'}
            )
        }
    }
})


server.delete('/posts', (req, res) => {
    const {id} = req.body;

    const findPost = posts.find(
        post => post.id === parseInt(id)
    )

    if(!id || !findPost){
        return res.status(STATUS_USER_ERROR).json(
            {error: "ID inválido"}
        )
    }
    else{
        posts = posts.filter(
            post => post.id !== parseInt(id)
        )

        return res.status(200).json(
            { success: true }
        )
    }
})

server.delete('/author', (req, res) => {
    const {author} = req.body;

    const filterPost = posts.filter(
        post => post.author === author
    )

    if(!author || !filterPost.length){
        return res.status(STATUS_USER_ERROR).json(
            {error: "No existe el autor indicado"}
        )
    }
    else{
        posts = posts.filter(
            post => post.author !== author
        )

        return res.status(200).json(filterPost)
    }
})


module.exports = { posts, server };
