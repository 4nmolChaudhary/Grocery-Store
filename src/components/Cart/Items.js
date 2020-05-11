import React from 'react'
import { CartItems, BoldFont, CloseButton } from './StyledComponents'

function Items({ name, itemQty, qty, totalPrice }) {
    return (
        <CartItems>
            <img src={require(`../../images/${name.toLowerCase()}.svg`)} alt="item" className="cart-item-image" width="100px" />
            <BoldFont className="big-font">{name}</BoldFont>
            <BoldFont className="big-font">{itemQty} {qty}</BoldFont>
            <BoldFont className="big-font">$ {totalPrice}</BoldFont>
            <CloseButton>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </CloseButton>
        </CartItems>
    )
}

export default Items
