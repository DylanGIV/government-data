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
export declare type CountryCreateFormInputValues = {
    countryName?: string;
    code?: string;
};
export declare type CountryCreateFormValidationValues = {
    countryName?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CountryCreateFormOverridesProps = {
    CountryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    countryName?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CountryCreateFormProps = React.PropsWithChildren<{
    overrides?: CountryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CountryCreateFormInputValues) => CountryCreateFormInputValues;
    onSuccess?: (fields: CountryCreateFormInputValues) => void;
    onError?: (fields: CountryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CountryCreateFormInputValues) => CountryCreateFormInputValues;
    onValidate?: CountryCreateFormValidationValues;
} & React.CSSProperties>;
export default function CountryCreateForm(props: CountryCreateFormProps): React.ReactElement;
