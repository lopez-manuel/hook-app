import { useEffect, useState } from "react"

interface IResponse {
    data: IQuote,
    isLoading: boolean,
    hasError: string | null

}

interface IQuote {
    character: string | null,
    characterDirection: string | null,
    image: string | null,
    quote: string | null,
}

const data:IQuote = {
    character: "",
    characterDirection: "",
    image: "",
    quote: ""
}

export const useFetch = ( url:string ): IResponse => {

    const [state, setState] = useState<IResponse>({
        data,
        isLoading: true,
        hasError: null
    })
  

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            ...state,
            data,
            isLoading: false,
        })
        


    }

    useEffect(()=>{

        getFetch();

    },[url])


    return {
        ...state
    };


}
