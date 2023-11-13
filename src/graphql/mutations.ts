/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRfq = /* GraphQL */ `mutation CreateRfq(
  $input: CreateRfqInput!
  $condition: ModelRfqConditionInput
) {
  createRfq(input: $input, condition: $condition) {
    id
    rfqNumber
    dateSent
    custRefNum
    companyName
    contact
    phone
    email
    shippingTerms
    shippingMethod
    leadTime
    paymentTerms
    dueDate
    quantityRequested
    quantityQuoted
    uom
    urgency
    discount
    lineTotal
    subtotal
    salesTax
    total
    internalComments
    emailComments
    addressLine1
    addressLine2
    city
    state
    zip
    country
    Items {
      nextToken
      startedAt
      __typename
    }
    receivingCompanyID
    sendingCompanyID
    ReceivingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    SendingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companySentRfqsId
    companyReceivedRfqsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRfqMutationVariables,
  APITypes.CreateRfqMutation
>;
export const updateRfq = /* GraphQL */ `mutation UpdateRfq(
  $input: UpdateRfqInput!
  $condition: ModelRfqConditionInput
) {
  updateRfq(input: $input, condition: $condition) {
    id
    rfqNumber
    dateSent
    custRefNum
    companyName
    contact
    phone
    email
    shippingTerms
    shippingMethod
    leadTime
    paymentTerms
    dueDate
    quantityRequested
    quantityQuoted
    uom
    urgency
    discount
    lineTotal
    subtotal
    salesTax
    total
    internalComments
    emailComments
    addressLine1
    addressLine2
    city
    state
    zip
    country
    Items {
      nextToken
      startedAt
      __typename
    }
    receivingCompanyID
    sendingCompanyID
    ReceivingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    SendingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companySentRfqsId
    companyReceivedRfqsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRfqMutationVariables,
  APITypes.UpdateRfqMutation
>;
export const deleteRfq = /* GraphQL */ `mutation DeleteRfq(
  $input: DeleteRfqInput!
  $condition: ModelRfqConditionInput
) {
  deleteRfq(input: $input, condition: $condition) {
    id
    rfqNumber
    dateSent
    custRefNum
    companyName
    contact
    phone
    email
    shippingTerms
    shippingMethod
    leadTime
    paymentTerms
    dueDate
    quantityRequested
    quantityQuoted
    uom
    urgency
    discount
    lineTotal
    subtotal
    salesTax
    total
    internalComments
    emailComments
    addressLine1
    addressLine2
    city
    state
    zip
    country
    Items {
      nextToken
      startedAt
      __typename
    }
    receivingCompanyID
    sendingCompanyID
    ReceivingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    SendingCompany {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companySentRfqsId
    companyReceivedRfqsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRfqMutationVariables,
  APITypes.DeleteRfqMutation
>;
export const createCountry = /* GraphQL */ `mutation CreateCountry(
  $input: CreateCountryInput!
  $condition: ModelCountryConditionInput
) {
  createCountry(input: $input, condition: $condition) {
    id
    countryName
    code
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCountryMutationVariables,
  APITypes.CreateCountryMutation
>;
export const updateCountry = /* GraphQL */ `mutation UpdateCountry(
  $input: UpdateCountryInput!
  $condition: ModelCountryConditionInput
) {
  updateCountry(input: $input, condition: $condition) {
    id
    countryName
    code
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCountryMutationVariables,
  APITypes.UpdateCountryMutation
>;
export const deleteCountry = /* GraphQL */ `mutation DeleteCountry(
  $input: DeleteCountryInput!
  $condition: ModelCountryConditionInput
) {
  deleteCountry(input: $input, condition: $condition) {
    id
    countryName
    code
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCountryMutationVariables,
  APITypes.DeleteCountryMutation
>;
export const createShippingAddress = /* GraphQL */ `mutation CreateShippingAddress(
  $input: CreateShippingAddressInput!
  $condition: ModelShippingAddressConditionInput
) {
  createShippingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    regi
    postalCode
    isDefault
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateShippingAddressMutationVariables,
  APITypes.CreateShippingAddressMutation
>;
export const updateShippingAddress = /* GraphQL */ `mutation UpdateShippingAddress(
  $input: UpdateShippingAddressInput!
  $condition: ModelShippingAddressConditionInput
) {
  updateShippingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    regi
    postalCode
    isDefault
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateShippingAddressMutationVariables,
  APITypes.UpdateShippingAddressMutation
>;
export const deleteShippingAddress = /* GraphQL */ `mutation DeleteShippingAddress(
  $input: DeleteShippingAddressInput!
  $condition: ModelShippingAddressConditionInput
) {
  deleteShippingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    regi
    postalCode
    isDefault
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteShippingAddressMutationVariables,
  APITypes.DeleteShippingAddressMutation
>;
export const createBillingAddress = /* GraphQL */ `mutation CreateBillingAddress(
  $input: CreateBillingAddressInput!
  $condition: ModelBillingAddressConditionInput
) {
  createBillingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    region
    postalCode
    isDefault
    CompanyBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBillingAddressMutationVariables,
  APITypes.CreateBillingAddressMutation
>;
export const updateBillingAddress = /* GraphQL */ `mutation UpdateBillingAddress(
  $input: UpdateBillingAddressInput!
  $condition: ModelBillingAddressConditionInput
) {
  updateBillingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    region
    postalCode
    isDefault
    CompanyBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBillingAddressMutationVariables,
  APITypes.UpdateBillingAddressMutation
>;
export const deleteBillingAddress = /* GraphQL */ `mutation DeleteBillingAddress(
  $input: DeleteBillingAddressInput!
  $condition: ModelBillingAddressConditionInput
) {
  deleteBillingAddress(input: $input, condition: $condition) {
    id
    unitNumber
    streetNumber
    addressLine1
    addressLine2
    city
    region
    postalCode
    isDefault
    CompanyBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    UserBillingAddresses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBillingAddressMutationVariables,
  APITypes.DeleteBillingAddressMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
    id
    companyName
    phone
    contactEmail
    Items {
      nextToken
      startedAt
      __typename
    }
    ItemMROS {
      nextToken
      startedAt
      __typename
    }
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyMembers {
      nextToken
      startedAt
      __typename
    }
    CompanyOwner {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    profilePictureUrl
    fax
    cageCode
    qualityCertifications
    companyDescription
    sentRfqs {
      nextToken
      startedAt
      __typename
    }
    receivedRfqs {
      nextToken
      startedAt
      __typename
    }
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    addressId
    address {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    Notifications {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyCompanyOwnerUserID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
    id
    companyName
    phone
    contactEmail
    Items {
      nextToken
      startedAt
      __typename
    }
    ItemMROS {
      nextToken
      startedAt
      __typename
    }
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyMembers {
      nextToken
      startedAt
      __typename
    }
    CompanyOwner {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    profilePictureUrl
    fax
    cageCode
    qualityCertifications
    companyDescription
    sentRfqs {
      nextToken
      startedAt
      __typename
    }
    receivedRfqs {
      nextToken
      startedAt
      __typename
    }
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    addressId
    address {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    Notifications {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyCompanyOwnerUserID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
    id
    companyName
    phone
    contactEmail
    Items {
      nextToken
      startedAt
      __typename
    }
    ItemMROS {
      nextToken
      startedAt
      __typename
    }
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    CompanyMembers {
      nextToken
      startedAt
      __typename
    }
    CompanyOwner {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    countryID
    profilePictureUrl
    fax
    cageCode
    qualityCertifications
    companyDescription
    sentRfqs {
      nextToken
      startedAt
      __typename
    }
    receivedRfqs {
      nextToken
      startedAt
      __typename
    }
    country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    addressId
    address {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    Notifications {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyCompanyOwnerUserID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
    id
    message
    type
    companyID
    createdAt
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyNotificationsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
    id
    message
    type
    companyID
    createdAt
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyNotificationsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
    id
    message
    type
    companyID
    createdAt
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyNotificationsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createItemMRO = /* GraphQL */ `mutation CreateItemMRO(
  $input: CreateItemMROInput!
  $condition: ModelItemMROConditionInput
) {
  createItemMRO(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    price
    certification
    companyID
    imageUrls
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemMROMutationVariables,
  APITypes.CreateItemMROMutation
>;
export const updateItemMRO = /* GraphQL */ `mutation UpdateItemMRO(
  $input: UpdateItemMROInput!
  $condition: ModelItemMROConditionInput
) {
  updateItemMRO(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    price
    certification
    companyID
    imageUrls
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemMROMutationVariables,
  APITypes.UpdateItemMROMutation
>;
export const deleteItemMRO = /* GraphQL */ `mutation DeleteItemMRO(
  $input: DeleteItemMROInput!
  $condition: ModelItemMROConditionInput
) {
  deleteItemMRO(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    price
    certification
    companyID
    imageUrls
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemMROMutationVariables,
  APITypes.DeleteItemMROMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    condition
    control
    price
    demilitarizationCode
    scheduleB
    eccn
    isExportControlled
    usml
    companyID
    countryID
    Country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    imageUrls
    Rfqs {
      nextToken
      startedAt
      __typename
    }
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    viewCount
    unitOfMeasure
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    condition
    control
    price
    demilitarizationCode
    scheduleB
    eccn
    isExportControlled
    usml
    companyID
    countryID
    Country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    imageUrls
    Rfqs {
      nextToken
      startedAt
      __typename
    }
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    viewCount
    unitOfMeasure
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
    id
    nsn
    partNumber
    altPartNumber
    description
    quantity
    condition
    control
    price
    demilitarizationCode
    scheduleB
    eccn
    isExportControlled
    usml
    companyID
    countryID
    Country {
      id
      countryName
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    imageUrls
    Rfqs {
      nextToken
      startedAt
      __typename
    }
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    viewCount
    unitOfMeasure
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const createCompanyItemsImport = /* GraphQL */ `mutation CreateCompanyItemsImport(
  $input: CreateCompanyItemsImportInput!
  $condition: ModelCompanyItemsImportConditionInput
) {
  createCompanyItemsImport(input: $input, condition: $condition) {
    id
    companyID
    importName
    importStatus
    importProgress
    importFileKey
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyItemsImportMutationVariables,
  APITypes.CreateCompanyItemsImportMutation
>;
export const updateCompanyItemsImport = /* GraphQL */ `mutation UpdateCompanyItemsImport(
  $input: UpdateCompanyItemsImportInput!
  $condition: ModelCompanyItemsImportConditionInput
) {
  updateCompanyItemsImport(input: $input, condition: $condition) {
    id
    companyID
    importName
    importStatus
    importProgress
    importFileKey
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyItemsImportMutationVariables,
  APITypes.UpdateCompanyItemsImportMutation
>;
export const deleteCompanyItemsImport = /* GraphQL */ `mutation DeleteCompanyItemsImport(
  $input: DeleteCompanyItemsImportInput!
  $condition: ModelCompanyItemsImportConditionInput
) {
  deleteCompanyItemsImport(input: $input, condition: $condition) {
    id
    companyID
    importName
    importStatus
    importProgress
    importFileKey
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyItemsImportMutationVariables,
  APITypes.DeleteCompanyItemsImportMutation
>;
export const createCustomerRfqEmail = /* GraphQL */ `mutation CreateCustomerRfqEmail(
  $input: CreateCustomerRfqEmailInput!
  $condition: ModelCustomerRfqEmailConditionInput
) {
  createCustomerRfqEmail(input: $input, condition: $condition) {
    id
    email
    dateSent
    htmlBody
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerRfqEmailMutationVariables,
  APITypes.CreateCustomerRfqEmailMutation
>;
export const updateCustomerRfqEmail = /* GraphQL */ `mutation UpdateCustomerRfqEmail(
  $input: UpdateCustomerRfqEmailInput!
  $condition: ModelCustomerRfqEmailConditionInput
) {
  updateCustomerRfqEmail(input: $input, condition: $condition) {
    id
    email
    dateSent
    htmlBody
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerRfqEmailMutationVariables,
  APITypes.UpdateCustomerRfqEmailMutation
>;
export const deleteCustomerRfqEmail = /* GraphQL */ `mutation DeleteCustomerRfqEmail(
  $input: DeleteCustomerRfqEmailInput!
  $condition: ModelCustomerRfqEmailConditionInput
) {
  deleteCustomerRfqEmail(input: $input, condition: $condition) {
    id
    email
    dateSent
    htmlBody
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerRfqEmailMutationVariables,
  APITypes.DeleteCustomerRfqEmailMutation
>;
export const createNSNDetail = /* GraphQL */ `mutation CreateNSNDetail(
  $input: CreateNSNDetailInput!
  $condition: ModelNSNDetailConditionInput
) {
  createNSNDetail(input: $input, condition: $condition) {
    nsn
    niin
    itemName
    inc
    fsc
    assignmentDate
    crit
    iig
    isc
    dateStandardized
    hmic
    dodic
    nsc
    cancellationDate
    pmic
    fiig
    esd
    scheduleB
    demil
    demilint
    tiic
    originator
    adpec
    rpdmrc
    PartInformation {
      partNumber
      cage
      company
      status
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    AdditionalPartInformation {
      partNumber
      cage
      company
      source
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    ManagementInformation {
      moec
      sos
      aac
      rc
      slc
      ciic
      upq
      usc
      unitPrice
      ui
      uicf
      mcd
      actionDate
      ch
      __typename
    }
    PhraseInformation {
      moec
      pc
      phrase
      qpa
      uom
      oou
      jtc
      __typename
    }
    TechnicalCharacteristicsInformation {
      mrc
      requirementStatement
      replyStatement
      __typename
    }
    MOERulesInformation {
      moeRule
      formerMOER
      effective
      amc
      amsc
      imc
      imca
      collaborators
      receivers
      __typename
    }
    ReplacementAndObsoleteInformation {
      __typename
    }
    FreightInformation {
      description
      originatingActivity
      hazardousMaterial
      nationalMotorFreightClassificationNumber
      lessThanOneTruckload
      nmfcSubItem
      uniformFreightClassificationNumber
      railVarianceCode
      lessThanOneCarload
      waterCommodityCode
      typeOfCargoCode
      specialHandlingCode
      airCommoditySpecialHandlingCode
      airDimensionCode
      integrityCode
      __typename
    }
    PackagingInformation {
      source
      status
      priSecICC
      containerNSN
      categoryCode
      lvlAPkgReq
      unitPackSize
      presMaterial
      lvlBPkgReq
      unitPackWeight
      presMethod
      lvlCPkgReq
      unitPackCube
      wrappingMat
      optProcInd
      unpkgItemDims
      specMarking
      suppInst
      containerFSC
      spiNumber
      spiRevision
      unpkgWeight
      spiDate
      pkgDesignActivity
      interContainerQty
      interContainerCode
      cleanDryProcedure
      unitContainer
      itemTypeStorage
      unitContainerLevel
      cushDunMaterial
      cushDunThickness
      __typename
    }
    ContractHistories {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNSNDetailMutationVariables,
  APITypes.CreateNSNDetailMutation
>;
export const updateNSNDetail = /* GraphQL */ `mutation UpdateNSNDetail(
  $input: UpdateNSNDetailInput!
  $condition: ModelNSNDetailConditionInput
) {
  updateNSNDetail(input: $input, condition: $condition) {
    nsn
    niin
    itemName
    inc
    fsc
    assignmentDate
    crit
    iig
    isc
    dateStandardized
    hmic
    dodic
    nsc
    cancellationDate
    pmic
    fiig
    esd
    scheduleB
    demil
    demilint
    tiic
    originator
    adpec
    rpdmrc
    PartInformation {
      partNumber
      cage
      company
      status
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    AdditionalPartInformation {
      partNumber
      cage
      company
      source
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    ManagementInformation {
      moec
      sos
      aac
      rc
      slc
      ciic
      upq
      usc
      unitPrice
      ui
      uicf
      mcd
      actionDate
      ch
      __typename
    }
    PhraseInformation {
      moec
      pc
      phrase
      qpa
      uom
      oou
      jtc
      __typename
    }
    TechnicalCharacteristicsInformation {
      mrc
      requirementStatement
      replyStatement
      __typename
    }
    MOERulesInformation {
      moeRule
      formerMOER
      effective
      amc
      amsc
      imc
      imca
      collaborators
      receivers
      __typename
    }
    ReplacementAndObsoleteInformation {
      __typename
    }
    FreightInformation {
      description
      originatingActivity
      hazardousMaterial
      nationalMotorFreightClassificationNumber
      lessThanOneTruckload
      nmfcSubItem
      uniformFreightClassificationNumber
      railVarianceCode
      lessThanOneCarload
      waterCommodityCode
      typeOfCargoCode
      specialHandlingCode
      airCommoditySpecialHandlingCode
      airDimensionCode
      integrityCode
      __typename
    }
    PackagingInformation {
      source
      status
      priSecICC
      containerNSN
      categoryCode
      lvlAPkgReq
      unitPackSize
      presMaterial
      lvlBPkgReq
      unitPackWeight
      presMethod
      lvlCPkgReq
      unitPackCube
      wrappingMat
      optProcInd
      unpkgItemDims
      specMarking
      suppInst
      containerFSC
      spiNumber
      spiRevision
      unpkgWeight
      spiDate
      pkgDesignActivity
      interContainerQty
      interContainerCode
      cleanDryProcedure
      unitContainer
      itemTypeStorage
      unitContainerLevel
      cushDunMaterial
      cushDunThickness
      __typename
    }
    ContractHistories {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNSNDetailMutationVariables,
  APITypes.UpdateNSNDetailMutation
>;
export const deleteNSNDetail = /* GraphQL */ `mutation DeleteNSNDetail(
  $input: DeleteNSNDetailInput!
  $condition: ModelNSNDetailConditionInput
) {
  deleteNSNDetail(input: $input, condition: $condition) {
    nsn
    niin
    itemName
    inc
    fsc
    assignmentDate
    crit
    iig
    isc
    dateStandardized
    hmic
    dodic
    nsc
    cancellationDate
    pmic
    fiig
    esd
    scheduleB
    demil
    demilint
    tiic
    originator
    adpec
    rpdmrc
    PartInformation {
      partNumber
      cage
      company
      status
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    AdditionalPartInformation {
      partNumber
      cage
      company
      source
      rncc
      rnvc
      dac
      rnaac
      rnfc
      rnsc
      rnjc
      sadc
      hcc
      msds
      __typename
    }
    ManagementInformation {
      moec
      sos
      aac
      rc
      slc
      ciic
      upq
      usc
      unitPrice
      ui
      uicf
      mcd
      actionDate
      ch
      __typename
    }
    PhraseInformation {
      moec
      pc
      phrase
      qpa
      uom
      oou
      jtc
      __typename
    }
    TechnicalCharacteristicsInformation {
      mrc
      requirementStatement
      replyStatement
      __typename
    }
    MOERulesInformation {
      moeRule
      formerMOER
      effective
      amc
      amsc
      imc
      imca
      collaborators
      receivers
      __typename
    }
    ReplacementAndObsoleteInformation {
      __typename
    }
    FreightInformation {
      description
      originatingActivity
      hazardousMaterial
      nationalMotorFreightClassificationNumber
      lessThanOneTruckload
      nmfcSubItem
      uniformFreightClassificationNumber
      railVarianceCode
      lessThanOneCarload
      waterCommodityCode
      typeOfCargoCode
      specialHandlingCode
      airCommoditySpecialHandlingCode
      airDimensionCode
      integrityCode
      __typename
    }
    PackagingInformation {
      source
      status
      priSecICC
      containerNSN
      categoryCode
      lvlAPkgReq
      unitPackSize
      presMaterial
      lvlBPkgReq
      unitPackWeight
      presMethod
      lvlCPkgReq
      unitPackCube
      wrappingMat
      optProcInd
      unpkgItemDims
      specMarking
      suppInst
      containerFSC
      spiNumber
      spiRevision
      unpkgWeight
      spiDate
      pkgDesignActivity
      interContainerQty
      interContainerCode
      cleanDryProcedure
      unitContainer
      itemTypeStorage
      unitContainerLevel
      cushDunMaterial
      cushDunThickness
      __typename
    }
    ContractHistories {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNSNDetailMutationVariables,
  APITypes.DeleteNSNDetailMutation
>;
export const createContractHistory = /* GraphQL */ `mutation CreateContractHistory(
  $input: CreateContractHistoryInput!
  $condition: ModelContractHistoryConditionInput
) {
  createContractHistory(input: $input, condition: $condition) {
    contractNumber
    nsn
    NSNDetail {
      nsn
      niin
      itemName
      inc
      fsc
      assignmentDate
      crit
      iig
      isc
      dateStandardized
      hmic
      dodic
      nsc
      cancellationDate
      pmic
      fiig
      esd
      scheduleB
      demil
      demilint
      tiic
      originator
      adpec
      rpdmrc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    niin
    securityClassification
    fsc
    unit
    cage
    orderQuantity
    awardDate
    netPrice
    poNum
    poItemNo
    itemName
    partNumber
    standardUnitPrice
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContractHistoryMutationVariables,
  APITypes.CreateContractHistoryMutation
>;
export const updateContractHistory = /* GraphQL */ `mutation UpdateContractHistory(
  $input: UpdateContractHistoryInput!
  $condition: ModelContractHistoryConditionInput
) {
  updateContractHistory(input: $input, condition: $condition) {
    contractNumber
    nsn
    NSNDetail {
      nsn
      niin
      itemName
      inc
      fsc
      assignmentDate
      crit
      iig
      isc
      dateStandardized
      hmic
      dodic
      nsc
      cancellationDate
      pmic
      fiig
      esd
      scheduleB
      demil
      demilint
      tiic
      originator
      adpec
      rpdmrc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    niin
    securityClassification
    fsc
    unit
    cage
    orderQuantity
    awardDate
    netPrice
    poNum
    poItemNo
    itemName
    partNumber
    standardUnitPrice
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContractHistoryMutationVariables,
  APITypes.UpdateContractHistoryMutation
>;
export const deleteContractHistory = /* GraphQL */ `mutation DeleteContractHistory(
  $input: DeleteContractHistoryInput!
  $condition: ModelContractHistoryConditionInput
) {
  deleteContractHistory(input: $input, condition: $condition) {
    contractNumber
    nsn
    NSNDetail {
      nsn
      niin
      itemName
      inc
      fsc
      assignmentDate
      crit
      iig
      isc
      dateStandardized
      hmic
      dodic
      nsc
      cancellationDate
      pmic
      fiig
      esd
      scheduleB
      demil
      demilint
      tiic
      originator
      adpec
      rpdmrc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    niin
    securityClassification
    fsc
    unit
    cage
    orderQuantity
    awardDate
    netPrice
    poNum
    poItemNo
    itemName
    partNumber
    standardUnitPrice
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContractHistoryMutationVariables,
  APITypes.DeleteContractHistoryMutation
>;
export const createRfqItems = /* GraphQL */ `mutation CreateRfqItems(
  $input: CreateRfqItemsInput!
  $condition: ModelRfqItemsConditionInput
) {
  createRfqItems(input: $input, condition: $condition) {
    id
    rfqId
    itemId
    rfq {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      receivingCompanyID
      sendingCompanyID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
      __typename
    }
    item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRfqItemsMutationVariables,
  APITypes.CreateRfqItemsMutation
>;
export const updateRfqItems = /* GraphQL */ `mutation UpdateRfqItems(
  $input: UpdateRfqItemsInput!
  $condition: ModelRfqItemsConditionInput
) {
  updateRfqItems(input: $input, condition: $condition) {
    id
    rfqId
    itemId
    rfq {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      receivingCompanyID
      sendingCompanyID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
      __typename
    }
    item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRfqItemsMutationVariables,
  APITypes.UpdateRfqItemsMutation
>;
export const deleteRfqItems = /* GraphQL */ `mutation DeleteRfqItems(
  $input: DeleteRfqItemsInput!
  $condition: ModelRfqItemsConditionInput
) {
  deleteRfqItems(input: $input, condition: $condition) {
    id
    rfqId
    itemId
    rfq {
      id
      rfqNumber
      dateSent
      custRefNum
      companyName
      contact
      phone
      email
      shippingTerms
      shippingMethod
      leadTime
      paymentTerms
      dueDate
      quantityRequested
      quantityQuoted
      uom
      urgency
      discount
      lineTotal
      subtotal
      salesTax
      total
      internalComments
      emailComments
      addressLine1
      addressLine2
      city
      state
      zip
      country
      receivingCompanyID
      sendingCompanyID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companySentRfqsId
      companyReceivedRfqsId
      __typename
    }
    item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRfqItemsMutationVariables,
  APITypes.DeleteRfqItemsMutation
>;
export const createCompanyShippingAddress = /* GraphQL */ `mutation CreateCompanyShippingAddress(
  $input: CreateCompanyShippingAddressInput!
  $condition: ModelCompanyShippingAddressConditionInput
) {
  createCompanyShippingAddress(input: $input, condition: $condition) {
    id
    shippingAddressId
    companyId
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyShippingAddressMutationVariables,
  APITypes.CreateCompanyShippingAddressMutation
>;
export const updateCompanyShippingAddress = /* GraphQL */ `mutation UpdateCompanyShippingAddress(
  $input: UpdateCompanyShippingAddressInput!
  $condition: ModelCompanyShippingAddressConditionInput
) {
  updateCompanyShippingAddress(input: $input, condition: $condition) {
    id
    shippingAddressId
    companyId
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyShippingAddressMutationVariables,
  APITypes.UpdateCompanyShippingAddressMutation
>;
export const deleteCompanyShippingAddress = /* GraphQL */ `mutation DeleteCompanyShippingAddress(
  $input: DeleteCompanyShippingAddressInput!
  $condition: ModelCompanyShippingAddressConditionInput
) {
  deleteCompanyShippingAddress(input: $input, condition: $condition) {
    id
    shippingAddressId
    companyId
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyShippingAddressMutationVariables,
  APITypes.DeleteCompanyShippingAddressMutation
>;
export const createCompanyBillingAddress = /* GraphQL */ `mutation CreateCompanyBillingAddress(
  $input: CreateCompanyBillingAddressInput!
  $condition: ModelCompanyBillingAddressConditionInput
) {
  createCompanyBillingAddress(input: $input, condition: $condition) {
    id
    billingAddressId
    companyId
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyBillingAddressMutationVariables,
  APITypes.CreateCompanyBillingAddressMutation
>;
export const updateCompanyBillingAddress = /* GraphQL */ `mutation UpdateCompanyBillingAddress(
  $input: UpdateCompanyBillingAddressInput!
  $condition: ModelCompanyBillingAddressConditionInput
) {
  updateCompanyBillingAddress(input: $input, condition: $condition) {
    id
    billingAddressId
    companyId
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyBillingAddressMutationVariables,
  APITypes.UpdateCompanyBillingAddressMutation
>;
export const deleteCompanyBillingAddress = /* GraphQL */ `mutation DeleteCompanyBillingAddress(
  $input: DeleteCompanyBillingAddressInput!
  $condition: ModelCompanyBillingAddressConditionInput
) {
  deleteCompanyBillingAddress(input: $input, condition: $condition) {
    id
    billingAddressId
    companyId
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyBillingAddressMutationVariables,
  APITypes.DeleteCompanyBillingAddressMutation
>;
export const createUserDetails = /* GraphQL */ `mutation CreateUserDetails(
  $input: CreateUserDetailsInput!
  $condition: ModelUserDetailsConditionInput
) {
  createUserDetails(input: $input, condition: $condition) {
    userID
    firstName
    lastName
    roles
    contactEmail
    contactPhone
    companyID
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    isCompanyOwner
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDetailsMutationVariables,
  APITypes.CreateUserDetailsMutation
>;
export const updateUserDetails = /* GraphQL */ `mutation UpdateUserDetails(
  $input: UpdateUserDetailsInput!
  $condition: ModelUserDetailsConditionInput
) {
  updateUserDetails(input: $input, condition: $condition) {
    userID
    firstName
    lastName
    roles
    contactEmail
    contactPhone
    companyID
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    isCompanyOwner
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDetailsMutationVariables,
  APITypes.UpdateUserDetailsMutation
>;
export const deleteUserDetails = /* GraphQL */ `mutation DeleteUserDetails(
  $input: DeleteUserDetailsInput!
  $condition: ModelUserDetailsConditionInput
) {
  deleteUserDetails(input: $input, condition: $condition) {
    userID
    firstName
    lastName
    roles
    contactEmail
    contactPhone
    companyID
    BillingAddresses {
      nextToken
      startedAt
      __typename
    }
    ShippingAddresses {
      nextToken
      startedAt
      __typename
    }
    isCompanyOwner
    ItemViewHistories {
      nextToken
      startedAt
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    MessageBoards {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDetailsMutationVariables,
  APITypes.DeleteUserDetailsMutation
>;
export const createItemViewHistory = /* GraphQL */ `mutation CreateItemViewHistory(
  $input: CreateItemViewHistoryInput!
  $condition: ModelItemViewHistoryConditionInput
) {
  createItemViewHistory(input: $input, condition: $condition) {
    id
    itemViewDate
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    itemID
    Item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemViewHistoryMutationVariables,
  APITypes.CreateItemViewHistoryMutation
>;
export const updateItemViewHistory = /* GraphQL */ `mutation UpdateItemViewHistory(
  $input: UpdateItemViewHistoryInput!
  $condition: ModelItemViewHistoryConditionInput
) {
  updateItemViewHistory(input: $input, condition: $condition) {
    id
    itemViewDate
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    itemID
    Item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemViewHistoryMutationVariables,
  APITypes.UpdateItemViewHistoryMutation
>;
export const deleteItemViewHistory = /* GraphQL */ `mutation DeleteItemViewHistory(
  $input: DeleteItemViewHistoryInput!
  $condition: ModelItemViewHistoryConditionInput
) {
  deleteItemViewHistory(input: $input, condition: $condition) {
    id
    itemViewDate
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    itemID
    Item {
      id
      nsn
      partNumber
      altPartNumber
      description
      quantity
      condition
      control
      price
      demilitarizationCode
      scheduleB
      eccn
      isExportControlled
      usml
      companyID
      countryID
      imageUrls
      viewCount
      unitOfMeasure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemViewHistoryMutationVariables,
  APITypes.DeleteItemViewHistoryMutation
>;
export const createMessageBoard = /* GraphQL */ `mutation CreateMessageBoard(
  $input: CreateMessageBoardInput!
  $condition: ModelMessageBoardConditionInput
) {
  createMessageBoard(input: $input, condition: $condition) {
    id
    name
    description
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessageBoardsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageBoardMutationVariables,
  APITypes.CreateMessageBoardMutation
>;
export const updateMessageBoard = /* GraphQL */ `mutation UpdateMessageBoard(
  $input: UpdateMessageBoardInput!
  $condition: ModelMessageBoardConditionInput
) {
  updateMessageBoard(input: $input, condition: $condition) {
    id
    name
    description
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessageBoardsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageBoardMutationVariables,
  APITypes.UpdateMessageBoardMutation
>;
export const deleteMessageBoard = /* GraphQL */ `mutation DeleteMessageBoard(
  $input: DeleteMessageBoardInput!
  $condition: ModelMessageBoardConditionInput
) {
  deleteMessageBoard(input: $input, condition: $condition) {
    id
    name
    description
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    Messages {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessageBoardsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageBoardMutationVariables,
  APITypes.DeleteMessageBoardMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    content
    timestamp
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    messageBoardID
    MessageBoard {
      id
      name
      description
      userID
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyMessageBoardsId
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessagesId
    messageBoardMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    content
    timestamp
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    messageBoardID
    MessageBoard {
      id
      name
      description
      userID
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyMessageBoardsId
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessagesId
    messageBoardMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    content
    timestamp
    userID
    User {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    companyID
    Company {
      id
      companyName
      phone
      contactEmail
      countryID
      profilePictureUrl
      fax
      cageCode
      qualityCertifications
      companyDescription
      addressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyOwnerUserID
      __typename
    }
    messageBoardID
    MessageBoard {
      id
      name
      description
      userID
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyMessageBoardsId
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    companyMessagesId
    messageBoardMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createUserDetailsBillingAddress = /* GraphQL */ `mutation CreateUserDetailsBillingAddress(
  $input: CreateUserDetailsBillingAddressInput!
  $condition: ModelUserDetailsBillingAddressConditionInput
) {
  createUserDetailsBillingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    billingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDetailsBillingAddressMutationVariables,
  APITypes.CreateUserDetailsBillingAddressMutation
>;
export const updateUserDetailsBillingAddress = /* GraphQL */ `mutation UpdateUserDetailsBillingAddress(
  $input: UpdateUserDetailsBillingAddressInput!
  $condition: ModelUserDetailsBillingAddressConditionInput
) {
  updateUserDetailsBillingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    billingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDetailsBillingAddressMutationVariables,
  APITypes.UpdateUserDetailsBillingAddressMutation
>;
export const deleteUserDetailsBillingAddress = /* GraphQL */ `mutation DeleteUserDetailsBillingAddress(
  $input: DeleteUserDetailsBillingAddressInput!
  $condition: ModelUserDetailsBillingAddressConditionInput
) {
  deleteUserDetailsBillingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    billingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    billingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      region
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDetailsBillingAddressMutationVariables,
  APITypes.DeleteUserDetailsBillingAddressMutation
>;
export const createUserDetailsShippingAddress = /* GraphQL */ `mutation CreateUserDetailsShippingAddress(
  $input: CreateUserDetailsShippingAddressInput!
  $condition: ModelUserDetailsShippingAddressConditionInput
) {
  createUserDetailsShippingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    shippingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDetailsShippingAddressMutationVariables,
  APITypes.CreateUserDetailsShippingAddressMutation
>;
export const updateUserDetailsShippingAddress = /* GraphQL */ `mutation UpdateUserDetailsShippingAddress(
  $input: UpdateUserDetailsShippingAddressInput!
  $condition: ModelUserDetailsShippingAddressConditionInput
) {
  updateUserDetailsShippingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    shippingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDetailsShippingAddressMutationVariables,
  APITypes.UpdateUserDetailsShippingAddressMutation
>;
export const deleteUserDetailsShippingAddress = /* GraphQL */ `mutation DeleteUserDetailsShippingAddress(
  $input: DeleteUserDetailsShippingAddressInput!
  $condition: ModelUserDetailsShippingAddressConditionInput
) {
  deleteUserDetailsShippingAddress(input: $input, condition: $condition) {
    id
    userDetailsUserID
    shippingAddressId
    userDetails {
      userID
      firstName
      lastName
      roles
      contactEmail
      contactPhone
      companyID
      isCompanyOwner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    shippingAddress {
      id
      unitNumber
      streetNumber
      addressLine1
      addressLine2
      city
      regi
      postalCode
      isDefault
      countryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDetailsShippingAddressMutationVariables,
  APITypes.DeleteUserDetailsShippingAddressMutation
>;
