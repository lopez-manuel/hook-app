
import { useFetch } from "../hooks/useFetch"






export const MultipleCustomHooks = () => {


    const {data,isLoading} = useFetch("https://thesimpsonsquoteapi.glitch.me/quotes?character=ho")

    const {character,quote} = !!data && data;    
    
    

    return(
        <>
            <h1>Simpsons Quotes</h1>
            <hr />

            {

                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{character}</footer>
                        </blockquote>
                    )

            }


        </>
    )
}