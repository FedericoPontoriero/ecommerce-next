import { createContext, PropsWithChildren, useContext, useState } from "react";

const UIContext = createContext<{ [key: string]: any }>({
    uiState: "defaultState",
});

const UIProvider = ({ children }: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const uiState = {
        isSidebarOpen,
        setIsSidebarOpen,
    };

    return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
    const context = useContext(UIContext);
    return context;
};

export default UIProvider;
