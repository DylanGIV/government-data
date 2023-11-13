/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextAreaFieldProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CustomerRFQFormContainerOverridesProps = {
    CustomerRFQFormContainer?: PrimitiveOverrideProps<FlexProps>;
    CreateQuoteDropdown?: PrimitiveOverrideProps<ViewProps>;
    Footer?: PrimitiveOverrideProps<FlexProps>;
    AdditionalComments?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ButtonContainer?: PrimitiveOverrideProps<FlexProps>;
    PrevButton?: PrimitiveOverrideProps<ButtonProps>;
    NextButton?: PrimitiveOverrideProps<ButtonProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CustomerRFQFormContainerProps = React.PropsWithChildren<Partial<FlexProps> & {
    createQuoteDropdown?: React.ReactNode;
} & {
    overrides?: CustomerRFQFormContainerOverridesProps | undefined | null;
}>;
export default function CustomerRFQFormContainer(props: CustomerRFQFormContainerProps): React.ReactElement;
