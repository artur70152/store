import React from "react";
import { Link } from "react-router-dom";
import{useSelector} from 'react-redux';
import {MdShoppingBasket} from 'react-icons/md';
import { Container, Cart } from "./style";
import logo from '../../assets/termino estagio.PNG';


 export default function Header(){
   const cartSize=useSelector(state=>state.cart.length)
return(
<Container>
    <Link to="/">
<img src={logo} alt="rocketshoes"/>
</Link>
<Cart to="/cart">
<div>
<strong>meu carrinho</strong>
<span>{cartSize} itens</span>
</div>
<MdShoppingBasket size={36} color="#FFF"/>
</Cart>
</Container>
);
}
