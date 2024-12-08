import React from 'react';

const AllPosts = () => {
  const posts = [
    { id: 1, title: "8 Figma design systems that you can download for free today.", date: "May 23, 2022", author: "John Doe" },
    { id: 2, title: "8 Figma design systems that you can download for free today.", date: "May 23, 2022", author: "John Doe" },
    { id: 3, title: "8 Figma design systems that you can download for free today.", date: "May 23, 2022", author: "John Doe" },
    { id: 4, title: "8 Figma design systems that you can download for free today.", date: "May 23, 2022", author: "John Doe" },
    { id: 5, title: "8 Figma design systems that you can download for free today.", date: "May 23, 2022", author: "John Doe" },
  ];

  return (
    <div className="all-posts">
      <div className="header">
        <h2>All Posts</h2>
        <a href="#view-all" className="view-all">View All</a>
      </div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <p className="meta">
            By {post.author} | {post.date}
          </p>
          <h3 className="title">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
