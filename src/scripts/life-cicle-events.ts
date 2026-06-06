/*
    *  -------------------------------------------------------------------------  *
    *  -----  life-cicle-events.ts  --  /src/scripts/life-cicle-events.ts  -----  *
    *  -------------------------------------------------------------------------  *
*/


/**
 * -----------------------------------------
 * -----  `registerLifeCycleEvents()`  -----
 * -----------------------------------------
 * - Registra los eventos del ciclo de vida de Astro para mostrar mensajes en la consola
 * - En cada fase del proceso de navegación. Esto te permite entender mejor cuándo ocurren
 * - cada uno de los eventos y cómo se relacionan entre sí.
 */

export const registerLifeCycleEvents = () => {


    const logStyleEvents = `color: blue; font-size: 10px; padding: 4px; border: 1px solid green; border-radius: 4px; background-color: #f0f0f0;`;
    const logStyleLoadPage = `color: green; font-size: 10px; padding: 4px; border: 1px solid green; border-radius: 4px; background-color: #f0f0f0;`;
    

    document.addEventListener("astro:before-preparation", () => {

        console.clear();
        console.log(
            `%c astro:before-preparation — inicio de la fase de preparación (navegación iniciada, contenido aún no cargado).`,
            logStyleEvents
        );

    });

    document.addEventListener("astro:after-preparation", () => {

        //console.log('\n\n');
        console.log(
            `%c astro:after-preparation — contenido de la nueva página cargado, pendiente del swap.`,
            logStyleEvents
        );

    });

    document.addEventListener("astro:before-swap", () => {

        //console.log('\n\n');
        console.log(
            `%c astro:before-swap — a punto de reemplazar el DOM actual por el nuevo.`,
            logStyleEvents
        );

    });

    document.addEventListener("astro:after-swap", () => {

        //console.log('\n\n');
        console.log(
            `%c astro:after-swap — DOM reemplazado, justo antes del paint.`,
            logStyleEvents
        );

    });

    document.addEventListener("astro:page-load", () => {

        console.log('\n\n')
        console.log(
            `%c astro:page-load \n Página cargada: ${window.location.pathname}\n Ciclo de navegación completo.`,
            logStyleLoadPage
        );

    });

};
