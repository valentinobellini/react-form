import BlogPost from "./BlogPosts";

export default function Blog() {

    return (
        <div className="blog-container">
            <div className="blog">
                <h2 className="title">BLOG</h2>
                <BlogPost />
            </div>
        </div>
    )
}