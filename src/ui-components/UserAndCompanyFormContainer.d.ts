/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UserAndCompanyFormContainerOverridesProps = {
    UserAndCompanyFormContainer?: PrimitiveOverrideProps<FlexProps>;
    "Just A Few More Things..."?: PrimitiveOverrideProps<TextProps>;
    CreateQuoteDropdown?: PrimitiveOverrideProps<ViewProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UserAndCompanyFormContainerProps = React.PropsWithChildren<Partial<FlexProps> & {
    createQuoteDropdown?: React.ReactNode;
} & {
    overrides?: UserAndCompanyFormContainerOverridesProps | undefined | null;
}>;
export default function UserAndCompanyFormContainer(props: UserAndCompanyFormContainerProps): React.ReactElement;
