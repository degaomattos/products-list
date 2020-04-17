import React from 'react'
import { CardProps } from './card.interface'
import Selector from './../selector/selector.component'
import './card.sass'

export default function Card(props: CardProps){
    const { image, title, subTitle, price, promo, item } = props 
    return (
        <div className="card">
            <div className="cardBoxImage">
                <img className="cardImage" src={image} alt={title} />
            </div>
            <h1 className="cardTitle">{title}</h1>
            <h2 className="cardSubTitle">{subTitle}</h2>
            <p className="cardPrice">{price && `${price.toLocaleString("en-US",{ style: "currency", currency: "USD" })}/unit`}</p>
            <p className="cardPromo">{promo}</p>
            <Selector item={item} />
        </div>
    )
}