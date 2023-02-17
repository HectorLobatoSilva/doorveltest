import { Categories, ParentAmenities } from "interfaces";

export const enum Request {
    parentAPI = "http://54.177.198.128:8001/api/cat-amenities-parents/?format=json",
    childAPI = "http://54.177.198.128:8001/api/cat-amenities-childs/",
    categoriesAPI = "http://54.177.198.128:8001/api/cat-properties-categories/",
}

export const enum LocalKeys {
    parentAmenities = "parentAmenities",
    cateoriesList = "cateoriesList",
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const defaultParentAmenities: ParentAmenities = {
    data: [
        {
            id: 1,
            name: "Estilo de vida",
            seo_friendly: "estilo-de-vida",
        },
        {
            id: 2,
            name: "Impacto ambiental",
            seo_friendly: "impacto-ambiental",
        },
    ],
};

export const defaultCategoriesList: Categories = {
    results: [
        {
            id: 1,
            category: "Casa",
            seo_friendly: "casas",
        },
        {
            id: 2,
            category: "Departamento",
            seo_friendly: "departamentos",
        },
        {
            id: 3,
            category: "Quinta",
            seo_friendly: "quintas",
        },
        {
            id: 4,
            category: "Ranchos",
            seo_friendly: "ranchos",
        },
        {
            id: 5,
            category: "Villas",
            seo_friendly: "villas",
        },
        {
            id: 6,
            category: "Edificio",
            seo_friendly: "edificios",
        },
        {
            id: 7,
            category: "Local",
            seo_friendly: "locales",
        },
        {
            id: 10,
            category: "Nave industrial",
            seo_friendly: "naves-industriales",
        },
        {
            id: 11,
            category: "Oficina",
            seo_friendly: "oficinas",
        },
        {
            id: 14,
            category: "Terreno",
            seo_friendly: "terrenos",
        },
        {
            id: 17,
            category: "Bodega",
            seo_friendly: "bodegas",
        },
    ],
};
