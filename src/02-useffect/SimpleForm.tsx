import React, { useEffect, useState } from "react"

interface IFormState {
    username: string,
    email: string
}



export const SimpleForm = () => {

    const [formState, setFormState] = useState<IFormState>({
        username: 'manuelrn96',
        email: 'manuel.lopez.96'
    })

    const {email,username} = formState;

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        const target = event.target;

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value 
        });
        
    }

    useEffect(()=>{

        console.log("useEffect");
        

    },[])

  return (
    <>
        <h1>Formulario simple (useEffect)</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={email}
            onChange={ onInputChange }
        />


    </>
  )
}
