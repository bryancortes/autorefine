// SuggestionsContext.js
import React, { createContext, useState, useContext } from 'react';

const SuggestionsContext = createContext();

export const useSuggestions = () => useContext(SuggestionsContext);

export const SuggestionsProvider = ({ children }) => {
    const [suggestions, setSuggestions] = useState(null);

    return (
        <SuggestionsContext.Provider value={{ suggestions, setSuggestions }}>
            {children}
        </SuggestionsContext.Provider>
    );
};