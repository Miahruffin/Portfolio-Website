import React from 'react';
import './BlogGallery.css'; // Ensure CSS is correctly linked

const BlogGallery = () => {
    // Dummy data for the blog posts
    const posts = [
        { id: 1, title: "Post One", summary: "Summary of post one..." },
        { id: 2, title: "Post Two", summary: "Summary of post two..." },
        { id: 3, title: "Post Three", summary: "Summary of post three..." },
        // Add more posts as needed
    ];

    return (
        <div className="blog-gallery component-full-height">
            <h2>Latest Blog Posts</h2>
            <p>Check out our latest blog posts below.</p>
            <div className="cards">
                {posts.map((post) => (
                    <div key={post.id} className="card">
                        <h3>{post.title}</h3>
                        <p>{post.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogGallery;

