import { useCounter } from "../hooks/useCounter"


export const CustomHookCounter = () => {

    const {counter, increment, decrement, reset} = useCounter(10);

  return (
    <>
        <h1>Counter Hook: { counter }</h1>

        <hr />

        <button onClick={ reset } className="btn btn-primary">Reset</button>
        
        <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>

        <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        
    </>
  )
}
