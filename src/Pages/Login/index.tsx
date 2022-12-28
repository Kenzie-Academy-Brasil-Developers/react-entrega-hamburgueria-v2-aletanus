import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '../../Assets/Logo_Burguer Kenzie.svg'
import shoppingBag from '../../Assets/Shopping-bag.svg'
import dots from '../../Assets/Dots.svg'
import Input from '../../Components/Input'
import { UserContext } from '../../Contexts/UserContext' 
import { iLoginFormValues } from './@types'
import { yupResolver} from '@hookform/resolvers/yup'
import { loginSchema } from './loginSchema'
import { StyledButton, StyledLink } from '../../Styles/buttons-style'
import { StyledLogin } from './home-style'

const LoginPage = () => {

    const { userLogin } = useContext(UserContext)
    const [loading, setLoading] = useState(false)  
    
    const { register, handleSubmit, formState: {errors}, reset } = useForm<iLoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
    })  
    
    const submit: SubmitHandler<iLoginFormValues> = async (formData) => {
    userLogin(formData, setLoading)
    reset()
  }

  return (

    <StyledLogin>

        <div className='brand'>

            <figure className='logo'>
                <img src={logo} alt="Kenzie Hub logo" />
            </figure>

            <div>
                <figure>
                    <img src={shoppingBag} alt="Kenzie Hub slogan" />
                </figure>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>

            <figure className='dots'>
                <img src={dots} alt="Dots style" />
            </figure>
        </div>

        <div className='content'>

            <h1>Login</h1>

            <div>

                <form noValidate onSubmit={handleSubmit(submit)}>
                    
                    <Input type="text" id="email" error={errors.email} placeholder='Seu e-mail' register={register("email")} disabled={loading} />
                    {errors.email && <p className="p-error" aria-label="Error: E-mail">{errors.email.message}</p>}
                    
                    <Input type="password" label='Senha' id={'password'} error={errors.password} placeholder='Sua senha' register={register("password")} disabled={loading} autoComplete='autoComplete'/>
                    {errors.password && <p className="p-error" aria-label="Error: Password">{errors.password.message}</p>}
                
                    <StyledButton className="green-button-default" type="submit" disabled={loading}>
                        {loading ? 'Entrando...' : 'Logar'}
                    </StyledButton>
                
                </form>
                
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

                <StyledLink className="grey-Link" to={"/register"}>Cadastrar</StyledLink>
            
            </div>
        
        </div>

    </StyledLogin>

  )
}

export default LoginPage