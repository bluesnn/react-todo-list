import React from 'react'
import { connect } from 'react-redux'
import CartItem from "./CartItem";

function CartList(props) {
  const { list, isLoading } = props;

  return (
    isLoading ?
    <div>loading</div> :
    <ul>
      {list.map(item => {
        return (
          <CartItem key={item.id} {...item}/>
        )
      })}
    </ul>
  )
}

const mapState = state => ({
  list: state.cartList.data,
  isLoading: state.cartList.isLoading
})

export default connect(mapState)(CartList)
