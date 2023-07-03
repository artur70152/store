//AO APERTAR O BOTAO DE ADCIONAR AO CARRINHO A AÇÃO QUE IREMOS OUVIR É A FUNÇÃO ADD TO CART REQUEST,
//O TAKE LATEST RELACIONA A FUNCAO CRIADA NO SAGA (addToCart) COM O ADD TO CART REQUEST, 
// A FUNÇÃO (addToCart) DISPARA NO FINAL DELA A ADD TO CART SUCCESS COM OS DADOS DA API QUE A ADD TO CART REQUEST PEGOU


export function addToCartRequest(id){
    return {
            type:'ADD_TO_CART_REQUEST',
            id,      
    }
}
export function addToCartSuccess(product){
    return {
            type:'ADD_TO_CART_SUCCESS',
            product,     
    }
}
export function removeFromCart(id){
return{
type:'REMOVE_FROM_CART',
id,
}
}
export function updateAmountRequest(id,amount){
    return{
    type:'UPDATE_AMOUNT_REQUEST',
    id,
    amount,
    }
    }
    export function updateAmountSuccess(id,amount){
        return{
        type:'UPDATE_AMOUNT_SUCCESS',
        id,
        amount,
        }
        }
    