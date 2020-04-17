import React, { useState } from 'react'
import Button from './../button/button.component'
import './selector.sass'
import { SelectorProps } from './selector.interface'
import { connect } from 'react-redux'
import { addToCart, updateCart } from './../../core/actions/cart/cart.action'

function Selector(props: SelectorProps){
    const [ qtd, setQtd ] = useState(0) 
    const { item, cart } = props

    function updateCart(item, qtd){
        const { cart } = props
        const filteredCart = cart.filter(cItem => cItem.id !== item.id)
        if(qtd > 0){
            filteredCart.push({...item, qtd: qtd})
        }
        props.updateCart(filteredCart)
    }
    return(
        <div className="actions">
            <div className="selector">
                <Button
                    typeButton="btn-rounded"
                    onClick={() => setQtd(qtd - 1)}
                    disabled={(qtd === 0)}
                >
                    -
                </Button>
                <input type="text" value={qtd} />
                <Button
                    typeButton="btn-rounded"
                    onClick={() => setQtd(qtd + 1)}
                >
                    +
                </Button>
            </div>
            {
                (cart && cart.find(prod => prod.id === item.id)) ?
                <Button 
                    typeButton="btn-primary"
                    disabled={cart && cart.find(prod => prod.id === item.id && prod.qtd === qtd)}
                    onClick={() => updateCart(item, qtd)}
                >
                    {
                        cart && cart.find(prod => prod.id === item.id && prod.qtd === qtd) ?
                        'ADDED' : 'UPDATE'
                    }
                </Button>
                :
                <Button 
                    typeButton="btn-primary"
                    disabled={(qtd === 0)}
                    onClick={() => props.addToCart({...item, qtd: qtd})}
                >
                    ADD
                </Button>
            }
            
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.cart.items
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item: any) => {
            dispatch(addToCart(item))
        },
        updateCart: (items: any) => {
            dispatch(updateCart(items))
        }
    }
  }
  
const SelectorContainer = connect(mapStateToProps, mapDispatchToProps)(Selector)

export default SelectorContainer