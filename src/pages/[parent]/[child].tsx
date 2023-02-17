import { Card, CardContent, Typography } from "@mui/material";
import { ChildAmenity, ChildsAmenities, ParentAmenity } from "interfaces";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import {
    defaultCategoriesList,
    defaultParentAmenities,
    Request,
} from "./../../constants";

type Props = {
    results: ChildAmenity[];
};

const Id = ({ results }: Props) => {
    return (
        <>
            {results.length ? (
                results.map(({ id, name }: ChildAmenity) => (
                    <Card variant="outlined" key={`child-amenity-${id}`}>
                        <CardContent
                            component={Typography}
                            color="text.secondary"
                            m={-0.5}
                        >
                            {name}
                        </CardContent>
                    </Card>
                ))
            ) : (
                <small>
                    <i>Sin datos para mostrar</i>
                </small>
            )}
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let res: ChildAmenity[] = [];
    try {
        const { id: parentId }: ParentAmenity =
            defaultParentAmenities.data.find(
                (data) => data.seo_friendly === context.query.parent
            )!;
        const { id: categoryId }: ChildAmenity =
            defaultCategoriesList.results.find(
                (data) => data.seo_friendly === context.query.child
            )!;
        const response = await fetch(
            `${Request.childAPI}?property_category_id=${categoryId}&amenity_parent_id=${parentId}`
        );
        const { results }: ChildsAmenities = await response.json();
        res = results;
    } catch (error) {
    } finally {
        return {
            props: { results: res },
        };
    }
}

export default Id;
