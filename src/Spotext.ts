import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextInterface {
    songInput: string,
    setSongInput: Dispatch<SetStateAction<string>>
}

const defaultState = {
    songInput: '',
    setSongInput: () => {}
} as ContextInterface

const Spotext = createContext(defaultState);

export default Spotext;