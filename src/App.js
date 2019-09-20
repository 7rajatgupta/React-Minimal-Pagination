import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  //*State:
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const FetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    FetchPosts();
  }, []);

  //* Get current page posts:
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  //*Page Transition:
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-3">React Simple Pagination</h2>
      <h6 className="text-secondary text-center mb-5">
        Simple and Clean. Posts by JSON Placeholder
      </h6>
      <Posts posts={currentPagePosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <h6 className="text-secondary text-center mb-5">GitHub : @7rajatgupta</h6>
    </div>
  );
};

export default App;
