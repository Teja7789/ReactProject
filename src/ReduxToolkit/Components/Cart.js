import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItem } from '../utils/ReduxToolkit/cartSlice';


function Cart() {
    const value = useSelector(state => state.cart.value);
console.log(value,"value");
const dispatch = useDispatch();

const removeStrictModeRender = useRef(false);
useEffect(() =>{
    if (removeStrictModeRender.current) {
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    removeStrictModeRender.current = true;
},[removeStrictModeRender])


  return (
    <div>Cart <button onClick={() => dispatch(addItem())} >add</button></div>
  )
}

export default Cart