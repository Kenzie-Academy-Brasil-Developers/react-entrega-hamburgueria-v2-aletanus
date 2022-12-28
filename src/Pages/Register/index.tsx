import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '../../Assets/Logo_Burguer Kenzie.svg'
import shoppingBag from '../../Assets/Shopping-bag.svg'
import dots from '../../Assets/Dots.svg'
import Input from '../../Components/Input'
import { iRegisterFormValues } from './@types' 
import { yupResolver} from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema' 
import { UserContext } from '../../Contexts/UserContext'
import { StyledButton, StyledLink } from '../../Styles/buttons-style'
import { StyledRegister } from './register-style'

const RegisterPage = () => {

  const [loading, setLoading] = useState(false)  
  const { register, handleSubmit, formState: {errors}, reset } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  })  
  const { userRegister } = useContext(UserContext)

  const submit: SubmitHandler<iRegisterFormValues> = async (formData) => {
    userRegister(formData, setLoading)
    reset()
  }
  
  return (

    <StyledRegister>

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

        <div className='content-header'>
          <h1>Cadastro</h1>
          <StyledLink className="grey-Link" to={"/"}>Retornar para o login</StyledLink>
        </div>

        <div>

          <form noValidate onSubmit={handleSubmit(submit)}>
           
            <Input type="text" id="name" label="Nome " error={errors.name} placeholder="Digite aqui o seu nome" register={register("name")} disabled={loading}/>
            {errors.name && <p className="p-error" aria-label="Error: Name">{errors.name.message}</p>}
        
            <Input type="text" label='Email' id="email" error={errors.email} placeholder='Seu e-mail' register={register("email")} disabled={loading} />
            {errors.email && <p className="p-error" aria-label="Error: E-mail">{errors.email.message}</p>}
           
            <Input type="password" label='Senha' id={'password'} error={errors.password} placeholder='Sua senha' register={register("password")} disabled={loading} autoComplete='autoComplete'/>
            {errors.password && <p className="p-error" aria-label="Error: Password">{errors.password.message}</p>}
                   
            <Input autoComplete="autoComplete" type="password" error={errors.passwordConfirm} id="passwordConfirm" label="Confirmar Senha " placeholder="Confirme aqui a sua senha" register={register("passwordConfirm")} disabled={loading} />
            {errors.passwordConfirm && <p className="p-error" aria-label="Error: Password Confirmation">{errors.passwordConfirm.message}</p>}
                   
            <StyledButton className="green-button-default" type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Cadastrar'}
            </StyledButton>
        
          </form>

        </div>

      </div>

    </StyledRegister> 

  )
}

export default RegisterPage