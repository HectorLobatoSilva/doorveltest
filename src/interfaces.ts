export interface ParentAmenities {
    data: ParentAmenity[];
}

export interface ParentAmenity {
    id: number;
    property_category_id?: number;
    name: string;
    seo_friendly: string;
    active_record?: boolean;
    created_at?: string;
    updated_at?: string;
    created_by?: string;
}

export interface ChildsAmenities {
    count?: number;
    next?: string;
    previous?: any;
    results: ChildAmenity[];
}

export interface ChildAmenity {
    id: number;
    name: string;
    seo_friendly: string;
    property_category?: number;
    amenity_parent?: number;
}

export interface CategorieList {
    id: number;
    category: string;
    seo_friendly: string;
}

export interface Categories {
    results: CategorieList[];
}

export interface DataContextValue {
    parentAmenities: ParentAmenity[] | null;
    categoriesList: CategorieList[] | null;
    currentParent?: string | null;
    setCurrentParent?: (name: string) => void;
    currentChild?: string | null;
    setCurrentChild?: (id: string) => void;
}
