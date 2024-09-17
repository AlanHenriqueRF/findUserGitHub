import React, { useContext, useState, ReactNode } from "react";
import { UserRecentsType } from "@/utils/protocols";

export const RecentSearchesContext = React.createContext<{
    recentSearches: UserRecentsType[];
    setRecentSearches: React.Dispatch<React.SetStateAction<UserRecentsType[]>>;
} | undefined>(undefined);

export const useRecentSearches = () => {
    const context = useContext(RecentSearchesContext);

    if (!context) {
        throw new Error("useRecentSearches must be used within a RecentSearchesProvider");
    }

    return context;
};

type RecentSearchesProviderProps = {
    children: ReactNode;
};

export const RecentSearchesProvider = ({ children }: RecentSearchesProviderProps) => {
    const [recentSearches, setRecentSearches] = useState<UserRecentsType[]>([]);

    return (
        <>
            <RecentSearchesContext.Provider value={{ recentSearches, setRecentSearches }}>
                {children}
            </RecentSearchesContext.Provider>
        </>
    )
}
