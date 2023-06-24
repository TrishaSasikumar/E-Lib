import React, { useEffect, useState, useContext } from 'react';
import Fixed from '../components/fixed';
import { config } from '../config';
import { CartContext } from '../components/cartContext';

const Shopping = () => {
  const { addToCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
   
    fetchBooks(currentPage);
  }, [currentPage]);

  const fetchBooks = (page) => {
    fetch(`${config.apiRoute}/books/list`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };
  const handleAddToCart = (book) => {
    addToCart(book);
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Fixed>
      <div className="shopping-container">
        <h1>Shopping Page</h1>
        {/* Render books thumbnails */}
        <div className="thumbnails">
          {books.map((book) => (
            <div key={book.id} className="thumbnail">
              <img src={book.thumbnailUrl} alt={book.title} />
              <div className="details">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Price: {book.price}</p>
                <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button id="pagination-link"
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div> */}
      </div>
    </Fixed>
  );
};

export default Shopping;
