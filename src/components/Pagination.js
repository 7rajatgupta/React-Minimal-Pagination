import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  //*Calculate the number of pages :
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination justify-content-center mb-5">
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
