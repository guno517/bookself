import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { PokemonResponse } from '../types'


const pokemonKrApi = (id?: string) => axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id || ''}`, { params: {limit: 151} })

const usePokemonKr = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(id ? ['names', id] : 'pokemon', () => pokemonKrApi(id));
}


export default usePokemonKr;