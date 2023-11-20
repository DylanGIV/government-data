/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRfq = /* GraphQL */ `subscription OnCreateRfq($filter: ModelSubscriptionRfqFilterInput) {
  onCreateRfq(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRfqSubscriptionVariables,
  APITypes.OnCreateRfqSubscription
>;
export const onUpdateRfq = /* GraphQL */ `subscription OnUpdateRfq($filter: ModelSubscriptionRfqFilterInput) {
  onUpdateRfq(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRfqSubscriptionVariables,
  APITypes.OnUpdateRfqSubscription
>;
export const onDeleteRfq = /* GraphQL */ `subscription OnDeleteRfq($filter: ModelSubscriptionRfqFilterInput) {
  onDeleteRfq(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRfqSubscriptionVariables,
  APITypes.OnDeleteRfqSubscription
>;
export const onCreateCountry = /* GraphQL */ `subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
  onCreateCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCountrySubscriptionVariables,
  APITypes.OnCreateCountrySubscription
>;
export const onUpdateCountry = /* GraphQL */ `subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
  onUpdateCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCountrySubscriptionVariables,
  APITypes.OnUpdateCountrySubscription
>;
export const onDeleteCountry = /* GraphQL */ `subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
  onDeleteCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCountrySubscriptionVariables,
  APITypes.OnDeleteCountrySubscription
>;
export const onCreateShippingAddress = /* GraphQL */ `subscription OnCreateShippingAddress(
  $filter: ModelSubscriptionShippingAddressFilterInput
) {
  onCreateShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShippingAddressSubscriptionVariables,
  APITypes.OnCreateShippingAddressSubscription
>;
export const onUpdateShippingAddress = /* GraphQL */ `subscription OnUpdateShippingAddress(
  $filter: ModelSubscriptionShippingAddressFilterInput
) {
  onUpdateShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShippingAddressSubscriptionVariables,
  APITypes.OnUpdateShippingAddressSubscription
>;
export const onDeleteShippingAddress = /* GraphQL */ `subscription OnDeleteShippingAddress(
  $filter: ModelSubscriptionShippingAddressFilterInput
) {
  onDeleteShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShippingAddressSubscriptionVariables,
  APITypes.OnDeleteShippingAddressSubscription
>;
export const onCreateBillingAddress = /* GraphQL */ `subscription OnCreateBillingAddress(
  $filter: ModelSubscriptionBillingAddressFilterInput
) {
  onCreateBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBillingAddressSubscriptionVariables,
  APITypes.OnCreateBillingAddressSubscription
>;
export const onUpdateBillingAddress = /* GraphQL */ `subscription OnUpdateBillingAddress(
  $filter: ModelSubscriptionBillingAddressFilterInput
) {
  onUpdateBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBillingAddressSubscriptionVariables,
  APITypes.OnUpdateBillingAddressSubscription
>;
export const onDeleteBillingAddress = /* GraphQL */ `subscription OnDeleteBillingAddress(
  $filter: ModelSubscriptionBillingAddressFilterInput
) {
  onDeleteBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBillingAddressSubscriptionVariables,
  APITypes.OnDeleteBillingAddressSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateItemMRO = /* GraphQL */ `subscription OnCreateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
  onCreateItemMRO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemMROSubscriptionVariables,
  APITypes.OnCreateItemMROSubscription
>;
export const onUpdateItemMRO = /* GraphQL */ `subscription OnUpdateItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
  onUpdateItemMRO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemMROSubscriptionVariables,
  APITypes.OnUpdateItemMROSubscription
>;
export const onDeleteItemMRO = /* GraphQL */ `subscription OnDeleteItemMRO($filter: ModelSubscriptionItemMROFilterInput) {
  onDeleteItemMRO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemMROSubscriptionVariables,
  APITypes.OnDeleteItemMROSubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onCreateCompanyItemsImport = /* GraphQL */ `subscription OnCreateCompanyItemsImport(
  $filter: ModelSubscriptionCompanyItemsImportFilterInput
) {
  onCreateCompanyItemsImport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanyItemsImportSubscriptionVariables,
  APITypes.OnCreateCompanyItemsImportSubscription
>;
export const onUpdateCompanyItemsImport = /* GraphQL */ `subscription OnUpdateCompanyItemsImport(
  $filter: ModelSubscriptionCompanyItemsImportFilterInput
) {
  onUpdateCompanyItemsImport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyItemsImportSubscriptionVariables,
  APITypes.OnUpdateCompanyItemsImportSubscription
>;
export const onDeleteCompanyItemsImport = /* GraphQL */ `subscription OnDeleteCompanyItemsImport(
  $filter: ModelSubscriptionCompanyItemsImportFilterInput
) {
  onDeleteCompanyItemsImport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyItemsImportSubscriptionVariables,
  APITypes.OnDeleteCompanyItemsImportSubscription
>;
export const onCreateCustomerRfqEmail = /* GraphQL */ `subscription OnCreateCustomerRfqEmail(
  $filter: ModelSubscriptionCustomerRfqEmailFilterInput
) {
  onCreateCustomerRfqEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerRfqEmailSubscriptionVariables,
  APITypes.OnCreateCustomerRfqEmailSubscription
>;
export const onUpdateCustomerRfqEmail = /* GraphQL */ `subscription OnUpdateCustomerRfqEmail(
  $filter: ModelSubscriptionCustomerRfqEmailFilterInput
) {
  onUpdateCustomerRfqEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerRfqEmailSubscriptionVariables,
  APITypes.OnUpdateCustomerRfqEmailSubscription
>;
export const onDeleteCustomerRfqEmail = /* GraphQL */ `subscription OnDeleteCustomerRfqEmail(
  $filter: ModelSubscriptionCustomerRfqEmailFilterInput
) {
  onDeleteCustomerRfqEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerRfqEmailSubscriptionVariables,
  APITypes.OnDeleteCustomerRfqEmailSubscription
>;
export const onCreateNSNDetail = /* GraphQL */ `subscription OnCreateNSNDetail($filter: ModelSubscriptionNSNDetailFilterInput) {
  onCreateNSNDetail(filter: $filter) {
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
      nextToken
      startedAt
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
` as GeneratedSubscription<
  APITypes.OnCreateNSNDetailSubscriptionVariables,
  APITypes.OnCreateNSNDetailSubscription
>;
export const onUpdateNSNDetail = /* GraphQL */ `subscription OnUpdateNSNDetail($filter: ModelSubscriptionNSNDetailFilterInput) {
  onUpdateNSNDetail(filter: $filter) {
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
      nextToken
      startedAt
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
` as GeneratedSubscription<
  APITypes.OnUpdateNSNDetailSubscriptionVariables,
  APITypes.OnUpdateNSNDetailSubscription
>;
export const onDeleteNSNDetail = /* GraphQL */ `subscription OnDeleteNSNDetail($filter: ModelSubscriptionNSNDetailFilterInput) {
  onDeleteNSNDetail(filter: $filter) {
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
      nextToken
      startedAt
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
` as GeneratedSubscription<
  APITypes.OnDeleteNSNDetailSubscriptionVariables,
  APITypes.OnDeleteNSNDetailSubscription
>;
export const onCreatePartInformation = /* GraphQL */ `subscription OnCreatePartInformation(
  $filter: ModelSubscriptionPartInformationFilterInput
) {
  onCreatePartInformation(filter: $filter) {
    id
    nsn
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePartInformationSubscriptionVariables,
  APITypes.OnCreatePartInformationSubscription
>;
export const onUpdatePartInformation = /* GraphQL */ `subscription OnUpdatePartInformation(
  $filter: ModelSubscriptionPartInformationFilterInput
) {
  onUpdatePartInformation(filter: $filter) {
    id
    nsn
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePartInformationSubscriptionVariables,
  APITypes.OnUpdatePartInformationSubscription
>;
export const onDeletePartInformation = /* GraphQL */ `subscription OnDeletePartInformation(
  $filter: ModelSubscriptionPartInformationFilterInput
) {
  onDeletePartInformation(filter: $filter) {
    id
    nsn
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePartInformationSubscriptionVariables,
  APITypes.OnDeletePartInformationSubscription
>;
export const onCreateContractHistory = /* GraphQL */ `subscription OnCreateContractHistory(
  $filter: ModelSubscriptionContractHistoryFilterInput
) {
  onCreateContractHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContractHistorySubscriptionVariables,
  APITypes.OnCreateContractHistorySubscription
>;
export const onUpdateContractHistory = /* GraphQL */ `subscription OnUpdateContractHistory(
  $filter: ModelSubscriptionContractHistoryFilterInput
) {
  onUpdateContractHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContractHistorySubscriptionVariables,
  APITypes.OnUpdateContractHistorySubscription
>;
export const onDeleteContractHistory = /* GraphQL */ `subscription OnDeleteContractHistory(
  $filter: ModelSubscriptionContractHistoryFilterInput
) {
  onDeleteContractHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContractHistorySubscriptionVariables,
  APITypes.OnDeleteContractHistorySubscription
>;
export const onCreateRfqItems = /* GraphQL */ `subscription OnCreateRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
  onCreateRfqItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRfqItemsSubscriptionVariables,
  APITypes.OnCreateRfqItemsSubscription
>;
export const onUpdateRfqItems = /* GraphQL */ `subscription OnUpdateRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
  onUpdateRfqItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRfqItemsSubscriptionVariables,
  APITypes.OnUpdateRfqItemsSubscription
>;
export const onDeleteRfqItems = /* GraphQL */ `subscription OnDeleteRfqItems($filter: ModelSubscriptionRfqItemsFilterInput) {
  onDeleteRfqItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRfqItemsSubscriptionVariables,
  APITypes.OnDeleteRfqItemsSubscription
>;
export const onCreateCompanyShippingAddress = /* GraphQL */ `subscription OnCreateCompanyShippingAddress(
  $filter: ModelSubscriptionCompanyShippingAddressFilterInput
) {
  onCreateCompanyShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanyShippingAddressSubscriptionVariables,
  APITypes.OnCreateCompanyShippingAddressSubscription
>;
export const onUpdateCompanyShippingAddress = /* GraphQL */ `subscription OnUpdateCompanyShippingAddress(
  $filter: ModelSubscriptionCompanyShippingAddressFilterInput
) {
  onUpdateCompanyShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyShippingAddressSubscriptionVariables,
  APITypes.OnUpdateCompanyShippingAddressSubscription
>;
export const onDeleteCompanyShippingAddress = /* GraphQL */ `subscription OnDeleteCompanyShippingAddress(
  $filter: ModelSubscriptionCompanyShippingAddressFilterInput
) {
  onDeleteCompanyShippingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyShippingAddressSubscriptionVariables,
  APITypes.OnDeleteCompanyShippingAddressSubscription
>;
export const onCreateCompanyBillingAddress = /* GraphQL */ `subscription OnCreateCompanyBillingAddress(
  $filter: ModelSubscriptionCompanyBillingAddressFilterInput
) {
  onCreateCompanyBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanyBillingAddressSubscriptionVariables,
  APITypes.OnCreateCompanyBillingAddressSubscription
>;
export const onUpdateCompanyBillingAddress = /* GraphQL */ `subscription OnUpdateCompanyBillingAddress(
  $filter: ModelSubscriptionCompanyBillingAddressFilterInput
) {
  onUpdateCompanyBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanyBillingAddressSubscriptionVariables,
  APITypes.OnUpdateCompanyBillingAddressSubscription
>;
export const onDeleteCompanyBillingAddress = /* GraphQL */ `subscription OnDeleteCompanyBillingAddress(
  $filter: ModelSubscriptionCompanyBillingAddressFilterInput
) {
  onDeleteCompanyBillingAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanyBillingAddressSubscriptionVariables,
  APITypes.OnDeleteCompanyBillingAddressSubscription
>;
export const onCreateUserDetails = /* GraphQL */ `subscription OnCreateUserDetails(
  $filter: ModelSubscriptionUserDetailsFilterInput
  $owner: String
) {
  onCreateUserDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDetailsSubscriptionVariables,
  APITypes.OnCreateUserDetailsSubscription
>;
export const onUpdateUserDetails = /* GraphQL */ `subscription OnUpdateUserDetails(
  $filter: ModelSubscriptionUserDetailsFilterInput
  $owner: String
) {
  onUpdateUserDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDetailsSubscriptionVariables,
  APITypes.OnUpdateUserDetailsSubscription
>;
export const onDeleteUserDetails = /* GraphQL */ `subscription OnDeleteUserDetails(
  $filter: ModelSubscriptionUserDetailsFilterInput
  $owner: String
) {
  onDeleteUserDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDetailsSubscriptionVariables,
  APITypes.OnDeleteUserDetailsSubscription
>;
export const onCreateItemViewHistory = /* GraphQL */ `subscription OnCreateItemViewHistory(
  $filter: ModelSubscriptionItemViewHistoryFilterInput
  $owner: String
) {
  onCreateItemViewHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemViewHistorySubscriptionVariables,
  APITypes.OnCreateItemViewHistorySubscription
>;
export const onUpdateItemViewHistory = /* GraphQL */ `subscription OnUpdateItemViewHistory(
  $filter: ModelSubscriptionItemViewHistoryFilterInput
  $owner: String
) {
  onUpdateItemViewHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemViewHistorySubscriptionVariables,
  APITypes.OnUpdateItemViewHistorySubscription
>;
export const onDeleteItemViewHistory = /* GraphQL */ `subscription OnDeleteItemViewHistory(
  $filter: ModelSubscriptionItemViewHistoryFilterInput
  $owner: String
) {
  onDeleteItemViewHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemViewHistorySubscriptionVariables,
  APITypes.OnDeleteItemViewHistorySubscription
>;
export const onCreateMessageBoard = /* GraphQL */ `subscription OnCreateMessageBoard(
  $filter: ModelSubscriptionMessageBoardFilterInput
  $owner: String
) {
  onCreateMessageBoard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageBoardSubscriptionVariables,
  APITypes.OnCreateMessageBoardSubscription
>;
export const onUpdateMessageBoard = /* GraphQL */ `subscription OnUpdateMessageBoard(
  $filter: ModelSubscriptionMessageBoardFilterInput
  $owner: String
) {
  onUpdateMessageBoard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageBoardSubscriptionVariables,
  APITypes.OnUpdateMessageBoardSubscription
>;
export const onDeleteMessageBoard = /* GraphQL */ `subscription OnDeleteMessageBoard(
  $filter: ModelSubscriptionMessageBoardFilterInput
  $owner: String
) {
  onDeleteMessageBoard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageBoardSubscriptionVariables,
  APITypes.OnDeleteMessageBoardSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateUserDetailsBillingAddress = /* GraphQL */ `subscription OnCreateUserDetailsBillingAddress(
  $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  $owner: String
) {
  onCreateUserDetailsBillingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDetailsBillingAddressSubscriptionVariables,
  APITypes.OnCreateUserDetailsBillingAddressSubscription
>;
export const onUpdateUserDetailsBillingAddress = /* GraphQL */ `subscription OnUpdateUserDetailsBillingAddress(
  $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  $owner: String
) {
  onUpdateUserDetailsBillingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDetailsBillingAddressSubscriptionVariables,
  APITypes.OnUpdateUserDetailsBillingAddressSubscription
>;
export const onDeleteUserDetailsBillingAddress = /* GraphQL */ `subscription OnDeleteUserDetailsBillingAddress(
  $filter: ModelSubscriptionUserDetailsBillingAddressFilterInput
  $owner: String
) {
  onDeleteUserDetailsBillingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDetailsBillingAddressSubscriptionVariables,
  APITypes.OnDeleteUserDetailsBillingAddressSubscription
>;
export const onCreateUserDetailsShippingAddress = /* GraphQL */ `subscription OnCreateUserDetailsShippingAddress(
  $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  $owner: String
) {
  onCreateUserDetailsShippingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDetailsShippingAddressSubscriptionVariables,
  APITypes.OnCreateUserDetailsShippingAddressSubscription
>;
export const onUpdateUserDetailsShippingAddress = /* GraphQL */ `subscription OnUpdateUserDetailsShippingAddress(
  $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  $owner: String
) {
  onUpdateUserDetailsShippingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDetailsShippingAddressSubscriptionVariables,
  APITypes.OnUpdateUserDetailsShippingAddressSubscription
>;
export const onDeleteUserDetailsShippingAddress = /* GraphQL */ `subscription OnDeleteUserDetailsShippingAddress(
  $filter: ModelSubscriptionUserDetailsShippingAddressFilterInput
  $owner: String
) {
  onDeleteUserDetailsShippingAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDetailsShippingAddressSubscriptionVariables,
  APITypes.OnDeleteUserDetailsShippingAddressSubscription
>;
