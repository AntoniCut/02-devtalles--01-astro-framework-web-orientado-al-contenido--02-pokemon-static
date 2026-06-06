/*
    *  -----------------------------------------------------------------------  *
    *  -----  favorites-button.ts  --  /src/scripts/favorites-button.ts  -----  *
    *  -----------------------------------------------------------------------  *
*/


import type { FavoritePokemon } from '@interfaces/favorite-pokemon';


/**
 * --------------------------------------
 * -----  `setupFavoritesButton()`  -----
 * --------------------------------------
 * - Busca el <button id="btnFavorite"> en la página actual.
 * - Si existe, lee su data-name y data-id y le engancha un listener de click.
 * - Se invoca en cada `astro:page-load` para que el botón siga funcionando tras
 *   cada navegación con View Transitions (el <body> se reemplaza y aparece un
 *   botón nuevo que necesita su handler).
 */

export const setupFavoritesButton = (): void => {


    //*  -----  Obtener los Pokémon favoritos desde el localStorage  -----

    /**  -----  Array de Pokémon favoritos  ----- */
    let favoritePokemons: FavoritePokemon[] = JSON.parse(
        localStorage.getItem('favoritesPokemons') ?? '[]'
    );

    

    //*  -----  Referencias al HTML  -----

    /**  -----  `Botón de favoritos`  ----- */
    const $btnFavorite = document.getElementById('btnFavorite') as HTMLButtonElement | null;

    /**  -----  Icono de corazón vacío  ----- */
    const $heartOutline = $btnFavorite?.querySelector('[data-outline]') as HTMLImageElement | null;

    /**  -----  Icono de corazón lleno  ----- */
    const $heartFilled = $btnFavorite?.querySelector('[data-full]') as HTMLImageElement | null;


    //  -----  Salir silenciosamente si el botón no está en la página actual  -----
    if (!$btnFavorite)
        return;


    //  -----  Obtención de los datos del Pokémon desde el botón de favoritos  -----
    const name = $btnFavorite.dataset.name ?? '';
    const id = Number($btnFavorite.dataset.id) ?? 0;


    console.log(`Pokemon: ${name}, ID: ${id}`);



    //*  -----  Definición de Funciones  -----

    /**
     * ---------------------------------
     * -----  `updateHeartIcon()`  -----
     * ---------------------------------
     * - Verifica si el Pokémon actual ya está en la lista de favoritos.
     * - Muestra el icono de corazón lleno si es favorito, o el vacío si no lo es.
     */

    const updateHeartIcon = () => {
        
         /**  -----  Verificar si el Pokémon actual ya está en la lista de favoritos  ----- */
        const isFavorite = favoritePokemons.some(fav => fav.name === name);

        if (isFavorite) {
            $heartOutline?.classList.add('hidden');
            $heartFilled?.classList.remove('hidden');
        } 
        
        else {
            $heartOutline?.classList.remove('hidden');
            $heartFilled?.classList.add('hidden');
        }
    };


   
    /**
     * --------------------------------
     * -----  `toggleFavorite()`  -----
     * --------------------------------
     * - Verifica si el Pokémon actual ya está en la lista de favoritos.
     * - Si está, lo remueve; si no, lo agrega.
     * - Actualiza el localStorage con la lista actualizada de favoritos.
     */

    const toggleFavorite = () => {

        /**  -----  Verificar si el Pokémon actual ya está en la lista de favoritos  ----- */
        const isFavorite = favoritePokemons.some(fav => fav.name === name);

        //  -----  Mostrar el estado de favorito al cargar la página  -----
        isFavorite 
            ? favoritePokemons = favoritePokemons.filter(fav => fav.name !== name)
            : favoritePokemons.push({ name, id });
        
        //  -----  Guardar la lista actualizada de Pokémon favoritos en localStorage  -----
        localStorage.setItem('favoritesPokemons', JSON.stringify(favoritePokemons));

        //  -----  Sincronizar el ícono de corazón con el estado actual  -----
        updateHeartIcon();
    }


    //*  -----  Eventos e Invocaciones  -----


    //  -----  Evento de clic para el botón de favoritos  -----
    $btnFavorite.addEventListener('click', () => {

        const favoritePokemon: FavoritePokemon = {
            name,
            id
        };

        console.log("Pokémon favorito seleccionado:", favoritePokemon);

        // Aquí puedes agregar la lógica para guardar el Pokémon favorito, por ejemplo, en localStorage o enviarlo a un servidor.

        //  -----  Actualizar la lista de Pokémon favoritos en localStorage  -----
        toggleFavorite();

    });

    //  -----  Mostrar el estado del corazón al cargar la página  -----
    updateHeartIcon();
    

};


//*  -----  Enganchar el listener de carga de página de Astro  -----
document.addEventListener('astro:page-load', setupFavoritesButton);
