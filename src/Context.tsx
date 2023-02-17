import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { DataContextValue, CategorieList, ParentAmenity } from "interfaces";

export const DataContext = createContext<DataContextValue | null>(null);

export const useDataContext = (): DataContextValue => {
    const context = useContext(DataContext);
    if (context === null) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
};

type Props = {
    parentAmenities: ParentAmenity[] | null;
    categoriesList: CategorieList[] | null;
    children: ReactNode;
};

export const DataProvider = ({
    children,
    parentAmenities,
    categoriesList,
}: Props) => {
    const [currentParent, setCurrentParent] = useState<string | null>(null);
    const [currentChild, setCurrentChild] = useState<string | null>(null);

    const contextValue = useMemo(
        () => ({
            parentAmenities,
            categoriesList,
            currentParent,
            setCurrentParent,
            currentChild,
            setCurrentChild,
        }),
        [
            parentAmenities,
            categoriesList,
            currentParent,
            setCurrentParent,
            currentChild,
            setCurrentChild,
        ]
    );

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};
