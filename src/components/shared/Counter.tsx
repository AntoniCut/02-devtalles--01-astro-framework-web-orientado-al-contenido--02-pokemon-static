/*
    *  -------------------------------------------------------------  *
    *  -----  Counter.tsx  --  /components/shared/Counter.tsx  -----  *
    *  -------------------------------------------------------------  *
*/


import type { JSX } from "astro/jsx-runtime";
import { createSignal, type Component } from "solid-js";


interface Props {
    initialValue?: number;
    children?: JSX.Element;
}


/**
 * -------------------------
 * -----  `Counter()`  -----
 * -------------------------
 * @description Componente `Counter`de SolidJS
 * @param props - Propiedades del componente
 * @returns JSX.Element
 */
export const Counter: Component<Props> = (props) => {

    const [ counter, setCounter] = createSignal(props.initialValue || 0);


    return (
        
        <section class="mt-5 p-5 flex flex-col justify-center items-center border border-blue-500 rounded-lg bg-slate-900">

            {
                props.children
            }

            <div class="flex gap-5 justify-between items-center mt-5 rounded-lg">
                
                <button 
                    class="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        
                        if(counter() === 0) 
                            return;
                        
                        setCounter(counter() - 1)
                    }}
                > 
                    -1 
                </button>
                
                
                <div class="w-10 rounded-full flex justify-center items-center">
                    <h3 class="text-3xl font-bold"> {counter()} </h3>
                </div>
                
                
                <button 
                    class="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCounter(counter() + 1)}
                > 
                    +1 
                </button>

            </div>

        </section>
    );

};
