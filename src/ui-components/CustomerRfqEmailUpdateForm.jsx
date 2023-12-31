/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CustomerRfqEmail } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CustomerRfqEmailUpdateForm(props) {
  const {
    id: idProp,
    customerRfqEmail: customerRfqEmailModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    dateSent: "",
    htmlBody: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [dateSent, setDateSent] = React.useState(initialValues.dateSent);
  const [htmlBody, setHtmlBody] = React.useState(initialValues.htmlBody);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerRfqEmailRecord
      ? { ...initialValues, ...customerRfqEmailRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setDateSent(cleanValues.dateSent);
    setHtmlBody(cleanValues.htmlBody);
    setErrors({});
  };
  const [customerRfqEmailRecord, setCustomerRfqEmailRecord] = React.useState(
    customerRfqEmailModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CustomerRfqEmail, idProp)
        : customerRfqEmailModelProp;
      setCustomerRfqEmailRecord(record);
    };
    queryData();
  }, [idProp, customerRfqEmailModelProp]);
  React.useEffect(resetStateValues, [customerRfqEmailRecord]);
  const validations = {
    email: [{ type: "Required" }, { type: "Email" }],
    dateSent: [{ type: "Required" }],
    htmlBody: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          dateSent,
          htmlBody,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            CustomerRfqEmail.copyOf(customerRfqEmailRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerRfqEmailUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              dateSent,
              htmlBody,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Date sent"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateSent && convertToLocal(new Date(dateSent))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              email,
              dateSent: value,
              htmlBody,
            };
            const result = onChange(modelFields);
            value = result?.dateSent ?? value;
          }
          if (errors.dateSent?.hasError) {
            runValidationTasks("dateSent", value);
          }
          setDateSent(value);
        }}
        onBlur={() => runValidationTasks("dateSent", dateSent)}
        errorMessage={errors.dateSent?.errorMessage}
        hasError={errors.dateSent?.hasError}
        {...getOverrideProps(overrides, "dateSent")}
      ></TextField>
      <TextField
        label="Html body"
        isRequired={true}
        isReadOnly={false}
        value={htmlBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              dateSent,
              htmlBody: value,
            };
            const result = onChange(modelFields);
            value = result?.htmlBody ?? value;
          }
          if (errors.htmlBody?.hasError) {
            runValidationTasks("htmlBody", value);
          }
          setHtmlBody(value);
        }}
        onBlur={() => runValidationTasks("htmlBody", htmlBody)}
        errorMessage={errors.htmlBody?.errorMessage}
        hasError={errors.htmlBody?.hasError}
        {...getOverrideProps(overrides, "htmlBody")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customerRfqEmailModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customerRfqEmailModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
