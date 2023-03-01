import { createContext, FC, PropsWithChildren, useContext } from "react";

const UIContext = createContext<{ [key: string]: string }>({
    uiState: "defaultState",
});

const UIProvider = ({ children }: PropsWithChildren) => {
    return (
        <UIContext.Provider value={{ uiState: "someState" }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    return context;
};

export default UIProvider;
