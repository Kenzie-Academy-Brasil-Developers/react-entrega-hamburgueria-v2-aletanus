import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import { UserContext } from "../../Contexts/UserContext"
import { StyledModalCart } from "./style" 
import DeleteIcon from '@material-ui/icons/Delete'
import { StyledButton } from "../../Styles/buttons-style"

export const ModalCart = () => {

  const { itensCounter } = useContext (UserContext)
  const { cartProducts, setCartProducts, setModal, oneMoreOrLessProduct, removeFromCart, cartTotalPrice } = useContext (CartContext)

  return (

    <StyledModalCart className="modalContainer fade-in-text">

    <div className='container'>

      <header>

        <h2 className="h2-title">Carrinho de compras</h2>
        <button onClick={() => setModal(false)} >+</button>

      </header>

      <main>

        <>

          { itensCounter === 0 ? (
                  
            <span>
              <h2 className="no-product-title">Sua sacola está vazia</h2>
              <p className="no-product-sub-title">Adicione itens</p>
            </span>

          ) : (
 
            <>

              <ul>
                {   cartProducts.map((product) => (
                
                  <li key={product.id}>
                
                    <div>
                      <figure>
                        <img src={product.img} alt={product.name} />
                      </figure>
                  
                      <div className="div-buttons">
                        <h3>{product.name}</h3>
                        <div>
                          <button onClick={() => oneMoreOrLessProduct(false, product)} > - </button>
                          <p>{product.count}</p>
                          <button onClick={() => oneMoreOrLessProduct(true, product)}> + </button>
                        </div>
                      </div>
                    </div>
                
                    <DeleteIcon onClick={() => removeFromCart(product.id)} />
                
                  </li>
                ))}
              </ul>

              <footer>
                <div className="div-line"></div>
                <div className="totalPrice">
                  <span className="total">Total</span>
                  <span className="price">{ cartTotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) }</span>
                </div>
                <StyledButton className="gray-button-default" onClick={() => removeFromCart(cartProducts)}>Remover todos</StyledButton>
              </footer>

            </>

          )}

        </>

      </main>
  
    </div>

    </StyledModalCart>
  )

}