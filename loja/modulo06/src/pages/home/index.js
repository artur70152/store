//abrir o json server (yarn json) antes e depois executar yarn start em um terminal integrado
//IMPORTA TODAS AS ACTIONS DE ACTIONS E USA A ADD TO CART REQUEST
import { formatPrice } from "../../util/format";
import { useSelector, useDispatch } from "react-redux";
import React, { useState,useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import {ProductList} from './styles';
import api from "../../services/api";
import * as CartActions from '../../store/modules/cart/actions';

export default function Home ({addToCartRequest}){
    const[products,setProducts]=useState([])
   

    const dispatch=useDispatch()
    const ac=useSelector(state=>console.log(state))
useEffect(()=>{
async function loadProducts(){
    const response=await api.get('products');
    const data=response.data.map(product=>({
    ...product,
    priceFormatted:formatPrice(product.price),
    
    }))

    setProducts(data)
 
}
loadProducts();

},[])


const aa=useSelector(state=>console.log(state))
//Ao utilizar a sintaxe { cart } ao passar os reducers para a função combineReducers, 
//estamos criando uma propriedade dentro do estado chamada cart, onde o reducer cart será responsável por gerenciar esse estado.


//state.cart inicialmente é nulo, ao clicar no botao adcionar, a informação ira para sagas, que chamara a action add_to_cart_success essa action esta presente nos reducers,
// por fim os reducers alteram o estado com as informações 

const amount=useSelector(state=>state.cart.reduce((sumamount,product)=>{
    console.log(sumamount)
    sumamount[product.id]=product.amount
    return sumamount;
    ;},{}))  

    const ab=useSelector(state=>console.log(state))
function handleAddProduct(id){
    
dispatch(CartActions.addToCartRequest(id));
};

return(
<ProductList>
    {products.map(product=>(
        <li key={product.id}>
<img src={product.image} alt={product.title}/>
<strong>{product.title}</strong>
<strong>{product.priceFormatted}</strong>
<button type="button" onClick={()=>handleAddProduct(product.id)}>
<div>
<MdAddShoppingCart size={16} color="#FFF"/>{amount[product.id]}
</div>
<span>ADCIONAR AO CARRINHO</span>
</button>
</li>

    ))}

</ProductList>
);
}


  