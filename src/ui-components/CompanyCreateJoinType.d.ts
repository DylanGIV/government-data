/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type CompanyCreateJoinTypeOverridesProps = {
    CompanyCreateJoinType?: PrimitiveOverrideProps<FlexProps>;
    BadgeContainer?: PrimitiveOverrideProps<FlexProps>;
    Badge37813150?: PrimitiveOverrideProps<BadgeProps>;
    Badge37813152?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type CompanyCreateJoinTypeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CompanyCreateJoinTypeOverridesProps | undefined | null;
}>;
export default function CompanyCreateJoinType(props: CompanyCreateJoinTypeProps): React.ReactElement;
