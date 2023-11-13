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
export declare type NSNDetailCreateFormInputValues = {
    nsn?: string;
    niin?: string;
    itemName?: string;
    inc?: string;
    fsc?: string;
    assignmentDate?: string;
    crit?: string;
    iig?: string;
    isc?: string;
    dateStandardized?: string;
    hmic?: string;
    dodic?: string;
    nsc?: string;
    cancellationDate?: string;
    pmic?: string;
    fiig?: string;
    esd?: string;
    scheduleB?: string;
    demil?: string;
    demilint?: string;
    tiic?: string;
    originator?: string;
    adpec?: string;
    rpdmrc?: string;
};
export declare type NSNDetailCreateFormValidationValues = {
    nsn?: ValidationFunction<string>;
    niin?: ValidationFunction<string>;
    itemName?: ValidationFunction<string>;
    inc?: ValidationFunction<string>;
    fsc?: ValidationFunction<string>;
    assignmentDate?: ValidationFunction<string>;
    crit?: ValidationFunction<string>;
    iig?: ValidationFunction<string>;
    isc?: ValidationFunction<string>;
    dateStandardized?: ValidationFunction<string>;
    hmic?: ValidationFunction<string>;
    dodic?: ValidationFunction<string>;
    nsc?: ValidationFunction<string>;
    cancellationDate?: ValidationFunction<string>;
    pmic?: ValidationFunction<string>;
    fiig?: ValidationFunction<string>;
    esd?: ValidationFunction<string>;
    scheduleB?: ValidationFunction<string>;
    demil?: ValidationFunction<string>;
    demilint?: ValidationFunction<string>;
    tiic?: ValidationFunction<string>;
    originator?: ValidationFunction<string>;
    adpec?: ValidationFunction<string>;
    rpdmrc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NSNDetailCreateFormOverridesProps = {
    NSNDetailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nsn?: PrimitiveOverrideProps<TextFieldProps>;
    niin?: PrimitiveOverrideProps<TextFieldProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    inc?: PrimitiveOverrideProps<TextFieldProps>;
    fsc?: PrimitiveOverrideProps<TextFieldProps>;
    assignmentDate?: PrimitiveOverrideProps<TextFieldProps>;
    crit?: PrimitiveOverrideProps<TextFieldProps>;
    iig?: PrimitiveOverrideProps<TextFieldProps>;
    isc?: PrimitiveOverrideProps<TextFieldProps>;
    dateStandardized?: PrimitiveOverrideProps<TextFieldProps>;
    hmic?: PrimitiveOverrideProps<TextFieldProps>;
    dodic?: PrimitiveOverrideProps<TextFieldProps>;
    nsc?: PrimitiveOverrideProps<TextFieldProps>;
    cancellationDate?: PrimitiveOverrideProps<TextFieldProps>;
    pmic?: PrimitiveOverrideProps<TextFieldProps>;
    fiig?: PrimitiveOverrideProps<TextFieldProps>;
    esd?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleB?: PrimitiveOverrideProps<TextFieldProps>;
    demil?: PrimitiveOverrideProps<TextFieldProps>;
    demilint?: PrimitiveOverrideProps<TextFieldProps>;
    tiic?: PrimitiveOverrideProps<TextFieldProps>;
    originator?: PrimitiveOverrideProps<TextFieldProps>;
    adpec?: PrimitiveOverrideProps<TextFieldProps>;
    rpdmrc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NSNDetailCreateFormProps = React.PropsWithChildren<{
    overrides?: NSNDetailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NSNDetailCreateFormInputValues) => NSNDetailCreateFormInputValues;
    onSuccess?: (fields: NSNDetailCreateFormInputValues) => void;
    onError?: (fields: NSNDetailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NSNDetailCreateFormInputValues) => NSNDetailCreateFormInputValues;
    onValidate?: NSNDetailCreateFormValidationValues;
} & React.CSSProperties>;
export default function NSNDetailCreateForm(props: NSNDetailCreateFormProps): React.ReactElement;
