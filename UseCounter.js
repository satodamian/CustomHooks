import { useState } from "react"
//valor por defecto si en caso no existe valor en el USESTATE en inicialState
export const UseCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment =()=>{
        setCounter( counter + 1);
    }
    const decrement =()=>{
        setCounter( counter - 1);
    }

    const reset=()=>{
        setCounter(initialState);
    }

    return {

        counter,
        increment,
        reset,
        decrement
    };
}
