import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="header">Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <a
          key={post.id}
          class="list-group-item list-group-item-action flex-column align-items-start mb-4"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{post.title}</h5>
            <small class="text-muted">{post.id}</small>
          </div>
          <p class="mb-1">{post.body}</p>
        </a>
      ))}
    </ul>
  );
};

export default Posts;
