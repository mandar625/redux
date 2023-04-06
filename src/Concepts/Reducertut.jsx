import React, { useReducer } from 'react'


export const Reducertut = () => {
    const initialState = 0;


    const reducer = (state, action) => {
        
        if (action.type === "incerement") {
            state = state + 1;

            if (state === 10) {

                window.alert("you entered 10")
                
            }
        }

        if (action.type === "decrement") {
            state = state - 1;
        }

        return state;
    }


    const [state, dispatch] = useReducer(reducer, initialState)
       return (


        <center>

            <h3>{state}</h3>
            <button onClick={() => dispatch({ type: "incerement" })} >Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

            
        </center>
    )
}
