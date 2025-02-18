// import { useState } from "react";

const blogPosts = [
    `"1. Minimalismo Digitale: Come Ridurre il Rumore Online"
     In un mondo sempre più connesso, imparare a ridurre le distrazioni digitali è essenziale. Scopri strategie per semplificare la tua vita online e concentrarti su ciò che conta davvero.`,

    `"2. Il Potere del Colore nel Web Design"
     I colori influenzano le emozioni e il comportamento degli utenti. Scopri come scegliere la palette giusta per il tuo sito e creare un’esperienza visiva efficace.`,

    `"3. Fotografia Documentaria: Raccontare Storie con le Immagini"
     La fotografia è un potente strumento narrativo. Ecco alcuni consigli per catturare immagini che parlano e comunicano emozioni autentiche.`,

    `"4. JavaScript per Principianti: Funzioni Essenziali da Conoscere"
     Sei agli inizi con JavaScript? Ecco alcune funzioni fondamentali che ti aiuteranno a migliorare il tuo codice e scrivere programmi più efficienti.`,

    `"5. Come Creare un Portfolio Online Efficace"
     Un portfolio ben strutturato è essenziale per attrarre clienti. Scopri gli elementi chiave per mostrare il tuo lavoro al meglio e lasciare un’impressione duratura.`
];



export default function BlogPost() {



    return (
        <ul>
            {blogPosts.map((post, i) => (
                <li className="post" key={i}>
                    {/* <h3>{post.title}</h3> */}
                    <p>{post}</p>
                    <div className="post-lower-wrapper">
                        <div className="left">
                            {/* <p className="author">{post.author}</p>
                            <p className="date">{post.date}</p> */}
                        </div>
                        {/* <ul className="tags">
                            {post.tags.map((tag) => (
                                <li key={tag}>{tag + " /"}</li>
                            ))}
                        </ul> */}
                    </div>
                </li>
            ))}
        </ul>

    )
}