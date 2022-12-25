import { iProductsData } from "../../Contexts/UserContext/@types" 

// const Product = ({ id, productName, src, productCategory, productPrice, onClick } : iProductsData) => {
  
//     return (
  
//       <>
      
//           <li id={id}>
//               <h2>{productName}</h2>
//               <figure>
//                   <img src={src} alt="Edit"/>
//               </figure>
                    
//               <p>{productCategory}</p>
//               <p>{productPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
//               <button onClick={onClick}>Adicionar</button>
//           </li>
  
  
//       </>
//     )
// }

const Product = ({  } : iProductsData) => {
  
  return (

    <>
    
        <li>
            {/* <h2>{productName}</h2>
            <figure>
                <img src={src} alt="Edit"/>
            </figure>
                  
            <p>{productCategory}</p>
            <p>{productPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
            <button onClick={onClick}>Adicionar</button> */}
        </li>


    </>
  )
}

export default Product