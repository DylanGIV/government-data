/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { NSNDetail } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NSNDetailUpdateForm(props) {
  const {
    nsn: nsnProp,
    nSNDetail: nSNDetailModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nsn: "",
    niin: "",
    itemName: "",
    inc: "",
    fsc: "",
    assignmentDate: "",
    crit: "",
    iig: "",
    isc: "",
    dateStandardized: "",
    hmic: "",
    dodic: "",
    nsc: "",
    cancellationDate: "",
    pmic: "",
    fiig: "",
    esd: "",
    scheduleB: "",
    demil: "",
    demilint: "",
    tiic: "",
    originator: "",
    adpec: "",
    rpdmrc: "",
  };
  const [nsn, setNsn] = React.useState(initialValues.nsn);
  const [niin, setNiin] = React.useState(initialValues.niin);
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const [inc, setInc] = React.useState(initialValues.inc);
  const [fsc, setFsc] = React.useState(initialValues.fsc);
  const [assignmentDate, setAssignmentDate] = React.useState(
    initialValues.assignmentDate
  );
  const [crit, setCrit] = React.useState(initialValues.crit);
  const [iig, setIig] = React.useState(initialValues.iig);
  const [isc, setIsc] = React.useState(initialValues.isc);
  const [dateStandardized, setDateStandardized] = React.useState(
    initialValues.dateStandardized
  );
  const [hmic, setHmic] = React.useState(initialValues.hmic);
  const [dodic, setDodic] = React.useState(initialValues.dodic);
  const [nsc, setNsc] = React.useState(initialValues.nsc);
  const [cancellationDate, setCancellationDate] = React.useState(
    initialValues.cancellationDate
  );
  const [pmic, setPmic] = React.useState(initialValues.pmic);
  const [fiig, setFiig] = React.useState(initialValues.fiig);
  const [esd, setEsd] = React.useState(initialValues.esd);
  const [scheduleB, setScheduleB] = React.useState(initialValues.scheduleB);
  const [demil, setDemil] = React.useState(initialValues.demil);
  const [demilint, setDemilint] = React.useState(initialValues.demilint);
  const [tiic, setTiic] = React.useState(initialValues.tiic);
  const [originator, setOriginator] = React.useState(initialValues.originator);
  const [adpec, setAdpec] = React.useState(initialValues.adpec);
  const [rpdmrc, setRpdmrc] = React.useState(initialValues.rpdmrc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = nSNDetailRecord
      ? { ...initialValues, ...nSNDetailRecord }
      : initialValues;
    setNsn(cleanValues.nsn);
    setNiin(cleanValues.niin);
    setItemName(cleanValues.itemName);
    setInc(cleanValues.inc);
    setFsc(cleanValues.fsc);
    setAssignmentDate(cleanValues.assignmentDate);
    setCrit(cleanValues.crit);
    setIig(cleanValues.iig);
    setIsc(cleanValues.isc);
    setDateStandardized(cleanValues.dateStandardized);
    setHmic(cleanValues.hmic);
    setDodic(cleanValues.dodic);
    setNsc(cleanValues.nsc);
    setCancellationDate(cleanValues.cancellationDate);
    setPmic(cleanValues.pmic);
    setFiig(cleanValues.fiig);
    setEsd(cleanValues.esd);
    setScheduleB(cleanValues.scheduleB);
    setDemil(cleanValues.demil);
    setDemilint(cleanValues.demilint);
    setTiic(cleanValues.tiic);
    setOriginator(cleanValues.originator);
    setAdpec(cleanValues.adpec);
    setRpdmrc(cleanValues.rpdmrc);
    setErrors({});
  };
  const [nSNDetailRecord, setNSNDetailRecord] =
    React.useState(nSNDetailModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = nsnProp
        ? await DataStore.query(NSNDetail, nsnProp)
        : nSNDetailModelProp;
      setNSNDetailRecord(record);
    };
    queryData();
  }, [nsnProp, nSNDetailModelProp]);
  React.useEffect(resetStateValues, [nSNDetailRecord]);
  const validations = {
    nsn: [{ type: "Required" }],
    niin: [],
    itemName: [],
    inc: [],
    fsc: [],
    assignmentDate: [],
    crit: [],
    iig: [],
    isc: [],
    dateStandardized: [],
    hmic: [],
    dodic: [],
    nsc: [],
    cancellationDate: [],
    pmic: [],
    fiig: [],
    esd: [],
    scheduleB: [],
    demil: [],
    demilint: [],
    tiic: [],
    originator: [],
    adpec: [],
    rpdmrc: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nsn,
          niin,
          itemName,
          inc,
          fsc,
          assignmentDate,
          crit,
          iig,
          isc,
          dateStandardized,
          hmic,
          dodic,
          nsc,
          cancellationDate,
          pmic,
          fiig,
          esd,
          scheduleB,
          demil,
          demilint,
          tiic,
          originator,
          adpec,
          rpdmrc,
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
            NSNDetail.copyOf(nSNDetailRecord, (updated) => {
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
      {...getOverrideProps(overrides, "NSNDetailUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nsn"
        isRequired={true}
        isReadOnly={true}
        value={nsn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn: value,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.nsn ?? value;
          }
          if (errors.nsn?.hasError) {
            runValidationTasks("nsn", value);
          }
          setNsn(value);
        }}
        onBlur={() => runValidationTasks("nsn", nsn)}
        errorMessage={errors.nsn?.errorMessage}
        hasError={errors.nsn?.hasError}
        {...getOverrideProps(overrides, "nsn")}
      ></TextField>
      <TextField
        label="Niin"
        isRequired={false}
        isReadOnly={false}
        value={niin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin: value,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.niin ?? value;
          }
          if (errors.niin?.hasError) {
            runValidationTasks("niin", value);
          }
          setNiin(value);
        }}
        onBlur={() => runValidationTasks("niin", niin)}
        errorMessage={errors.niin?.errorMessage}
        hasError={errors.niin?.hasError}
        {...getOverrideProps(overrides, "niin")}
      ></TextField>
      <TextField
        label="Item name"
        isRequired={false}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName: value,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.itemName ?? value;
          }
          if (errors.itemName?.hasError) {
            runValidationTasks("itemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("itemName", itemName)}
        errorMessage={errors.itemName?.errorMessage}
        hasError={errors.itemName?.hasError}
        {...getOverrideProps(overrides, "itemName")}
      ></TextField>
      <TextField
        label="Inc"
        isRequired={false}
        isReadOnly={false}
        value={inc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc: value,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.inc ?? value;
          }
          if (errors.inc?.hasError) {
            runValidationTasks("inc", value);
          }
          setInc(value);
        }}
        onBlur={() => runValidationTasks("inc", inc)}
        errorMessage={errors.inc?.errorMessage}
        hasError={errors.inc?.hasError}
        {...getOverrideProps(overrides, "inc")}
      ></TextField>
      <TextField
        label="Fsc"
        isRequired={false}
        isReadOnly={false}
        value={fsc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc: value,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.fsc ?? value;
          }
          if (errors.fsc?.hasError) {
            runValidationTasks("fsc", value);
          }
          setFsc(value);
        }}
        onBlur={() => runValidationTasks("fsc", fsc)}
        errorMessage={errors.fsc?.errorMessage}
        hasError={errors.fsc?.hasError}
        {...getOverrideProps(overrides, "fsc")}
      ></TextField>
      <TextField
        label="Assignment date"
        isRequired={false}
        isReadOnly={false}
        value={assignmentDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate: value,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.assignmentDate ?? value;
          }
          if (errors.assignmentDate?.hasError) {
            runValidationTasks("assignmentDate", value);
          }
          setAssignmentDate(value);
        }}
        onBlur={() => runValidationTasks("assignmentDate", assignmentDate)}
        errorMessage={errors.assignmentDate?.errorMessage}
        hasError={errors.assignmentDate?.hasError}
        {...getOverrideProps(overrides, "assignmentDate")}
      ></TextField>
      <TextField
        label="Crit"
        isRequired={false}
        isReadOnly={false}
        value={crit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit: value,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.crit ?? value;
          }
          if (errors.crit?.hasError) {
            runValidationTasks("crit", value);
          }
          setCrit(value);
        }}
        onBlur={() => runValidationTasks("crit", crit)}
        errorMessage={errors.crit?.errorMessage}
        hasError={errors.crit?.hasError}
        {...getOverrideProps(overrides, "crit")}
      ></TextField>
      <TextField
        label="Iig"
        isRequired={false}
        isReadOnly={false}
        value={iig}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig: value,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.iig ?? value;
          }
          if (errors.iig?.hasError) {
            runValidationTasks("iig", value);
          }
          setIig(value);
        }}
        onBlur={() => runValidationTasks("iig", iig)}
        errorMessage={errors.iig?.errorMessage}
        hasError={errors.iig?.hasError}
        {...getOverrideProps(overrides, "iig")}
      ></TextField>
      <TextField
        label="Isc"
        isRequired={false}
        isReadOnly={false}
        value={isc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc: value,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.isc ?? value;
          }
          if (errors.isc?.hasError) {
            runValidationTasks("isc", value);
          }
          setIsc(value);
        }}
        onBlur={() => runValidationTasks("isc", isc)}
        errorMessage={errors.isc?.errorMessage}
        hasError={errors.isc?.hasError}
        {...getOverrideProps(overrides, "isc")}
      ></TextField>
      <TextField
        label="Date standardized"
        isRequired={false}
        isReadOnly={false}
        value={dateStandardized}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized: value,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.dateStandardized ?? value;
          }
          if (errors.dateStandardized?.hasError) {
            runValidationTasks("dateStandardized", value);
          }
          setDateStandardized(value);
        }}
        onBlur={() => runValidationTasks("dateStandardized", dateStandardized)}
        errorMessage={errors.dateStandardized?.errorMessage}
        hasError={errors.dateStandardized?.hasError}
        {...getOverrideProps(overrides, "dateStandardized")}
      ></TextField>
      <TextField
        label="Hmic"
        isRequired={false}
        isReadOnly={false}
        value={hmic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic: value,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.hmic ?? value;
          }
          if (errors.hmic?.hasError) {
            runValidationTasks("hmic", value);
          }
          setHmic(value);
        }}
        onBlur={() => runValidationTasks("hmic", hmic)}
        errorMessage={errors.hmic?.errorMessage}
        hasError={errors.hmic?.hasError}
        {...getOverrideProps(overrides, "hmic")}
      ></TextField>
      <TextField
        label="Dodic"
        isRequired={false}
        isReadOnly={false}
        value={dodic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic: value,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.dodic ?? value;
          }
          if (errors.dodic?.hasError) {
            runValidationTasks("dodic", value);
          }
          setDodic(value);
        }}
        onBlur={() => runValidationTasks("dodic", dodic)}
        errorMessage={errors.dodic?.errorMessage}
        hasError={errors.dodic?.hasError}
        {...getOverrideProps(overrides, "dodic")}
      ></TextField>
      <TextField
        label="Nsc"
        isRequired={false}
        isReadOnly={false}
        value={nsc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc: value,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.nsc ?? value;
          }
          if (errors.nsc?.hasError) {
            runValidationTasks("nsc", value);
          }
          setNsc(value);
        }}
        onBlur={() => runValidationTasks("nsc", nsc)}
        errorMessage={errors.nsc?.errorMessage}
        hasError={errors.nsc?.hasError}
        {...getOverrideProps(overrides, "nsc")}
      ></TextField>
      <TextField
        label="Cancellation date"
        isRequired={false}
        isReadOnly={false}
        value={cancellationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate: value,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.cancellationDate ?? value;
          }
          if (errors.cancellationDate?.hasError) {
            runValidationTasks("cancellationDate", value);
          }
          setCancellationDate(value);
        }}
        onBlur={() => runValidationTasks("cancellationDate", cancellationDate)}
        errorMessage={errors.cancellationDate?.errorMessage}
        hasError={errors.cancellationDate?.hasError}
        {...getOverrideProps(overrides, "cancellationDate")}
      ></TextField>
      <TextField
        label="Pmic"
        isRequired={false}
        isReadOnly={false}
        value={pmic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic: value,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.pmic ?? value;
          }
          if (errors.pmic?.hasError) {
            runValidationTasks("pmic", value);
          }
          setPmic(value);
        }}
        onBlur={() => runValidationTasks("pmic", pmic)}
        errorMessage={errors.pmic?.errorMessage}
        hasError={errors.pmic?.hasError}
        {...getOverrideProps(overrides, "pmic")}
      ></TextField>
      <TextField
        label="Fiig"
        isRequired={false}
        isReadOnly={false}
        value={fiig}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig: value,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.fiig ?? value;
          }
          if (errors.fiig?.hasError) {
            runValidationTasks("fiig", value);
          }
          setFiig(value);
        }}
        onBlur={() => runValidationTasks("fiig", fiig)}
        errorMessage={errors.fiig?.errorMessage}
        hasError={errors.fiig?.hasError}
        {...getOverrideProps(overrides, "fiig")}
      ></TextField>
      <TextField
        label="Esd"
        isRequired={false}
        isReadOnly={false}
        value={esd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd: value,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.esd ?? value;
          }
          if (errors.esd?.hasError) {
            runValidationTasks("esd", value);
          }
          setEsd(value);
        }}
        onBlur={() => runValidationTasks("esd", esd)}
        errorMessage={errors.esd?.errorMessage}
        hasError={errors.esd?.hasError}
        {...getOverrideProps(overrides, "esd")}
      ></TextField>
      <TextField
        label="Schedule b"
        isRequired={false}
        isReadOnly={false}
        value={scheduleB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB: value,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.scheduleB ?? value;
          }
          if (errors.scheduleB?.hasError) {
            runValidationTasks("scheduleB", value);
          }
          setScheduleB(value);
        }}
        onBlur={() => runValidationTasks("scheduleB", scheduleB)}
        errorMessage={errors.scheduleB?.errorMessage}
        hasError={errors.scheduleB?.hasError}
        {...getOverrideProps(overrides, "scheduleB")}
      ></TextField>
      <TextField
        label="Demil"
        isRequired={false}
        isReadOnly={false}
        value={demil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil: value,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.demil ?? value;
          }
          if (errors.demil?.hasError) {
            runValidationTasks("demil", value);
          }
          setDemil(value);
        }}
        onBlur={() => runValidationTasks("demil", demil)}
        errorMessage={errors.demil?.errorMessage}
        hasError={errors.demil?.hasError}
        {...getOverrideProps(overrides, "demil")}
      ></TextField>
      <TextField
        label="Demilint"
        isRequired={false}
        isReadOnly={false}
        value={demilint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint: value,
              tiic,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.demilint ?? value;
          }
          if (errors.demilint?.hasError) {
            runValidationTasks("demilint", value);
          }
          setDemilint(value);
        }}
        onBlur={() => runValidationTasks("demilint", demilint)}
        errorMessage={errors.demilint?.errorMessage}
        hasError={errors.demilint?.hasError}
        {...getOverrideProps(overrides, "demilint")}
      ></TextField>
      <TextField
        label="Tiic"
        isRequired={false}
        isReadOnly={false}
        value={tiic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic: value,
              originator,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.tiic ?? value;
          }
          if (errors.tiic?.hasError) {
            runValidationTasks("tiic", value);
          }
          setTiic(value);
        }}
        onBlur={() => runValidationTasks("tiic", tiic)}
        errorMessage={errors.tiic?.errorMessage}
        hasError={errors.tiic?.hasError}
        {...getOverrideProps(overrides, "tiic")}
      ></TextField>
      <TextField
        label="Originator"
        isRequired={false}
        isReadOnly={false}
        value={originator}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator: value,
              adpec,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.originator ?? value;
          }
          if (errors.originator?.hasError) {
            runValidationTasks("originator", value);
          }
          setOriginator(value);
        }}
        onBlur={() => runValidationTasks("originator", originator)}
        errorMessage={errors.originator?.errorMessage}
        hasError={errors.originator?.hasError}
        {...getOverrideProps(overrides, "originator")}
      ></TextField>
      <TextField
        label="Adpec"
        isRequired={false}
        isReadOnly={false}
        value={adpec}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec: value,
              rpdmrc,
            };
            const result = onChange(modelFields);
            value = result?.adpec ?? value;
          }
          if (errors.adpec?.hasError) {
            runValidationTasks("adpec", value);
          }
          setAdpec(value);
        }}
        onBlur={() => runValidationTasks("adpec", adpec)}
        errorMessage={errors.adpec?.errorMessage}
        hasError={errors.adpec?.hasError}
        {...getOverrideProps(overrides, "adpec")}
      ></TextField>
      <TextField
        label="Rpdmrc"
        isRequired={false}
        isReadOnly={false}
        value={rpdmrc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              niin,
              itemName,
              inc,
              fsc,
              assignmentDate,
              crit,
              iig,
              isc,
              dateStandardized,
              hmic,
              dodic,
              nsc,
              cancellationDate,
              pmic,
              fiig,
              esd,
              scheduleB,
              demil,
              demilint,
              tiic,
              originator,
              adpec,
              rpdmrc: value,
            };
            const result = onChange(modelFields);
            value = result?.rpdmrc ?? value;
          }
          if (errors.rpdmrc?.hasError) {
            runValidationTasks("rpdmrc", value);
          }
          setRpdmrc(value);
        }}
        onBlur={() => runValidationTasks("rpdmrc", rpdmrc)}
        errorMessage={errors.rpdmrc?.errorMessage}
        hasError={errors.rpdmrc?.hasError}
        {...getOverrideProps(overrides, "rpdmrc")}
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
          isDisabled={!(nsnProp || nSNDetailModelProp)}
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
              !(nsnProp || nSNDetailModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
