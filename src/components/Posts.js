import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <h2 className="header text-primary text-center">
        Fetching Posts from JSON Placeholder...
      </h2>
    );
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <a
          href="!#"
          key={post.id}
          className="list-group-item list-group-item-action flex-column align-items-start mb-4"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
            <small className="text-muted">{post.id}</small>
          </div>
          <p className="mb-1">{post.body}</p>
        </a>
      ))}
    </ul>
  );
};

export default Posts;
