import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({book}) => {
    const rating = 4;
    return (

    <div className="book">
        <a href="">
            <figure className='book__img--wrapper'>
                <img className='book__img' 
                src= {book.url}/>
            </figure>
        </a>
        <div className="book__title">
            <a href="/" className='book__title--link'>
                {book.title}
            </a>
        </div>
        <div className="book__ratings">
            {
            new Array(4).fill(0).map((_, index) => <FontAwesomeIcon icon='star' key={index}/> )
            }
        </div>
        <div className="book__price">
            {
                book.salePrice ? (
                 <><span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                ${book.salePrice.toFixed(2)}</>
                )
                : <>${book.originalPrice.toFixed(2)}</>
            }
   
        </div>
    </div>
    );
}

export default Book;
