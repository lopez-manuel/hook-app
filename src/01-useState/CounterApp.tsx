import { useState } from "react"

interface ICounterOject {
    counter1: number,
    counter2: number,
    counter3: number
}


export const CounterApp = () => {
    //establecemos un objeto inicial
    const [counter, setCounter] = useState<ICounterOject>({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter;

  return (
    <>
        <h1>Counter 1: { counter1 } </h1>
        <h1>Counter 2: { counter2 } </h1>
        <h1>Counter 3: { counter3 } </h1>

        <hr />

        <button className="btn" 
            onClick={ () => setCounter({ ...counter, counter1: counter1 +1 }) } //utilizamos spread
        >
            +1
        </button>
        <button>-1</button>
    </>
  )
}
