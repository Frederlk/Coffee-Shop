import React from 'react'

const Card = ({ classnames = '', title, image, price, country, best = false, }) => {
    return (
        <article className={`card ${classnames} ${best ? 'card_best' : ''}`}>
            <a href="#" className="card__image-ibg">
                <img src={image} alt={title} />
            </a>
            <div className="card__body">
                <a href="#" className="card__title">{title}</a>
                {best ? null : <div className='card__country'>{country}</div>}
                <div className="card__price">{price}</div>
            </div>
        </article >
    )
}

export default Card