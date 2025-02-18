import { useState } from "react";

const blogPosts = [
    `Minimalismo Digitale: Come Ridurre il Rumore Online`,

    `Il Potere del Colore nel Web Design`,

    `Fotografia Documentaria: Raccontare Storie con le Immagini`,

    `JavaScript per Principianti: Funzioni Essenziali da Conoscere`,

    `Come Creare un Portfolio Online Efficace`
];



export default function BlogPost() {

    // stato della lista posts
    const [posts, setPosts] = useState(blogPosts)
    // stato dell'input inserimento post
    const [newPost, setNewPost] = useState('');

    // funzione per l'aggiunta di un nuovo post da input
    const addPost = e => {
        e.preventDefault();
        const updatedPost = [...posts, newPost];
        setPosts(updatedPost);
        // azzeriamo il valore di newPost in input
        setNewPost('');
    }


    return (

        <>
            {/* form per aggiunta post */}
            <form onSubmit={addPost}>
                <input type="text" value={newPost}
                    onChange={event => { setNewPost(event.target.value) }}
                />
                <button>Invia</button>
            </form >


            {/* lista post */}
            <ul>
                {posts.map((post, i) => (
                    <li className="post" key={i}>
                        {/* <h3>{post.title}</h3> */}
                        <p>{post}</p>
                        <div className="post-lower-wrapper">
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}