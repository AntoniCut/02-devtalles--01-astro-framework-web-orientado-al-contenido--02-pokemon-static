/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  FavoritePokemons.tsx  --  /src/components/pokemons/FavoritePokemons.tsx  -----  *
    *  -------------------------------------------------------------------------------------  *
*/



import { createSignal, For } from 'solid-js';
import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { FavoritePokemonCard } from '@components/pokemons/FavoritePokemonCard'



/**
 * -----------------------------------------
 * -----  `getLocalStoragePokemons()`  -----
 * -----------------------------------------
 * @description Función para obtener los pokemons favoritos del localStorage
 * @returns Array de pokemons favoritos
 */

const getLocalStoragePokemons: () => FavoritePokemon[] = () => {

    const favouritePokemons = JSON.parse(
        localStorage.getItem('favorites-pokemons') ?? '[]'
    );

    return favouritePokemons;
}



/**
 * ----------------------------------
 * -----  `FavoritePokemons()`  -----
 * ----------------------------------
 * @description Componente `FavoritePokemons` de SolidJS
 * @param props - Propiedades del componente
 * @returns JSX.Element
 */

export const FavoritePokemons = () => {


    const [pokemons, setPokemons] = createSignal( getLocalStoragePokemons() );


    return (

        <section
            class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 mt-4 mb-4 lg:h-151.25"
            aria-label="Listado de Pokémon favoritos"
        >
            
            <For each={ pokemons() }>
                
                {
                    ({ name, id }) => (

                        <FavoritePokemonCard pokemon={{ name, id }} />
                    )
                }

            </For>

        </section>


    )

};


