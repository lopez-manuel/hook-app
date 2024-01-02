import { useState } from "react"

export interface IUseCounter {

    initialValue: number,
}

export const useCounter = ( initialValue:number = 0 ) => {

    const [ counter, setCounter ] = useState<number>( initialValue );

    const increment = ( value:number = 1 ):void => {
        
        setCounter( counter + value );
    }

    const decrement = ( value:number = 1):void => {

        setCounter( counter - value );
    }

    const reset = ():void => {

        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}