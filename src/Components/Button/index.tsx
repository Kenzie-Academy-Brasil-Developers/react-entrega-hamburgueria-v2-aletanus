import Button from '@material-ui/core/Button'
import { iButtonProps } from './@types'

import IconButton from '@material-ui/core/IconButton'

const ButtonDefault = ({ onClick, name, type, id }: iButtonProps) => {
    return (
  
    //   <Button variant="contained" onClick={onClick} id={id} type={type} > {name} </Button>    
    // <Button variant="contained" onClick={onClick} id={id} type={type} > {name} </Button> 
    
        <IconButton></IconButton>
    
    )
}
  
export default ButtonDefault



{/* <Button> 
        <ThemeProvider theme = {theme}>
          <TextField 
            fullWidth  variant="outlined" label={placeholder} type={type} id={id}
            autoComplete={autoComplete} {...register} disabled={disabled}
          />
        </ThemeProvider>
    </Button>    */}