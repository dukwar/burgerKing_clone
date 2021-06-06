import React from 'react';
import PropTypes from "prop-types";



const Categories = React.memo(function Categories({items, activeCategory, onClick}) {



    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null && 'active'} onClick={() => onClick(null)}>Все</li>
                {items && items.map((item, index) => <li
                    className={index === activeCategory && 'active'}
                    onClick={() => onClick(index)} key={`${item}_${index}`}>{item}</li> )}
            </ul>
        </div>
    );
})

Categories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func
}

Categories.defaultProps = {
    activeCategory: null,
    items: []
}



export default Categories;