import { useQuery } from 'react-query';

import { GET_POKEMON_BY_ID } from '../api/configs/queriesNames';
import { pokemonApi } from '../api/pokemonsApi';

export const FIVE_MINS_IN_MS = 300000

export const useGetPokemonById = (pokemonId: string) =>
  useQuery(
    [GET_POKEMON_BY_ID, pokemonId],
    async () => await pokemonApi.getPokemonById(pokemonId),
    {
      staleTime: FIVE_MINS_IN_MS
    }
  )
