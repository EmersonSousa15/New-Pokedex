import { createContext, useContext, useReducer, useState, useEffect, useRef } from "react";

const MY_URL = 'https://pokeapi.co/api/v2/pokemon?';

const PokemonsContext = createContext(null);
const PokemonsDispatchContext = createContext(null);

export const PokemonsProvider = ({ children }) => {

    const [initialValue, setInitialValue] = useState(null);
    const [offset, setOffset] = useState(0);

    const abortControllerRef = useRef(null);

    const [contextPokemons, dispatch] = useReducer(
        pokemonsReducer,
        initialValue
    );

    useEffect(() => {
        if (offset == -1) {
            setOffset(-2);
        }


        const fetchPokemons = async () => {

            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            try {
                setInitialValue({ pokeApi: { pokemons: [], setOffset: setOffset }, requestInfo: { isLoading: true, error: { status: false, message: '' } } });

                const response = await fetch(`${MY_URL}/limit=10000&offset=${offset * 20}`, {
                    signal: abortControllerRef.current?.signal,
                });
                const data = await response.json();

                setInitialValue({ pokeApi: { pokemons: data.results, setOffset: setOffset }, requestInfo: { isLoading: false, error: { status: false, message: '' } } });

            } catch (e) {
                if (e.name === "AbortError") {
                    return;
                }

                setInitialValue({ pokeApi: { pokemons: [], setOffset: setOffset }, requestInfo: { isLoading: false, error: { status: true, message: e.message } } });
            }
        }

        fetchPokemons();

    }, [offset])

    useEffect(() => {
        dispatch({ type: 'INITIAL', payload: initialValue })
    }, [initialValue])


    return (
        <PokemonsContext.Provider value={contextPokemons}>
            <PokemonsDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonsDispatchContext.Provider>
        </PokemonsContext.Provider>
    )
}

export function usePokemons() {
    return useContext(PokemonsContext);
}

export const usePokemonsDispatch = () => {
    return useContext(PokemonsDispatchContext);
}


const pokemonsReducer = (contextPokemons, action) => {
    switch (action.type) {
        case 'INITIAL':
            return action.payload

            break;
        case 'INCREMENT':
            pokemons.setOffset(prev => prev += 1)

            break;
        case 'DECREMENT':
            pokemons.setOffset(prev => prev -= 1);

            break;
        default:

            break;
    }
}


