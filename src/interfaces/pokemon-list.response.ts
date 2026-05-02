/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  pokemon-list.response.ts  --  /src/interfaces/pokemon-list.response.ts  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


export interface PokemonListResponse {
    
    /** -----  `Número total de Pokémon disponibles` ----- */
    count:    number;
    
    /** -----  `URL para la siguiente página de resultados` ----- */
    next:     string;
    
    /** -----  `URL para la página anterior de resultados` ----- */
    previous: null;
    
    /** -----  `Lista de resultados de Pokémon` ----- */
    results:  Result[];
}


export interface Result {
    
    /** -----  `Nombre del Pokémon` ----- */
    name: string;
    
    /** -----  `URL del Pokémon` ----- */
    url:  string;
}
