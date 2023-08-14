import React, { useState } from 'react';

const PaginationExample = () => {
  const allItems = Array.from({ length: 100 }, (_, index) => index + 1); // Example list of items

  const pageLimit = 10; // Page size
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const currentItems = allItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allItems.length / pageLimit);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
