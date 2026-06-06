/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  FavoritePokemonCard.tsx  --  /src/components/pokemons/FavoritePokemonCard.tsx  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/



import { Show, createSignal, type Component } from "solid-js";
import type { FavoritePokemon } from '@interfaces/favorite-pokemon';


interface Props {
    pokemon: FavoritePokemon;
}


/**
 * -------------------------------------
 * -----  `FavoritePokemonCard()`  -----
 * -------------------------------------
 * @description Componente `FavoritePokemonCard` de SolidJS
 * @param props - Propiedades del componente
 * @returns JSX.Element
 */

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {


    const [isVisible, setIsVisible] = createSignal(true);

    /** -----  `URL de la imagen del Pokémon`  -----  */
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;


    /**
     * -------------------------------------
     * -----  `deleteFavorite()`  -----
     * -------------------------------------
     * - Elimina el Pokémon de la lista de favoritos en el localStorage y oculta la tarjeta.
     */
    
    const deleteFavorite = () => {

        /** -----  `Obtener los Pokémon favoritos desde el localStorage`  ----- */
        const favouritesPokemons: FavoritePokemon[] = JSON.parse(
            localStorage.getItem('favorites-pokemons') ?? '[]'
        );

        /** -----  `Actualizar la lista de Pokémon favoritos en el localStorage`  ----- */
        const updatedFavourites = favouritesPokemons.filter(fav => fav.id !== pokemon.id);

        localStorage.setItem('favorites-pokemons', JSON.stringify(updatedFavourites));

        setIsVisible(false);


    }


    return (

        <Show when={isVisible()}>

            {/* <div class="rounded flex flex-col justify-center items-center p-2 w-45 bg-slate-900"> */}

            <div class="border border-blue-500 rounded flex flex-col justify-center items-center p-2 w-45 bg-slate-900">
                
                <a href={`/pokemons/${pokemon.name}`} >

                    <img
                        src={imageSrc}
                        alt={pokemon.name}
                        width="96"
                        height="96"
                        class="w-16 h-auto mb-2"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />

                    <p class="text-center text-lg mb-2">
                        #{pokemon.id} - {pokemon.name}
                    </p>

                </a>

                <button
                    class="btn text-red-400 hover:text-red-600"
                    onClick={deleteFavorite}
                >
                    Eliminar
                </button>

            </div>

        </Show>

    )

};
