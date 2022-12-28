import React from 'react'
import { iInputProps } from './@types';
import TextField from '@material-ui/core/TextField'
import {ThemeProvider, createTheme } from "@material-ui/core/styles"

const theme = createTheme ({
  palette: {
    primary: {
      main: "#27AE60",
    },
    // secondary: {
    //   main: "#27AE60",
    // },

    error: {
      main: "#EB5757",
    },

    success: {
      main: "#27AE60",
    },

  },
  // textField: {
  //   color: "#f1d045",
  // },
})

const Input = ({ type, id, placeholder, autoComplete, disabled, register, error, success }: iInputProps) => {
  return (

    <fieldset> 
      <ThemeProvider theme = {theme}>
        <TextField error={error} 
          fullWidth  variant="outlined" label={placeholder} type={type} id={id}
          autoComplete={autoComplete} {...register} disabled={disabled}
        />
      </ThemeProvider>
    </fieldset>    
  )
}

export default Input