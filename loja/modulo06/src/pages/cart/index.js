//index de dentro do modules/cart importa os reducers e exporta a variavel store que contem o metodo para permitir acesso de
//toda a aplicação aos reducers. O arquivo APP importa store e exporta a função APP como componente
//o arquivo index de dentro de util importa o APP e o renderiza dentro do HTML
//IMPORTA TODAS AS ACTIONS DE ACTIONS E USA UPDATE AMOUNT REQUEST E REMOVE FROM CART
import * as CartActions from '../../store/modules/cart/actions'
 import React from "react";
 import { useDispatch,useSelector } from "react-redux";
 import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { Container,ProductTable,Total } from "./styles";
 export default function Cart(){
    const total=useSelector(state=> state.cart.reduce((totalsum,product)=>{
       // console.log(total)
        return totalsum+product.price*product.amount
       // ,0 pois o total deve começar com o valor 0
 
    },0))
//acessar informação do estado do redux= useSelector
//disparar action do redux = useDispatch
    const cart=useSelector(state=>state.cart) 

const dispatch= useDispatch()


function increment(product){
  
dispatch(CartActions.updateAmountRequest(product.id,product.amount+1))

}
function decrement(product){
   
    dispatch(CartActions.updateAmountRequest(product.id,product.amount-1))
 
}





return(
<Container>
<ProductTable>
<thead>
<tr>
<th/>
<th>PRODUTO</th>
<th>QUANTIDADE</th>
<th>SUBTOTAL</th>
<th/>
</tr>
</thead>
<tbody>
{cart.map(product=>(<tr>
<td>
<img src={product.image} alt={product.title}/>
</td>
<td>
<strong>{product.title}</strong>
<strong>{product.priceFormatted}</strong>
</td>
<td>
    <div>
<button type="button" onClick={()=>decrement(product)}>
    <MdRemoveCircleOutline size={20} color="#7159c1"></MdRemoveCircleOutline>
</button>
<input type="number" readOnly value={product.amount}/>
<button type="button" onClick={()=>increment(product)}>
    <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>
</button>
</div>
</td>
<td>
<strong>{product.amount*product.price}</strong>
</td>
<td>
<button type="button" onClick={()=>dispatch(CartActions.removeFromCart(product.id))}>
<MdDelete size={20} color="#7159c1"/>
</button>
</td>
</tr>))}
</tbody>
</ProductTable>
<footer>
<button type="button">FINALIZAR</button>
<Total>
<span>Total: R$</span>
<span>{total}</span>
</Total>
</footer>
</Container>
);
}

