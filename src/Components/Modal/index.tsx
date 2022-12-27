import { useContext, useState } from "react"
import { CartContext } from "../../Contexts/CartContext"
import { UserContext } from "../../Contexts/UserContext"
import { StyledModalCart } from "./style" 
import DeleteIcon from '@material-ui/icons/Delete'

export const ModalCart = () => {

  const { itensCounter } = useContext (UserContext)
  const { cartProducts, setCartProducts, setModal, oneMoreOrLessProduct, removeFromCart } = useContext (CartContext)

  return (

    <StyledModalCart>

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
                
                    <figure>
                      <img src={product.img} alt={product.name} />
                    </figure>
                
                    <div>
                      <h3>{product.name}</h3>
                      <div>
                        <button onClick={() => oneMoreOrLessProduct(false, product)} > - </button>
                        <p>{product.count}</p>
                        <button onClick={() => oneMoreOrLessProduct(true, product)}> + </button>
                      </div>
                    </div>
                
                    <DeleteIcon onClick={() => removeFromCart(product.id)} />
                
                  </li>
                ))}
              </ul>

              <footer>
                <div className="div-line"></div>
                <div>
                  <span className="total">Total</span>
                  <span className="price"></span>
                </div>
                <button onClick={() => removeFromCart(cartProducts)}>Remover todos</button>
              </footer>

            </>

          )}

        </>

      </main>
  
    </div>

    </StyledModalCart>
  )

}