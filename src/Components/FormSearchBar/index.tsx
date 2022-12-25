import React, { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { TextField } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"

export const FormSearchBar = ({ }) => {

  const { products, setFilteredProdutcs, searchItem } = useContext (UserContext)
  
  return (

    <form onSubmit={(event:React.FormEvent<HTMLFormElement>) => searchItem (event)}>
      <label htmlFor="input-search"></label>
      
      <TextField 

        onChange={e => {
          if(e.target.value === ""){
            setFilteredProdutcs(products)
          }
        }}
        
        id="input-search"
        fullWidth  variant="outlined"
          label="Digitar pesquisa" type="search" title="search"
          autoComplete="autoComplete"
          InputProps={{ 
            endAdornment: (
            <>
              <IconButton name="Pesquisar" type="submit">
                <SearchIcon/>
              </IconButton>
            </>)
          }}
      />

    </form>
  )
}