/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NSNDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NSNDetailsUpdateFormInputValues = {
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
export declare type NSNDetailsUpdateFormValidationValues = {
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
export declare type NSNDetailsUpdateFormOverridesProps = {
    NSNDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type NSNDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NSNDetailsUpdateFormOverridesProps | undefined | null;
} & {
    nsn?: string;
    nSNDetails?: NSNDetails;
    onSubmit?: (fields: NSNDetailsUpdateFormInputValues) => NSNDetailsUpdateFormInputValues;
    onSuccess?: (fields: NSNDetailsUpdateFormInputValues) => void;
    onError?: (fields: NSNDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NSNDetailsUpdateFormInputValues) => NSNDetailsUpdateFormInputValues;
    onValidate?: NSNDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NSNDetailsUpdateForm(props: NSNDetailsUpdateFormProps): React.ReactElement;
