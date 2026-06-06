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

    /**  -----  `Botón de favoritos`  ----- */
    const btnFavorite = document.getElementById('btnFavorite') as HTMLButtonElement | null;

    //  -----  Salir silenciosamente si el botón no está en la página actual  -----
    if (!btnFavorite)
        return;
    

    //  -----  Obtención de los datos del Pokémon desde el botón de favoritos  -----
    const name = btnFavorite.dataset.name ?? "";
    const id = Number(btnFavorite.dataset.id) ?? 0;

    console.log(`Pokemon: ${name}, ID: ${id}`);


    //  -----  Evento de clic para el botón de favoritos  -----
    btnFavorite.addEventListener('click', () => {

        const favoritePokemon: FavoritePokemon = {
            name,
            id
        };

        console.log("Pokémon favorito seleccionado:", favoritePokemon);

        // Aquí puedes agregar la lógica para guardar el Pokémon favorito, por ejemplo, en localStorage o enviarlo a un servidor.

    });

};


//  -----  Enganchar el listener de carga de página de Astro  -----
document.addEventListener('astro:page-load', setupFavoritesButton);
