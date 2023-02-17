import { AppProps } from "next/app";
import { DataProvider } from "Context";
import Layout from "Layout/layout";
import { DataContextValue, Categories, CategorieList } from "interfaces";

import {
    defaultCategoriesList,
    defaultParentAmenities,
    Request,
} from "./../constants";
import Head from "next/head";

type MyAppProps = AppProps & DataContextValue;

export default function App({
    Component,
    pageProps,
    parentAmenities,
    categoriesList,
}: MyAppProps) {
    return (
        <>
            <Head>
                <title>Doorvel test</title>
                <meta name="description" content="Doorvel test" />
                <meta name="theme-color" content="#000" />
            </Head>
            <DataProvider
                parentAmenities={parentAmenities}
                categoriesList={categoriesList}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DataProvider>
        </>
    );
}

App.getInitialProps = async () => {
    let categoriesResponse;
    let parentResponse;
    let parentAmenities = defaultParentAmenities;
    let categoriesList = defaultCategoriesList;
    try {
        categoriesResponse = await fetch(Request.categoriesAPI);
        categoriesList = await categoriesResponse.json();

        parentResponse = await fetch(Request.parentAPI);
        parentAmenities = await parentResponse.json();
    } catch (error) {
    } finally {
        const { data } = parentAmenities;
        const { results } = categoriesList;
        return { parentAmenities: data, categoriesList: results };
    }
};
