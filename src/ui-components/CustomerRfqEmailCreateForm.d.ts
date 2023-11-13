/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerRfqEmailCreateFormInputValues = {
    email?: string;
    dateSent?: string;
    htmlBody?: string;
};
export declare type CustomerRfqEmailCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    dateSent?: ValidationFunction<string>;
    htmlBody?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerRfqEmailCreateFormOverridesProps = {
    CustomerRfqEmailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    dateSent?: PrimitiveOverrideProps<TextFieldProps>;
    htmlBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerRfqEmailCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerRfqEmailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerRfqEmailCreateFormInputValues) => CustomerRfqEmailCreateFormInputValues;
    onSuccess?: (fields: CustomerRfqEmailCreateFormInputValues) => void;
    onError?: (fields: CustomerRfqEmailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerRfqEmailCreateFormInputValues) => CustomerRfqEmailCreateFormInputValues;
    onValidate?: CustomerRfqEmailCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerRfqEmailCreateForm(props: CustomerRfqEmailCreateFormProps): React.ReactElement;
