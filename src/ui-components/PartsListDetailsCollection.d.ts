/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PartsListDetailsProps } from "./PartsListDetails";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsListDetailsCollectionOverridesProps = {
    PartsListDetailsCollection?: PrimitiveOverrideProps<CollectionProps>;
    PartsListDetails?: PartsListDetailsProps;
} & EscapeHatchProps;
export declare type PartsListDetailsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PartsListDetailsProps;
} & {
    overrides?: PartsListDetailsCollectionOverridesProps | undefined | null;
}>;
export default function PartsListDetailsCollection(props: PartsListDetailsCollectionProps): React.ReactElement;
