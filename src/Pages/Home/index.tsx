import React, { useContext, useState } from 'react'
import logo from '../../Assets/Logo_Burguer Kenzie.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { CartContext } from '../../Contexts/CartContext'
// import Product from '../../Components/Product'
// import { iProductsDataList, iProductsData } from '../../Contexts/CartContext/@types'
import { UserContext } from '../../Contexts/UserContext'
import { FormSearchBar } from '../../Components/FormSearchBar'
import { ModalCart } from '../../Components/Modal'

const HomePage = () => {
  
  const { userLogout, products, filteredProdutcs, itensCounter, setItensCounter, } = useContext(UserContext)
  const { addToCart, modal, setModal, modalCartToogle } = useContext(CartContext)

  return (

    <>

      { modal && (<ModalCart/>) }


        <header>
        
          <figure>
            <img src={logo} alt="Kenzie Hub logo" />
          </figure>
        
          <FormSearchBar/>
          
          <div>
            <button>
              <ShoppingCartIcon onClick={() => modalCartToogle() } />
            </button>
            <p>{itensCounter}</p>
          </div>
        
          <button>
            <ExitToAppIcon onClick={() => userLogout()}/>
          </button>
        
        </header>
        
        <main>
        
          <ul>
              {/* {
                products && products.map((product) => (
                  <Product
                    key={`${product.id}`} id={product.id} productName={product.name} 
                    src={product.img} productCategory={product.category} 
                    productPrice={product.price} onClick={() => addToCart(product)}
                />)
                )
              } */}
        
              {
                filteredProdutcs && filteredProdutcs.map((product) => (
                  <li key={`${product.id}`} >
        
                    <h2>{product.name}</h2>
                      <figure>
                        <img src={product.img} alt="Edit"/>
                      </figure>
                    
                    <p>{product.category}</p>
                    <p>{ product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) }</p>
                    <button onClick={() => addToCart(product)}>Adicionar</button>
        
                  </li>
                ))
              }
        
        
          </ul>
        
        </main>

    
  
    </>
  )
}

export default HomePage