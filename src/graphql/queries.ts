/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchRfqs = /* GraphQL */ `query SearchRfqs(
  $filter: SearchableRfqFilterInput
  $sort: [SearchableRfqSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableRfqAggregationInput]
) {
  searchRfqs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchRfqsQueryVariables,
  APITypes.SearchRfqsQuery
>;
export const searchCompanies = /* GraphQL */ `query SearchCompanies(
  $filter: SearchableCompanyFilterInput
  $sort: [SearchableCompanySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCompanyAggregationInput]
) {
  searchCompanies(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCompaniesQueryVariables,
  APITypes.SearchCompaniesQuery
>;
export const searchItems = /* GraphQL */ `query SearchItems(
  $filter: SearchableItemFilterInput
  $sort: [SearchableItemSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableItemAggregationInput]
) {
  searchItems(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchItemsQueryVariables,
  APITypes.SearchItemsQuery
>;
export const searchNSNDetails = /* GraphQL */ `query SearchNSNDetails(
  $filter: SearchableNSNDetailFilterInput
  $sort: [SearchableNSNDetailSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableNSNDetailAggregationInput]
) {
  searchNSNDetails(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchNSNDetailsQueryVariables,
  APITypes.SearchNSNDetailsQuery
>;
export const searchContractHistories = /* GraphQL */ `query SearchContractHistories(
  $filter: SearchableContractHistoryFilterInput
  $sort: [SearchableContractHistorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableContractHistoryAggregationInput]
) {
  searchContractHistories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      contractNumber
      nsn
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContractHistoriesQueryVariables,
  APITypes.SearchContractHistoriesQuery
>;
export const getRfq = /* GraphQL */ `query GetRfq($id: ID!) {
  getRfq(id: $id) {
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
` as GeneratedQuery<APITypes.GetRfqQueryVariables, APITypes.GetRfqQuery>;
export const listRfqs = /* GraphQL */ `query ListRfqs($filter: ModelRfqFilterInput, $limit: Int, $nextToken: String) {
  listRfqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRfqsQueryVariables, APITypes.ListRfqsQuery>;
export const syncRfqs = /* GraphQL */ `query SyncRfqs(
  $filter: ModelRfqFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRfqs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncRfqsQueryVariables, APITypes.SyncRfqsQuery>;
export const getCountry = /* GraphQL */ `query GetCountry($id: ID!) {
  getCountry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCountryQueryVariables,
  APITypes.GetCountryQuery
>;
export const listCountries = /* GraphQL */ `query ListCountries(
  $filter: ModelCountryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCountriesQueryVariables,
  APITypes.ListCountriesQuery
>;
export const syncCountries = /* GraphQL */ `query SyncCountries(
  $filter: ModelCountryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCountries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCountriesQueryVariables,
  APITypes.SyncCountriesQuery
>;
export const getShippingAddress = /* GraphQL */ `query GetShippingAddress($id: ID!) {
  getShippingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetShippingAddressQueryVariables,
  APITypes.GetShippingAddressQuery
>;
export const listShippingAddresses = /* GraphQL */ `query ListShippingAddresses(
  $filter: ModelShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listShippingAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShippingAddressesQueryVariables,
  APITypes.ListShippingAddressesQuery
>;
export const syncShippingAddresses = /* GraphQL */ `query SyncShippingAddresses(
  $filter: ModelShippingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncShippingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncShippingAddressesQueryVariables,
  APITypes.SyncShippingAddressesQuery
>;
export const getBillingAddress = /* GraphQL */ `query GetBillingAddress($id: ID!) {
  getBillingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBillingAddressQueryVariables,
  APITypes.GetBillingAddressQuery
>;
export const listBillingAddresses = /* GraphQL */ `query ListBillingAddresses(
  $filter: ModelBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listBillingAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBillingAddressesQueryVariables,
  APITypes.ListBillingAddressesQuery
>;
export const syncBillingAddresses = /* GraphQL */ `query SyncBillingAddresses(
  $filter: ModelBillingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBillingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBillingAddressesQueryVariables,
  APITypes.SyncBillingAddressesQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const syncCompanies = /* GraphQL */ `query SyncCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCompanies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCompaniesQueryVariables,
  APITypes.SyncCompaniesQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      type
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const syncNotifications = /* GraphQL */ `query SyncNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      message
      type
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNotificationsQueryVariables,
  APITypes.SyncNotificationsQuery
>;
export const getItemMRO = /* GraphQL */ `query GetItemMRO($id: ID!) {
  getItemMRO(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetItemMROQueryVariables,
  APITypes.GetItemMROQuery
>;
export const listItemMROS = /* GraphQL */ `query ListItemMROS(
  $filter: ModelItemMROFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemMROS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemMROSQueryVariables,
  APITypes.ListItemMROSQuery
>;
export const syncItemMROS = /* GraphQL */ `query SyncItemMROS(
  $filter: ModelItemMROFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItemMROS(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncItemMROSQueryVariables,
  APITypes.SyncItemMROSQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
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
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const syncItems = /* GraphQL */ `query SyncItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncItemsQueryVariables, APITypes.SyncItemsQuery>;
export const getCompanyItemsImport = /* GraphQL */ `query GetCompanyItemsImport($id: ID!) {
  getCompanyItemsImport(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyItemsImportQueryVariables,
  APITypes.GetCompanyItemsImportQuery
>;
export const listCompanyItemsImports = /* GraphQL */ `query ListCompanyItemsImports(
  $id: ID
  $filter: ModelCompanyItemsImportFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCompanyItemsImports(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyItemsImportsQueryVariables,
  APITypes.ListCompanyItemsImportsQuery
>;
export const syncCompanyItemsImports = /* GraphQL */ `query SyncCompanyItemsImports(
  $filter: ModelCompanyItemsImportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCompanyItemsImports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCompanyItemsImportsQueryVariables,
  APITypes.SyncCompanyItemsImportsQuery
>;
export const getCustomerRfqEmail = /* GraphQL */ `query GetCustomerRfqEmail($id: ID!) {
  getCustomerRfqEmail(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerRfqEmailQueryVariables,
  APITypes.GetCustomerRfqEmailQuery
>;
export const listCustomerRfqEmails = /* GraphQL */ `query ListCustomerRfqEmails(
  $filter: ModelCustomerRfqEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomerRfqEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomerRfqEmailsQueryVariables,
  APITypes.ListCustomerRfqEmailsQuery
>;
export const syncCustomerRfqEmails = /* GraphQL */ `query SyncCustomerRfqEmails(
  $filter: ModelCustomerRfqEmailFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCustomerRfqEmails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCustomerRfqEmailsQueryVariables,
  APITypes.SyncCustomerRfqEmailsQuery
>;
export const getNSNDetail = /* GraphQL */ `query GetNSNDetail($nsn: ID!) {
  getNSNDetail(nsn: $nsn) {
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
` as GeneratedQuery<
  APITypes.GetNSNDetailQueryVariables,
  APITypes.GetNSNDetailQuery
>;
export const listNSNDetails = /* GraphQL */ `query ListNSNDetails(
  $nsn: ID
  $filter: ModelNSNDetailFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listNSNDetails(
    nsn: $nsn
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNSNDetailsQueryVariables,
  APITypes.ListNSNDetailsQuery
>;
export const syncNSNDetails = /* GraphQL */ `query SyncNSNDetails(
  $filter: ModelNSNDetailFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNSNDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNSNDetailsQueryVariables,
  APITypes.SyncNSNDetailsQuery
>;
export const getContractHistory = /* GraphQL */ `query GetContractHistory($contractNumber: ID!) {
  getContractHistory(contractNumber: $contractNumber) {
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
` as GeneratedQuery<
  APITypes.GetContractHistoryQueryVariables,
  APITypes.GetContractHistoryQuery
>;
export const listContractHistories = /* GraphQL */ `query ListContractHistories(
  $contractNumber: ID
  $filter: ModelContractHistoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContractHistories(
    contractNumber: $contractNumber
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      contractNumber
      nsn
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractHistoriesQueryVariables,
  APITypes.ListContractHistoriesQuery
>;
export const syncContractHistories = /* GraphQL */ `query SyncContractHistories(
  $filter: ModelContractHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncContractHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      contractNumber
      nsn
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncContractHistoriesQueryVariables,
  APITypes.SyncContractHistoriesQuery
>;
export const getRfqItems = /* GraphQL */ `query GetRfqItems($id: ID!) {
  getRfqItems(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRfqItemsQueryVariables,
  APITypes.GetRfqItemsQuery
>;
export const listRfqItems = /* GraphQL */ `query ListRfqItems(
  $filter: ModelRfqItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listRfqItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rfqId
      itemId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRfqItemsQueryVariables,
  APITypes.ListRfqItemsQuery
>;
export const syncRfqItems = /* GraphQL */ `query SyncRfqItems(
  $filter: ModelRfqItemsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRfqItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rfqId
      itemId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRfqItemsQueryVariables,
  APITypes.SyncRfqItemsQuery
>;
export const getCompanyShippingAddress = /* GraphQL */ `query GetCompanyShippingAddress($id: ID!) {
  getCompanyShippingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyShippingAddressQueryVariables,
  APITypes.GetCompanyShippingAddressQuery
>;
export const listCompanyShippingAddresses = /* GraphQL */ `query ListCompanyShippingAddresses(
  $filter: ModelCompanyShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyShippingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      shippingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyShippingAddressesQueryVariables,
  APITypes.ListCompanyShippingAddressesQuery
>;
export const syncCompanyShippingAddresses = /* GraphQL */ `query SyncCompanyShippingAddresses(
  $filter: ModelCompanyShippingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCompanyShippingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      shippingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCompanyShippingAddressesQueryVariables,
  APITypes.SyncCompanyShippingAddressesQuery
>;
export const getCompanyBillingAddress = /* GraphQL */ `query GetCompanyBillingAddress($id: ID!) {
  getCompanyBillingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyBillingAddressQueryVariables,
  APITypes.GetCompanyBillingAddressQuery
>;
export const listCompanyBillingAddresses = /* GraphQL */ `query ListCompanyBillingAddresses(
  $filter: ModelCompanyBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyBillingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      billingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyBillingAddressesQueryVariables,
  APITypes.ListCompanyBillingAddressesQuery
>;
export const syncCompanyBillingAddresses = /* GraphQL */ `query SyncCompanyBillingAddresses(
  $filter: ModelCompanyBillingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCompanyBillingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      billingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCompanyBillingAddressesQueryVariables,
  APITypes.SyncCompanyBillingAddressesQuery
>;
export const rfqsByReceivingCompanyID = /* GraphQL */ `query RfqsByReceivingCompanyID(
  $receivingCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRfqFilterInput
  $limit: Int
  $nextToken: String
) {
  rfqsByReceivingCompanyID(
    receivingCompanyID: $receivingCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RfqsByReceivingCompanyIDQueryVariables,
  APITypes.RfqsByReceivingCompanyIDQuery
>;
export const rfqsBySendingCompanyID = /* GraphQL */ `query RfqsBySendingCompanyID(
  $sendingCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRfqFilterInput
  $limit: Int
  $nextToken: String
) {
  rfqsBySendingCompanyID(
    sendingCompanyID: $sendingCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RfqsBySendingCompanyIDQueryVariables,
  APITypes.RfqsBySendingCompanyIDQuery
>;
export const shippingAddressesByCountryID = /* GraphQL */ `query ShippingAddressesByCountryID(
  $countryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  shippingAddressesByCountryID(
    countryID: $countryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ShippingAddressesByCountryIDQueryVariables,
  APITypes.ShippingAddressesByCountryIDQuery
>;
export const billingAddressesByCountryID = /* GraphQL */ `query BillingAddressesByCountryID(
  $countryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  billingAddressesByCountryID(
    countryID: $countryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BillingAddressesByCountryIDQueryVariables,
  APITypes.BillingAddressesByCountryIDQuery
>;
export const companiesByCountryID = /* GraphQL */ `query CompaniesByCountryID(
  $countryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  companiesByCountryID(
    countryID: $countryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompaniesByCountryIDQueryVariables,
  APITypes.CompaniesByCountryIDQuery
>;
export const byCompany = /* GraphQL */ `query ByCompany(
  $companyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  byCompany(
    companyID: $companyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      message
      type
      companyID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ByCompanyQueryVariables, APITypes.ByCompanyQuery>;
export const itemMROSByCompanyID = /* GraphQL */ `query ItemMROSByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemMROFilterInput
  $limit: Int
  $nextToken: String
) {
  itemMROSByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemMROSByCompanyIDQueryVariables,
  APITypes.ItemMROSByCompanyIDQuery
>;
export const itemsByCompanyID = /* GraphQL */ `query ItemsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByCompanyIDQueryVariables,
  APITypes.ItemsByCompanyIDQuery
>;
export const itemsByCountryID = /* GraphQL */ `query ItemsByCountryID(
  $countryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByCountryID(
    countryID: $countryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByCountryIDQueryVariables,
  APITypes.ItemsByCountryIDQuery
>;
export const contractHistoriesByNsn = /* GraphQL */ `query ContractHistoriesByNsn(
  $nsn: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelContractHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  contractHistoriesByNsn(
    nsn: $nsn
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      contractNumber
      nsn
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ContractHistoriesByNsnQueryVariables,
  APITypes.ContractHistoriesByNsnQuery
>;
export const rfqItemsByRfqId = /* GraphQL */ `query RfqItemsByRfqId(
  $rfqId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRfqItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  rfqItemsByRfqId(
    rfqId: $rfqId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rfqId
      itemId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RfqItemsByRfqIdQueryVariables,
  APITypes.RfqItemsByRfqIdQuery
>;
export const rfqItemsByItemId = /* GraphQL */ `query RfqItemsByItemId(
  $itemId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRfqItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  rfqItemsByItemId(
    itemId: $itemId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rfqId
      itemId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RfqItemsByItemIdQueryVariables,
  APITypes.RfqItemsByItemIdQuery
>;
export const companyShippingAddressesByShippingAddressId = /* GraphQL */ `query CompanyShippingAddressesByShippingAddressId(
  $shippingAddressId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  companyShippingAddressesByShippingAddressId(
    shippingAddressId: $shippingAddressId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      shippingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyShippingAddressesByShippingAddressIdQueryVariables,
  APITypes.CompanyShippingAddressesByShippingAddressIdQuery
>;
export const companyShippingAddressesByCompanyId = /* GraphQL */ `query CompanyShippingAddressesByCompanyId(
  $companyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  companyShippingAddressesByCompanyId(
    companyId: $companyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      shippingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyShippingAddressesByCompanyIdQueryVariables,
  APITypes.CompanyShippingAddressesByCompanyIdQuery
>;
export const companyBillingAddressesByBillingAddressId = /* GraphQL */ `query CompanyBillingAddressesByBillingAddressId(
  $billingAddressId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  companyBillingAddressesByBillingAddressId(
    billingAddressId: $billingAddressId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      billingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyBillingAddressesByBillingAddressIdQueryVariables,
  APITypes.CompanyBillingAddressesByBillingAddressIdQuery
>;
export const companyBillingAddressesByCompanyId = /* GraphQL */ `query CompanyBillingAddressesByCompanyId(
  $companyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  companyBillingAddressesByCompanyId(
    companyId: $companyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      billingAddressId
      companyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CompanyBillingAddressesByCompanyIdQueryVariables,
  APITypes.CompanyBillingAddressesByCompanyIdQuery
>;
export const getUserDetails = /* GraphQL */ `query GetUserDetails($userID: ID!) {
  getUserDetails(userID: $userID) {
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
` as GeneratedQuery<
  APITypes.GetUserDetailsQueryVariables,
  APITypes.GetUserDetailsQuery
>;
export const listUserDetails = /* GraphQL */ `query ListUserDetails(
  $userID: ID
  $filter: ModelUserDetailsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserDetails(
    userID: $userID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDetailsQueryVariables,
  APITypes.ListUserDetailsQuery
>;
export const syncUserDetails = /* GraphQL */ `query SyncUserDetails(
  $filter: ModelUserDetailsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserDetailsQueryVariables,
  APITypes.SyncUserDetailsQuery
>;
export const userDetailsByCompanyID = /* GraphQL */ `query UserDetailsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  userDetailsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDetailsByCompanyIDQueryVariables,
  APITypes.UserDetailsByCompanyIDQuery
>;
export const getItemViewHistory = /* GraphQL */ `query GetItemViewHistory($id: ID!) {
  getItemViewHistory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetItemViewHistoryQueryVariables,
  APITypes.GetItemViewHistoryQuery
>;
export const listItemViewHistories = /* GraphQL */ `query ListItemViewHistories(
  $filter: ModelItemViewHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemViewHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemViewDate
      userID
      itemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemViewHistoriesQueryVariables,
  APITypes.ListItemViewHistoriesQuery
>;
export const syncItemViewHistories = /* GraphQL */ `query SyncItemViewHistories(
  $filter: ModelItemViewHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItemViewHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      itemViewDate
      userID
      itemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncItemViewHistoriesQueryVariables,
  APITypes.SyncItemViewHistoriesQuery
>;
export const getMessageBoard = /* GraphQL */ `query GetMessageBoard($id: ID!) {
  getMessageBoard(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageBoardQueryVariables,
  APITypes.GetMessageBoardQuery
>;
export const listMessageBoards = /* GraphQL */ `query ListMessageBoards(
  $filter: ModelMessageBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageBoardsQueryVariables,
  APITypes.ListMessageBoardsQuery
>;
export const syncMessageBoards = /* GraphQL */ `query SyncMessageBoards(
  $filter: ModelMessageBoardFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessageBoards(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessageBoardsQueryVariables,
  APITypes.SyncMessageBoardsQuery
>;
export const messageBoardsByUserID = /* GraphQL */ `query MessageBoardsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  messageBoardsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessageBoardsByUserIDQueryVariables,
  APITypes.MessageBoardsByUserIDQuery
>;
export const messageBoardsByCompanyID = /* GraphQL */ `query MessageBoardsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  messageBoardsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessageBoardsByCompanyIDQueryVariables,
  APITypes.MessageBoardsByCompanyIDQuery
>;
export const searchMessageBoards = /* GraphQL */ `query SearchMessageBoards(
  $filter: SearchableMessageBoardFilterInput
  $sort: [SearchableMessageBoardSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMessageBoardAggregationInput]
) {
  searchMessageBoards(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMessageBoardsQueryVariables,
  APITypes.SearchMessageBoardsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      timestamp
      userID
      companyID
      messageBoardID
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const syncMessages = /* GraphQL */ `query SyncMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      content
      timestamp
      userID
      companyID
      messageBoardID
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessagesQueryVariables,
  APITypes.SyncMessagesQuery
>;
export const messagesByUserID = /* GraphQL */ `query MessagesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      timestamp
      userID
      companyID
      messageBoardID
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByUserIDQueryVariables,
  APITypes.MessagesByUserIDQuery
>;
export const messagesByCompanyID = /* GraphQL */ `query MessagesByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      timestamp
      userID
      companyID
      messageBoardID
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByCompanyIDQueryVariables,
  APITypes.MessagesByCompanyIDQuery
>;
export const searchMessages = /* GraphQL */ `query SearchMessages(
  $filter: SearchableMessageFilterInput
  $sort: [SearchableMessageSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMessageAggregationInput]
) {
  searchMessages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      content
      timestamp
      userID
      companyID
      messageBoardID
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMessagesQueryVariables,
  APITypes.SearchMessagesQuery
>;
export const getUserDetailsBillingAddress = /* GraphQL */ `query GetUserDetailsBillingAddress($id: ID!) {
  getUserDetailsBillingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserDetailsBillingAddressQueryVariables,
  APITypes.GetUserDetailsBillingAddressQuery
>;
export const listUserDetailsBillingAddresses = /* GraphQL */ `query ListUserDetailsBillingAddresses(
  $filter: ModelUserDetailsBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserDetailsBillingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      billingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDetailsBillingAddressesQueryVariables,
  APITypes.ListUserDetailsBillingAddressesQuery
>;
export const syncUserDetailsBillingAddresses = /* GraphQL */ `query SyncUserDetailsBillingAddresses(
  $filter: ModelUserDetailsBillingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserDetailsBillingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userDetailsUserID
      billingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserDetailsBillingAddressesQueryVariables,
  APITypes.SyncUserDetailsBillingAddressesQuery
>;
export const userDetailsBillingAddressesByUserDetailsUserID = /* GraphQL */ `query UserDetailsBillingAddressesByUserDetailsUserID(
  $userDetailsUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDetailsBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  userDetailsBillingAddressesByUserDetailsUserID(
    userDetailsUserID: $userDetailsUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      billingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDetailsBillingAddressesByUserDetailsUserIDQueryVariables,
  APITypes.UserDetailsBillingAddressesByUserDetailsUserIDQuery
>;
export const userDetailsBillingAddressesByBillingAddressId = /* GraphQL */ `query UserDetailsBillingAddressesByBillingAddressId(
  $billingAddressId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDetailsBillingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  userDetailsBillingAddressesByBillingAddressId(
    billingAddressId: $billingAddressId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      billingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDetailsBillingAddressesByBillingAddressIdQueryVariables,
  APITypes.UserDetailsBillingAddressesByBillingAddressIdQuery
>;
export const getUserDetailsShippingAddress = /* GraphQL */ `query GetUserDetailsShippingAddress($id: ID!) {
  getUserDetailsShippingAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserDetailsShippingAddressQueryVariables,
  APITypes.GetUserDetailsShippingAddressQuery
>;
export const listUserDetailsShippingAddresses = /* GraphQL */ `query ListUserDetailsShippingAddresses(
  $filter: ModelUserDetailsShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserDetailsShippingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      shippingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDetailsShippingAddressesQueryVariables,
  APITypes.ListUserDetailsShippingAddressesQuery
>;
export const syncUserDetailsShippingAddresses = /* GraphQL */ `query SyncUserDetailsShippingAddresses(
  $filter: ModelUserDetailsShippingAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserDetailsShippingAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userDetailsUserID
      shippingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserDetailsShippingAddressesQueryVariables,
  APITypes.SyncUserDetailsShippingAddressesQuery
>;
export const userDetailsShippingAddressesByUserDetailsUserID = /* GraphQL */ `query UserDetailsShippingAddressesByUserDetailsUserID(
  $userDetailsUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDetailsShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  userDetailsShippingAddressesByUserDetailsUserID(
    userDetailsUserID: $userDetailsUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      shippingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDetailsShippingAddressesByUserDetailsUserIDQueryVariables,
  APITypes.UserDetailsShippingAddressesByUserDetailsUserIDQuery
>;
export const userDetailsShippingAddressesByShippingAddressId = /* GraphQL */ `query UserDetailsShippingAddressesByShippingAddressId(
  $shippingAddressId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDetailsShippingAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  userDetailsShippingAddressesByShippingAddressId(
    shippingAddressId: $shippingAddressId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userDetailsUserID
      shippingAddressId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDetailsShippingAddressesByShippingAddressIdQueryVariables,
  APITypes.UserDetailsShippingAddressesByShippingAddressIdQuery
>;
