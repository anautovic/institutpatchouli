import React from 'react'
import style from '../../styles/Galerie.module.css'

const Categories = ({ categories, filterItems }) => {
    return (
      <div>
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
        <style jsx>
            {
                `
                
  .filter-btn {
	background: transparent;
	border-color: transparent;
	font-size: 1rem;
	text-transform: capitalize;
	margin: 0 0.5rem;
	letter-spacing: 1px;
	padding: 0.375rem 0.75rem;
	color: orange;
	cursor: pointer;
	transition: all 0.3s linear;;
	border-radius: 0.25rem;
  }
  .filter-btn:hover {
	background: orange;
	color: #fff;
  }
                `
            }
        </style>
      </div>
    );
  };
  

export default Categories
