import { useState } from "react";

interface IForm {
    [key:string]: string;
}

interface IUseForm {
    formState: IForm,
    onInputChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    onResetForm: ()=>void,
}

export const useForm = ( initialForm: IForm = {}):IUseForm => {

    const [formState, setFormState] = useState<IForm>(initialForm)

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        const target = event.target;

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value 
        });
        
    }

    const onResetForm = () :void => {

        setFormState(initialForm);
        

    }
  


    return{
        formState,
        onInputChange,
        onResetForm
    }
}
