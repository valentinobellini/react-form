import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Zuppa di Nebbia e Luci"
    },
    {
        id: 2,
        title: "Risotto di Stelle e Ombre"
    },
    {
        id: 3,
        title: "Insalata di Venti e Fiori di Luce"
    },
    {
        id: 4,
        title: "Torta di Nuvole e Polvere di Sogno"
    },
    {
        id: 5,
        title: "Pasta al Raggio di Luna e Fumo di Primavera"
    }
];



export default function BlogPost() {

    // stato della lista posts
    const [posts, setPosts] = useState(blogPosts)
    // stato dell'input inserimento post
    const [newPost, setNewPost] = useState('');

    // funzione per l'aggiunta di un nuovo post da input
    const addPost = e => {
        e.preventDefault();


        // crea nuovo oggetto post
        const newPostObject = {
            id: posts.length + 1,
            title: newPost
        };


        // aggiungi il nuovo post alla lista
        const updatedPosts = [...posts, newPostObject];
        setPosts(updatedPosts);
        // azzeriamo il valore di newPost in input
        setNewPost('');
    }


    // funzione per la rimozione del post
    const removePost = i => {
        const updatedPosts = posts.filter((post, index) => {
            return index !== i
        });
        setPosts(updatedPosts);
    }


    return (

        <>
            {/* form per aggiunta post */}
            <p className="input-caption" >AGGIUNGI UNA RICETTA</p>
            <form onSubmit={addPost}>
                <input type="text" value={newPost}
                    onChange={event => { setNewPost(event.target.value) }}
                />
                <button>Invia</button>
            </form >


            {/* lista post */}
            <ul>
                {posts.map((post, i) => (
                    <li className="post" key={post.id}>
                        <p>{post.title}</p>
                        <button className="remove" onClick={() => removePost(i)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}