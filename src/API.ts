/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRfqInput = {
  id?: string | null;
  rfqNumber?: string | null;
  dateSent?: string | null;
  custRefNum?: string | null;
  companyName?: string | null;
  contact?: string | null;
  phone?: string | null;
  email?: string | null;
  shippingTerms?: string | null;
  shippingMethod?: string | null;
  leadTime?: number | null;
  paymentTerms?: string | null;
  dueDate?: string | null;
  quantityRequested?: Array<number | null> | null;
  quantityQuoted?: Array<number | null> | null;
  uom?: string | null;
  urgency?: string | null;
  discount?: number | null;
  lineTotal?: number | null;
  subtotal?: number | null;
  salesTax?: number | null;
  total?: number | null;
  internalComments?: string | null;
  emailComments?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  receivingCompanyID: string;
  sendingCompanyID: string;
  status?: string | null;
  _version?: number | null;
  companySentRfqsId?: string | null;
  companyReceivedRfqsId?: string | null;
};

export type ModelRfqConditionInput = {
  rfqNumber?: ModelStringInput | null;
  dateSent?: ModelStringInput | null;
  custRefNum?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  contact?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  shippingTerms?: ModelStringInput | null;
  shippingMethod?: ModelStringInput | null;
  leadTime?: ModelIntInput | null;
  paymentTerms?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  quantityRequested?: ModelIntInput | null;
  quantityQuoted?: ModelIntInput | null;
  uom?: ModelStringInput | null;
  urgency?: ModelStringInput | null;
  discount?: ModelFloatInput | null;
  lineTotal?: ModelFloatInput | null;
  subtotal?: ModelFloatInput | null;
  salesTax?: ModelFloatInput | null;
  total?: ModelFloatInput | null;
  internalComments?: ModelStringInput | null;
  emailComments?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  country?: ModelStringInput | null;
  receivingCompanyID?: ModelIDInput | null;
  sendingCompanyID?: ModelIDInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelRfqConditionInput | null> | null;
  or?: Array<ModelRfqConditionInput | null> | null;
  not?: ModelRfqConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  companySentRfqsId?: ModelIDInput | null;
  companyReceivedRfqsId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Rfq = {
  __typename: "Rfq";
  id: string;
  rfqNumber?: string | null;
  dateSent?: string | null;
  custRefNum?: string | null;
  companyName?: string | null;
  contact?: string | null;
  phone?: string | null;
  email?: string | null;
  shippingTerms?: string | null;
  shippingMethod?: string | null;
  leadTime?: number | null;
  paymentTerms?: string | null;
  dueDate?: string | null;
  quantityRequested?: Array<number | null> | null;
  quantityQuoted?: Array<number | null> | null;
  uom?: string | null;
  urgency?: string | null;
  discount?: number | null;
  lineTotal?: number | null;
  subtotal?: number | null;
  salesTax?: number | null;
  total?: number | null;
  internalComments?: string | null;
  emailComments?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  Items?: ModelRfqItemsConnection | null;
  receivingCompanyID: string;
  sendingCompanyID: string;
  ReceivingCompany?: Company | null;
  SendingCompany?: Company | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  companySentRfqsId?: string | null;
  companyReceivedRfqsId?: string | null;
};

export type ModelRfqItemsConnection = {
  __typename: "ModelRfqItemsConnection";
  items: Array<RfqItems | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type RfqItems = {
  __typename: "RfqItems";
  id: string;
  rfqId: string;
  itemId: string;
  rfq: Rfq;
  item: Item;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Item = {
  __typename: "Item";
  id: string;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  condition?: string | null;
  control?: string | null;
  price?: number | null;
  demilitarizationCode?: string | null;
  scheduleB?: string | null;
  eccn?: string | null;
  isExportControlled?: boolean | null;
  usml?: boolean | null;
  companyID: string;
  countryID?: string | null;
  Country?: Country | null;
  imageUrls?: Array<string | null> | null;
  Rfqs?: ModelRfqItemsConnection | null;
  Company?: Company | null;
  ItemViewHistories?: ModelItemViewHistoryConnection | null;
  viewCount?: number | null;
  unitOfMeasure?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Country = {
  __typename: "Country";
  id: string;
  countryName?: string | null;
  code?: string | null;
  BillingAddresses?: ModelBillingAddressConnection | null;
  ShippingAddresses?: ModelShippingAddressConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelBillingAddressConnection = {
  __typename: "ModelBillingAddressConnection";
  items: Array<BillingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type BillingAddress = {
  __typename: "BillingAddress";
  id: string;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  CompanyBillingAddresses?: ModelCompanyBillingAddressConnection | null;
  countryID: string;
  country?: Country | null;
  UserBillingAddresses?: ModelUserDetailsBillingAddressConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelCompanyBillingAddressConnection = {
  __typename: "ModelCompanyBillingAddressConnection";
  items: Array<CompanyBillingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CompanyBillingAddress = {
  __typename: "CompanyBillingAddress";
  id: string;
  billingAddressId: string;
  companyId: string;
  billingAddress: BillingAddress;
  company: Company;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Company = {
  __typename: "Company";
  id: string;
  companyName?: string | null;
  phone?: string | null;
  contactEmail?: string | null;
  Items?: ModelItemConnection | null;
  ItemMROS?: ModelItemMROConnection | null;
  BillingAddresses?: ModelCompanyBillingAddressConnection | null;
  CompanyMembers?: ModelUserDetailsConnection | null;
  CompanyOwner?: UserDetails | null;
  ShippingAddresses?: ModelCompanyShippingAddressConnection | null;
  countryID?: string | null;
  profilePictureUrl?: string | null;
  fax?: string | null;
  cageCode?: string | null;
  qualityCertifications?: Array<string | null> | null;
  companyDescription?: string | null;
  sentRfqs?: ModelRfqConnection | null;
  receivedRfqs?: ModelRfqConnection | null;
  country?: Country | null;
  addressId?: string | null;
  address?: ShippingAddress | null;
  MessageBoards?: ModelMessageBoardConnection | null;
  Messages?: ModelMessageConnection | null;
  Notifications?: ModelNotificationConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  companyCompanyOwnerUserID?: string | null;
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection";
  items: Array<Item | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelItemMROConnection = {
  __typename: "ModelItemMROConnection";
  items: Array<ItemMRO | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ItemMRO = {
  __typename: "ItemMRO";
  id: string;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  price?: number | null;
  certification?: string | null;
  companyID: string;
  imageUrls?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelUserDetailsConnection = {
  __typename: "ModelUserDetailsConnection";
  items: Array<UserDetails | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserDetails = {
  __typename: "UserDetails";
  userID: string;
  firstName?: string | null;
  lastName?: string | null;
  roles?: Array<string | null> | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  companyID?: string | null;
  BillingAddresses?: ModelUserDetailsBillingAddressConnection | null;
  ShippingAddresses?: ModelUserDetailsShippingAddressConnection | null;
  isCompanyOwner?: boolean | null;
  ItemViewHistories?: ModelItemViewHistoryConnection | null;
  Messages?: ModelMessageConnection | null;
  MessageBoards?: ModelMessageBoardConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelUserDetailsBillingAddressConnection = {
  __typename: "ModelUserDetailsBillingAddressConnection";
  items: Array<UserDetailsBillingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserDetailsBillingAddress = {
  __typename: "UserDetailsBillingAddress";
  id: string;
  userDetailsUserID: string;
  billingAddressId: string;
  userDetails: UserDetails;
  billingAddress: BillingAddress;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelUserDetailsShippingAddressConnection = {
  __typename: "ModelUserDetailsShippingAddressConnection";
  items: Array<UserDetailsShippingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserDetailsShippingAddress = {
  __typename: "UserDetailsShippingAddress";
  id: string;
  userDetailsUserID: string;
  shippingAddressId: string;
  userDetails: UserDetails;
  shippingAddress: ShippingAddress;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ShippingAddress = {
  __typename: "ShippingAddress";
  id: string;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  regi?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  countryID: string;
  country?: Country | null;
  UserShippingAddresses?: ModelUserDetailsShippingAddressConnection | null;
  CompanyShippingAddresses?: ModelCompanyShippingAddressConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelCompanyShippingAddressConnection = {
  __typename: "ModelCompanyShippingAddressConnection";
  items: Array<CompanyShippingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CompanyShippingAddress = {
  __typename: "CompanyShippingAddress";
  id: string;
  shippingAddressId: string;
  companyId: string;
  shippingAddress: ShippingAddress;
  company: Company;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelItemViewHistoryConnection = {
  __typename: "ModelItemViewHistoryConnection";
  items: Array<ItemViewHistory | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ItemViewHistory = {
  __typename: "ItemViewHistory";
  id: string;
  itemViewDate: string;
  userID: string;
  User?: UserDetails | null;
  itemID: string;
  Item?: Item | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  content: string;
  timestamp: string;
  userID: string;
  User?: UserDetails | null;
  companyID: string;
  Company?: Company | null;
  messageBoardID: string;
  MessageBoard?: MessageBoard | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  companyMessagesId?: string | null;
  messageBoardMessagesId?: string | null;
  owner?: string | null;
};

export type MessageBoard = {
  __typename: "MessageBoard";
  id: string;
  name: string;
  description?: string | null;
  userID: string;
  User?: UserDetails | null;
  companyID: string;
  Company?: Company | null;
  Messages?: ModelMessageConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  companyMessageBoardsId?: string | null;
  owner?: string | null;
};

export type ModelMessageBoardConnection = {
  __typename: "ModelMessageBoardConnection";
  items: Array<MessageBoard | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelRfqConnection = {
  __typename: "ModelRfqConnection";
  items: Array<Rfq | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection";
  items: Array<Notification | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Notification = {
  __typename: "Notification";
  id: string;
  message: string;
  type: string;
  companyID: string;
  createdAt: string;
  Company?: Company | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  companyNotificationsId?: string | null;
};

export type ModelShippingAddressConnection = {
  __typename: "ModelShippingAddressConnection";
  items: Array<ShippingAddress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateRfqInput = {
  id: string;
  rfqNumber?: string | null;
  dateSent?: string | null;
  custRefNum?: string | null;
  companyName?: string | null;
  contact?: string | null;
  phone?: string | null;
  email?: string | null;
  shippingTerms?: string | null;
  shippingMethod?: string | null;
  leadTime?: number | null;
  paymentTerms?: string | null;
  dueDate?: string | null;
  quantityRequested?: Array<number | null> | null;
  quantityQuoted?: Array<number | null> | null;
  uom?: string | null;
  urgency?: string | null;
  discount?: number | null;
  lineTotal?: number | null;
  subtotal?: number | null;
  salesTax?: number | null;
  total?: number | null;
  internalComments?: string | null;
  emailComments?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  receivingCompanyID?: string | null;
  sendingCompanyID?: string | null;
  status?: string | null;
  _version?: number | null;
  companySentRfqsId?: string | null;
  companyReceivedRfqsId?: string | null;
};

export type DeleteRfqInput = {
  id: string;
  _version?: number | null;
};

export type CreateCountryInput = {
  id?: string | null;
  countryName?: string | null;
  code?: string | null;
  _version?: number | null;
};

export type ModelCountryConditionInput = {
  countryName?: ModelStringInput | null;
  code?: ModelStringInput | null;
  and?: Array<ModelCountryConditionInput | null> | null;
  or?: Array<ModelCountryConditionInput | null> | null;
  not?: ModelCountryConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateCountryInput = {
  id: string;
  countryName?: string | null;
  code?: string | null;
  _version?: number | null;
};

export type DeleteCountryInput = {
  id: string;
  _version?: number | null;
};

export type CreateShippingAddressInput = {
  id?: string | null;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  regi?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  countryID: string;
  _version?: number | null;
};

export type ModelShippingAddressConditionInput = {
  unitNumber?: ModelStringInput | null;
  streetNumber?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  regi?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  isDefault?: ModelBooleanInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelShippingAddressConditionInput | null> | null;
  or?: Array<ModelShippingAddressConditionInput | null> | null;
  not?: ModelShippingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateShippingAddressInput = {
  id: string;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  regi?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  countryID?: string | null;
  _version?: number | null;
};

export type DeleteShippingAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateBillingAddressInput = {
  id?: string | null;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  countryID: string;
  _version?: number | null;
};

export type ModelBillingAddressConditionInput = {
  unitNumber?: ModelStringInput | null;
  streetNumber?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  region?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  isDefault?: ModelBooleanInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelBillingAddressConditionInput | null> | null;
  or?: Array<ModelBillingAddressConditionInput | null> | null;
  not?: ModelBillingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateBillingAddressInput = {
  id: string;
  unitNumber?: string | null;
  streetNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  isDefault?: boolean | null;
  countryID?: string | null;
  _version?: number | null;
};

export type DeleteBillingAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompanyInput = {
  id?: string | null;
  companyName?: string | null;
  phone?: string | null;
  contactEmail?: string | null;
  countryID?: string | null;
  profilePictureUrl?: string | null;
  fax?: string | null;
  cageCode?: string | null;
  qualityCertifications?: Array<string | null> | null;
  companyDescription?: string | null;
  addressId?: string | null;
  _version?: number | null;
  companyCompanyOwnerUserID?: string | null;
};

export type ModelCompanyConditionInput = {
  companyName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  profilePictureUrl?: ModelStringInput | null;
  fax?: ModelStringInput | null;
  cageCode?: ModelStringInput | null;
  qualityCertifications?: ModelStringInput | null;
  companyDescription?: ModelStringInput | null;
  addressId?: ModelIDInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  companyCompanyOwnerUserID?: ModelIDInput | null;
};

export type UpdateCompanyInput = {
  id: string;
  companyName?: string | null;
  phone?: string | null;
  contactEmail?: string | null;
  countryID?: string | null;
  profilePictureUrl?: string | null;
  fax?: string | null;
  cageCode?: string | null;
  qualityCertifications?: Array<string | null> | null;
  companyDescription?: string | null;
  addressId?: string | null;
  _version?: number | null;
  companyCompanyOwnerUserID?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
  _version?: number | null;
};

export type CreateNotificationInput = {
  id?: string | null;
  message: string;
  type: string;
  companyID: string;
  createdAt?: string | null;
  _version?: number | null;
  companyNotificationsId?: string | null;
};

export type ModelNotificationConditionInput = {
  message?: ModelStringInput | null;
  type?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelNotificationConditionInput | null> | null;
  or?: Array<ModelNotificationConditionInput | null> | null;
  not?: ModelNotificationConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  companyNotificationsId?: ModelIDInput | null;
};

export type UpdateNotificationInput = {
  id: string;
  message?: string | null;
  type?: string | null;
  companyID?: string | null;
  createdAt?: string | null;
  _version?: number | null;
  companyNotificationsId?: string | null;
};

export type DeleteNotificationInput = {
  id: string;
  _version?: number | null;
};

export type CreateItemMROInput = {
  id?: string | null;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  price?: number | null;
  certification?: string | null;
  companyID: string;
  imageUrls?: Array<string | null> | null;
  _version?: number | null;
};

export type ModelItemMROConditionInput = {
  nsn?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  altPartNumber?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  certification?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  imageUrls?: ModelStringInput | null;
  and?: Array<ModelItemMROConditionInput | null> | null;
  or?: Array<ModelItemMROConditionInput | null> | null;
  not?: ModelItemMROConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateItemMROInput = {
  id: string;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  price?: number | null;
  certification?: string | null;
  companyID?: string | null;
  imageUrls?: Array<string | null> | null;
  _version?: number | null;
};

export type DeleteItemMROInput = {
  id: string;
  _version?: number | null;
};

export type CreateItemInput = {
  id?: string | null;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  condition?: string | null;
  control?: string | null;
  price?: number | null;
  demilitarizationCode?: string | null;
  scheduleB?: string | null;
  eccn?: string | null;
  isExportControlled?: boolean | null;
  usml?: boolean | null;
  companyID: string;
  countryID?: string | null;
  imageUrls?: Array<string | null> | null;
  viewCount?: number | null;
  unitOfMeasure?: string | null;
  _version?: number | null;
};

export type ModelItemConditionInput = {
  nsn?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  altPartNumber?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  condition?: ModelStringInput | null;
  control?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  demilitarizationCode?: ModelStringInput | null;
  scheduleB?: ModelStringInput | null;
  eccn?: ModelStringInput | null;
  isExportControlled?: ModelBooleanInput | null;
  usml?: ModelBooleanInput | null;
  companyID?: ModelIDInput | null;
  countryID?: ModelIDInput | null;
  imageUrls?: ModelStringInput | null;
  viewCount?: ModelIntInput | null;
  unitOfMeasure?: ModelStringInput | null;
  and?: Array<ModelItemConditionInput | null> | null;
  or?: Array<ModelItemConditionInput | null> | null;
  not?: ModelItemConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateItemInput = {
  id: string;
  nsn?: string | null;
  partNumber?: string | null;
  altPartNumber?: string | null;
  description?: string | null;
  quantity?: number | null;
  condition?: string | null;
  control?: string | null;
  price?: number | null;
  demilitarizationCode?: string | null;
  scheduleB?: string | null;
  eccn?: string | null;
  isExportControlled?: boolean | null;
  usml?: boolean | null;
  companyID?: string | null;
  countryID?: string | null;
  imageUrls?: Array<string | null> | null;
  viewCount?: number | null;
  unitOfMeasure?: string | null;
  _version?: number | null;
};

export type DeleteItemInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompanyItemsImportInput = {
  id?: string | null;
  companyID: string;
  importName?: string | null;
  importStatus?: string | null;
  importProgress?: number | null;
  importFileKey?: string | null;
  _version?: number | null;
};

export type ModelCompanyItemsImportConditionInput = {
  companyID?: ModelIDInput | null;
  importName?: ModelStringInput | null;
  importStatus?: ModelStringInput | null;
  importProgress?: ModelFloatInput | null;
  importFileKey?: ModelStringInput | null;
  and?: Array<ModelCompanyItemsImportConditionInput | null> | null;
  or?: Array<ModelCompanyItemsImportConditionInput | null> | null;
  not?: ModelCompanyItemsImportConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type CompanyItemsImport = {
  __typename: "CompanyItemsImport";
  id: string;
  companyID: string;
  importName?: string | null;
  importStatus?: string | null;
  importProgress?: number | null;
  importFileKey?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCompanyItemsImportInput = {
  id: string;
  companyID?: string | null;
  importName?: string | null;
  importStatus?: string | null;
  importProgress?: number | null;
  importFileKey?: string | null;
  _version?: number | null;
};

export type DeleteCompanyItemsImportInput = {
  id: string;
  _version?: number | null;
};

export type CreateCustomerRfqEmailInput = {
  id?: string | null;
  email: string;
  dateSent: string;
  htmlBody: string;
  _version?: number | null;
};

export type ModelCustomerRfqEmailConditionInput = {
  email?: ModelStringInput | null;
  dateSent?: ModelStringInput | null;
  htmlBody?: ModelStringInput | null;
  and?: Array<ModelCustomerRfqEmailConditionInput | null> | null;
  or?: Array<ModelCustomerRfqEmailConditionInput | null> | null;
  not?: ModelCustomerRfqEmailConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type CustomerRfqEmail = {
  __typename: "CustomerRfqEmail";
  id: string;
  email: string;
  dateSent: string;
  htmlBody: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCustomerRfqEmailInput = {
  id: string;
  email?: string | null;
  dateSent?: string | null;
  htmlBody?: string | null;
  _version?: number | null;
};

export type DeleteCustomerRfqEmailInput = {
  id: string;
  _version?: number | null;
};

export type CreateNSNDetailInput = {
  nsn: string;
  niin?: string | null;
  itemName?: string | null;
  inc?: string | null;
  fsc?: string | null;
  assignmentDate?: string | null;
  crit?: string | null;
  iig?: string | null;
  isc?: string | null;
  dateStandardized?: string | null;
  hmic?: string | null;
  dodic?: string | null;
  nsc?: string | null;
  cancellationDate?: string | null;
  pmic?: string | null;
  fiig?: string | null;
  esd?: string | null;
  scheduleB?: string | null;
  demil?: string | null;
  demilint?: string | null;
  tiic?: string | null;
  originator?: string | null;
  adpec?: string | null;
  rpdmrc?: string | null;
  PartInformation?: Array<PartInformationInput | null> | null;
  AdditionalPartInformation?: Array<AdditionalPartInformationInput | null> | null;
  ManagementInformation?: Array<ManagementInformationInput | null> | null;
  PhraseInformation?: Array<PhraseInformationInput | null> | null;
  TechnicalCharacteristicsInformation?: Array<TechnicalCharacteristicsInformationInput | null> | null;
  MOERulesInformation?: Array<MOERulesInformationInput | null> | null;
  ReplacementAndObsoleteInformation?: ReplacementAndObsoleteInformationInput | null;
  FreightInformation?: FreightInformationInput | null;
  PackagingInformation?: PackagingInformationInput | null;
  _version?: number | null;
};

export type PartInformationInput = {
  partNumber?: string | null;
  cage?: string | null;
  company?: string | null;
  status?: string | null;
  rncc?: string | null;
  rnvc?: string | null;
  dac?: string | null;
  rnaac?: string | null;
  rnfc?: string | null;
  rnsc?: string | null;
  rnjc?: string | null;
  sadc?: string | null;
  hcc?: string | null;
  msds?: string | null;
};

export type AdditionalPartInformationInput = {
  partNumber?: string | null;
  cage?: string | null;
  company?: string | null;
  source?: string | null;
  rncc?: string | null;
  rnvc?: string | null;
  dac?: string | null;
  rnaac?: string | null;
  rnfc?: string | null;
  rnsc?: string | null;
  rnjc?: string | null;
  sadc?: string | null;
  hcc?: string | null;
  msds?: string | null;
};

export type ManagementInformationInput = {
  moec?: string | null;
  sos?: string | null;
  aac?: string | null;
  rc?: string | null;
  slc?: string | null;
  ciic?: string | null;
  upq?: string | null;
  usc?: string | null;
  unitPrice?: string | null;
  ui?: string | null;
  uicf?: string | null;
  mcd?: string | null;
  actionDate?: string | null;
  ch?: string | null;
};

export type PhraseInformationInput = {
  moec?: string | null;
  pc?: string | null;
  phrase?: string | null;
  qpa?: string | null;
  uom?: string | null;
  oou?: string | null;
  jtc?: string | null;
};

export type TechnicalCharacteristicsInformationInput = {
  mrc?: string | null;
  requirementStatement?: string | null;
  replyStatement?: string | null;
};

export type MOERulesInformationInput = {
  moeRule?: string | null;
  formerMOER?: string | null;
  effective?: string | null;
  amc?: string | null;
  amsc?: string | null;
  imc?: string | null;
  imca?: string | null;
  collaborators?: string | null;
  receivers?: string | null;
};

export type ReplacementAndObsoleteInformationInput = {
  replacedReplacementNIINInformation?: Array<ReplacedReplacementNIINInformationInput | null> | null;
  obsoleteNIINInformation?: Array<ObsoleteNIINInformationInput | null> | null;
};

export type ReplacedReplacementNIINInformationInput = {
  fsc?: string | null;
  niin?: string | null;
  isc?: string | null;
  originator?: string | null;
  nsc?: string | null;
  stdDate?: string | null;
  status?: string | null;
};

export type ObsoleteNIINInformationInput = {
  fsc?: string | null;
  niin?: string | null;
  demil?: string | null;
  nsc?: string | null;
  cancelled?: string | null;
};

export type FreightInformationInput = {
  description?: string | null;
  originatingActivity?: string | null;
  hazardousMaterial?: string | null;
  nationalMotorFreightClassificationNumber?: string | null;
  lessThanOneTruckload?: string | null;
  nmfcSubItem?: string | null;
  uniformFreightClassificationNumber?: string | null;
  railVarianceCode?: string | null;
  lessThanOneCarload?: string | null;
  waterCommodityCode?: string | null;
  typeOfCargoCode?: string | null;
  specialHandlingCode?: string | null;
  airCommoditySpecialHandlingCode?: string | null;
  airDimensionCode?: string | null;
  integrityCode?: string | null;
};

export type PackagingInformationInput = {
  source?: string | null;
  status?: string | null;
  priSecICC?: string | null;
  containerNSN?: string | null;
  categoryCode?: string | null;
  lvlAPkgReq?: string | null;
  unitPackSize?: string | null;
  presMaterial?: string | null;
  lvlBPkgReq?: string | null;
  unitPackWeight?: string | null;
  presMethod?: string | null;
  lvlCPkgReq?: string | null;
  unitPackCube?: string | null;
  wrappingMat?: string | null;
  optProcInd?: string | null;
  unpkgItemDims?: string | null;
  specMarking?: string | null;
  suppInst?: string | null;
  containerFSC?: string | null;
  spiNumber?: string | null;
  spiRevision?: string | null;
  unpkgWeight?: string | null;
  spiDate?: string | null;
  pkgDesignActivity?: string | null;
  interContainerQty?: string | null;
  interContainerCode?: string | null;
  cleanDryProcedure?: string | null;
  unitContainer?: string | null;
  itemTypeStorage?: string | null;
  unitContainerLevel?: string | null;
  cushDunMaterial?: string | null;
  cushDunThickness?: string | null;
};

export type ModelNSNDetailConditionInput = {
  niin?: ModelStringInput | null;
  itemName?: ModelStringInput | null;
  inc?: ModelStringInput | null;
  fsc?: ModelStringInput | null;
  assignmentDate?: ModelStringInput | null;
  crit?: ModelStringInput | null;
  iig?: ModelStringInput | null;
  isc?: ModelStringInput | null;
  dateStandardized?: ModelStringInput | null;
  hmic?: ModelStringInput | null;
  dodic?: ModelStringInput | null;
  nsc?: ModelStringInput | null;
  cancellationDate?: ModelStringInput | null;
  pmic?: ModelStringInput | null;
  fiig?: ModelStringInput | null;
  esd?: ModelStringInput | null;
  scheduleB?: ModelStringInput | null;
  demil?: ModelStringInput | null;
  demilint?: ModelStringInput | null;
  tiic?: ModelStringInput | null;
  originator?: ModelStringInput | null;
  adpec?: ModelStringInput | null;
  rpdmrc?: ModelStringInput | null;
  and?: Array<ModelNSNDetailConditionInput | null> | null;
  or?: Array<ModelNSNDetailConditionInput | null> | null;
  not?: ModelNSNDetailConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type NSNDetail = {
  __typename: "NSNDetail";
  nsn: string;
  niin?: string | null;
  itemName?: string | null;
  inc?: string | null;
  fsc?: string | null;
  assignmentDate?: string | null;
  crit?: string | null;
  iig?: string | null;
  isc?: string | null;
  dateStandardized?: string | null;
  hmic?: string | null;
  dodic?: string | null;
  nsc?: string | null;
  cancellationDate?: string | null;
  pmic?: string | null;
  fiig?: string | null;
  esd?: string | null;
  scheduleB?: string | null;
  demil?: string | null;
  demilint?: string | null;
  tiic?: string | null;
  originator?: string | null;
  adpec?: string | null;
  rpdmrc?: string | null;
  PartInformation?: Array<PartInformation | null> | null;
  AdditionalPartInformation?: Array<AdditionalPartInformation | null> | null;
  ManagementInformation?: Array<ManagementInformation | null> | null;
  PhraseInformation?: Array<PhraseInformation | null> | null;
  TechnicalCharacteristicsInformation?: Array<TechnicalCharacteristicsInformation | null> | null;
  MOERulesInformation?: Array<MOERulesInformation | null> | null;
  ReplacementAndObsoleteInformation?: ReplacementAndObsoleteInformation | null;
  FreightInformation?: FreightInformation | null;
  PackagingInformation?: PackagingInformation | null;
  ContractHistories?: ModelContractHistoryConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type PartInformation = {
  __typename: "PartInformation";
  partNumber?: string | null;
  cage?: string | null;
  company?: string | null;
  status?: string | null;
  rncc?: string | null;
  rnvc?: string | null;
  dac?: string | null;
  rnaac?: string | null;
  rnfc?: string | null;
  rnsc?: string | null;
  rnjc?: string | null;
  sadc?: string | null;
  hcc?: string | null;
  msds?: string | null;
};

export type AdditionalPartInformation = {
  __typename: "AdditionalPartInformation";
  partNumber?: string | null;
  cage?: string | null;
  company?: string | null;
  source?: string | null;
  rncc?: string | null;
  rnvc?: string | null;
  dac?: string | null;
  rnaac?: string | null;
  rnfc?: string | null;
  rnsc?: string | null;
  rnjc?: string | null;
  sadc?: string | null;
  hcc?: string | null;
  msds?: string | null;
};

export type ManagementInformation = {
  __typename: "ManagementInformation";
  moec?: string | null;
  sos?: string | null;
  aac?: string | null;
  rc?: string | null;
  slc?: string | null;
  ciic?: string | null;
  upq?: string | null;
  usc?: string | null;
  unitPrice?: string | null;
  ui?: string | null;
  uicf?: string | null;
  mcd?: string | null;
  actionDate?: string | null;
  ch?: string | null;
};

export type PhraseInformation = {
  __typename: "PhraseInformation";
  moec?: string | null;
  pc?: string | null;
  phrase?: string | null;
  qpa?: string | null;
  uom?: string | null;
  oou?: string | null;
  jtc?: string | null;
};

export type TechnicalCharacteristicsInformation = {
  __typename: "TechnicalCharacteristicsInformation";
  mrc?: string | null;
  requirementStatement?: string | null;
  replyStatement?: string | null;
};

export type MOERulesInformation = {
  __typename: "MOERulesInformation";
  moeRule?: string | null;
  formerMOER?: string | null;
  effective?: string | null;
  amc?: string | null;
  amsc?: string | null;
  imc?: string | null;
  imca?: string | null;
  collaborators?: string | null;
  receivers?: string | null;
};

export type ReplacementAndObsoleteInformation = {
  __typename: "ReplacementAndObsoleteInformation";
  replacedReplacementNIINInformation?: Array<ReplacedReplacementNIINInformation | null> | null;
  obsoleteNIINInformation?: Array<ObsoleteNIINInformation | null> | null;
};

export type ReplacedReplacementNIINInformation = {
  __typename: "ReplacedReplacementNIINInformation";
  fsc?: string | null;
  niin?: string | null;
  isc?: string | null;
  originator?: string | null;
  nsc?: string | null;
  stdDate?: string | null;
  status?: string | null;
};

export type ObsoleteNIINInformation = {
  __typename: "ObsoleteNIINInformation";
  fsc?: string | null;
  niin?: string | null;
  demil?: string | null;
  nsc?: string | null;
  cancelled?: string | null;
};

export type FreightInformation = {
  __typename: "FreightInformation";
  description?: string | null;
  originatingActivity?: string | null;
  hazardousMaterial?: string | null;
  nationalMotorFreightClassificationNumber?: string | null;
  lessThanOneTruckload?: string | null;
  nmfcSubItem?: string | null;
  uniformFreightClassificationNumber?: string | null;
  railVarianceCode?: string | null;
  lessThanOneCarload?: string | null;
  waterCommodityCode?: string | null;
  typeOfCargoCode?: string | null;
  specialHandlingCode?: string | null;
  airCommoditySpecialHandlingCode?: string | null;
  airDimensionCode?: string | null;
  integrityCode?: string | null;
};

export type PackagingInformation = {
  __typename: "PackagingInformation";
  source?: string | null;
  status?: string | null;
  priSecICC?: string | null;
  containerNSN?: string | null;
  categoryCode?: string | null;
  lvlAPkgReq?: string | null;
  unitPackSize?: string | null;
  presMaterial?: string | null;
  lvlBPkgReq?: string | null;
  unitPackWeight?: string | null;
  presMethod?: string | null;
  lvlCPkgReq?: string | null;
  unitPackCube?: string | null;
  wrappingMat?: string | null;
  optProcInd?: string | null;
  unpkgItemDims?: string | null;
  specMarking?: string | null;
  suppInst?: string | null;
  containerFSC?: string | null;
  spiNumber?: string | null;
  spiRevision?: string | null;
  unpkgWeight?: string | null;
  spiDate?: string | null;
  pkgDesignActivity?: string | null;
  interContainerQty?: string | null;
  interContainerCode?: string | null;
  cleanDryProcedure?: string | null;
  unitContainer?: string | null;
  itemTypeStorage?: string | null;
  unitContainerLevel?: string | null;
  cushDunMaterial?: string | null;
  cushDunThickness?: string | null;
};

export type ModelContractHistoryConnection = {
  __typename: "ModelContractHistoryConnection";
  items: Array<ContractHistory | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ContractHistory = {
  __typename: "ContractHistory";
  contractNumber: string;
  nsn: string;
  NSNDetail?: NSNDetail | null;
  niin?: string | null;
  securityClassification?: string | null;
  fsc?: string | null;
  unit?: string | null;
  cage?: string | null;
  orderQuantity?: number | null;
  awardDate?: string | null;
  netPrice?: number | null;
  poNum?: string | null;
  poItemNo?: string | null;
  itemName?: string | null;
  partNumber?: string | null;
  standardUnitPrice?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateNSNDetailInput = {
  nsn: string;
  niin?: string | null;
  itemName?: string | null;
  inc?: string | null;
  fsc?: string | null;
  assignmentDate?: string | null;
  crit?: string | null;
  iig?: string | null;
  isc?: string | null;
  dateStandardized?: string | null;
  hmic?: string | null;
  dodic?: string | null;
  nsc?: string | null;
  cancellationDate?: string | null;
  pmic?: string | null;
  fiig?: string | null;
  esd?: string | null;
  scheduleB?: string | null;
  demil?: string | null;
  demilint?: string | null;
  tiic?: string | null;
  originator?: string | null;
  adpec?: string | null;
  rpdmrc?: string | null;
  PartInformation?: Array<PartInformationInput | null> | null;
  AdditionalPartInformation?: Array<AdditionalPartInformationInput | null> | null;
  ManagementInformation?: Array<ManagementInformationInput | null> | null;
  PhraseInformation?: Array<PhraseInformationInput | null> | null;
  TechnicalCharacteristicsInformation?: Array<TechnicalCharacteristicsInformationInput | null> | null;
  MOERulesInformation?: Array<MOERulesInformationInput | null> | null;
  ReplacementAndObsoleteInformation?: ReplacementAndObsoleteInformationInput | null;
  FreightInformation?: FreightInformationInput | null;
  PackagingInformation?: PackagingInformationInput | null;
  _version?: number | null;
};

export type DeleteNSNDetailInput = {
  nsn: string;
  _version?: number | null;
};

export type CreateContractHistoryInput = {
  contractNumber: string;
  nsn: string;
  niin?: string | null;
  securityClassification?: string | null;
  fsc?: string | null;
  unit?: string | null;
  cage?: string | null;
  orderQuantity?: number | null;
  awardDate?: string | null;
  netPrice?: number | null;
  poNum?: string | null;
  poItemNo?: string | null;
  itemName?: string | null;
  partNumber?: string | null;
  standardUnitPrice?: number | null;
  _version?: number | null;
};

export type ModelContractHistoryConditionInput = {
  nsn?: ModelIDInput | null;
  niin?: ModelStringInput | null;
  securityClassification?: ModelStringInput | null;
  fsc?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  cage?: ModelStringInput | null;
  orderQuantity?: ModelFloatInput | null;
  awardDate?: ModelStringInput | null;
  netPrice?: ModelFloatInput | null;
  poNum?: ModelStringInput | null;
  poItemNo?: ModelStringInput | null;
  itemName?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  standardUnitPrice?: ModelFloatInput | null;
  and?: Array<ModelContractHistoryConditionInput | null> | null;
  or?: Array<ModelContractHistoryConditionInput | null> | null;
  not?: ModelContractHistoryConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateContractHistoryInput = {
  contractNumber: string;
  nsn?: string | null;
  niin?: string | null;
  securityClassification?: string | null;
  fsc?: string | null;
  unit?: string | null;
  cage?: string | null;
  orderQuantity?: number | null;
  awardDate?: string | null;
  netPrice?: number | null;
  poNum?: string | null;
  poItemNo?: string | null;
  itemName?: string | null;
  partNumber?: string | null;
  standardUnitPrice?: number | null;
  _version?: number | null;
};

export type DeleteContractHistoryInput = {
  contractNumber: string;
  _version?: number | null;
};

export type CreateRfqItemsInput = {
  id?: string | null;
  rfqId: string;
  itemId: string;
  _version?: number | null;
};

export type ModelRfqItemsConditionInput = {
  rfqId?: ModelIDInput | null;
  itemId?: ModelIDInput | null;
  and?: Array<ModelRfqItemsConditionInput | null> | null;
  or?: Array<ModelRfqItemsConditionInput | null> | null;
  not?: ModelRfqItemsConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateRfqItemsInput = {
  id: string;
  rfqId?: string | null;
  itemId?: string | null;
  _version?: number | null;
};

export type DeleteRfqItemsInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompanyShippingAddressInput = {
  id?: string | null;
  shippingAddressId: string;
  companyId: string;
  _version?: number | null;
};

export type ModelCompanyShippingAddressConditionInput = {
  shippingAddressId?: ModelIDInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelCompanyShippingAddressConditionInput | null> | null;
  or?: Array<ModelCompanyShippingAddressConditionInput | null> | null;
  not?: ModelCompanyShippingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateCompanyShippingAddressInput = {
  id: string;
  shippingAddressId?: string | null;
  companyId?: string | null;
  _version?: number | null;
};

export type DeleteCompanyShippingAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompanyBillingAddressInput = {
  id?: string | null;
  billingAddressId: string;
  companyId: string;
  _version?: number | null;
};

export type ModelCompanyBillingAddressConditionInput = {
  billingAddressId?: ModelIDInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelCompanyBillingAddressConditionInput | null> | null;
  or?: Array<ModelCompanyBillingAddressConditionInput | null> | null;
  not?: ModelCompanyBillingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateCompanyBillingAddressInput = {
  id: string;
  billingAddressId?: string | null;
  companyId?: string | null;
  _version?: number | null;
};

export type DeleteCompanyBillingAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserDetailsInput = {
  userID: string;
  firstName?: string | null;
  lastName?: string | null;
  roles?: Array<string | null> | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  companyID?: string | null;
  isCompanyOwner?: boolean | null;
  _version?: number | null;
};

export type ModelUserDetailsConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  roles?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  isCompanyOwner?: ModelBooleanInput | null;
  and?: Array<ModelUserDetailsConditionInput | null> | null;
  or?: Array<ModelUserDetailsConditionInput | null> | null;
  not?: ModelUserDetailsConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateUserDetailsInput = {
  userID: string;
  firstName?: string | null;
  lastName?: string | null;
  roles?: Array<string | null> | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  companyID?: string | null;
  isCompanyOwner?: boolean | null;
  _version?: number | null;
};

export type DeleteUserDetailsInput = {
  userID: string;
  _version?: number | null;
};

export type CreateItemViewHistoryInput = {
  id?: string | null;
  itemViewDate: string;
  userID: string;
  itemID: string;
  _version?: number | null;
};

export type ModelItemViewHistoryConditionInput = {
  itemViewDate?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  itemID?: ModelIDInput | null;
  and?: Array<ModelItemViewHistoryConditionInput | null> | null;
  or?: Array<ModelItemViewHistoryConditionInput | null> | null;
  not?: ModelItemViewHistoryConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateItemViewHistoryInput = {
  id: string;
  itemViewDate?: string | null;
  userID?: string | null;
  itemID?: string | null;
  _version?: number | null;
};

export type DeleteItemViewHistoryInput = {
  id: string;
  _version?: number | null;
};

export type CreateMessageBoardInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  userID: string;
  companyID: string;
  _version?: number | null;
  companyMessageBoardsId?: string | null;
};

export type ModelMessageBoardConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelMessageBoardConditionInput | null> | null;
  or?: Array<ModelMessageBoardConditionInput | null> | null;
  not?: ModelMessageBoardConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  companyMessageBoardsId?: ModelIDInput | null;
};

export type UpdateMessageBoardInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  userID?: string | null;
  companyID?: string | null;
  _version?: number | null;
  companyMessageBoardsId?: string | null;
};

export type DeleteMessageBoardInput = {
  id: string;
  _version?: number | null;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  timestamp: string;
  userID: string;
  companyID: string;
  messageBoardID: string;
  _version?: number | null;
  companyMessagesId?: string | null;
  messageBoardMessagesId?: string | null;
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  messageBoardID?: ModelIDInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  companyMessagesId?: ModelIDInput | null;
  messageBoardMessagesId?: ModelIDInput | null;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  timestamp?: string | null;
  userID?: string | null;
  companyID?: string | null;
  messageBoardID?: string | null;
  _version?: number | null;
  companyMessagesId?: string | null;
  messageBoardMessagesId?: string | null;
};

export type DeleteMessageInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserDetailsBillingAddressInput = {
  id?: string | null;
  userDetailsUserID: string;
  billingAddressId: string;
  _version?: number | null;
};

export type ModelUserDetailsBillingAddressConditionInput = {
  userDetailsUserID?: ModelIDInput | null;
  billingAddressId?: ModelIDInput | null;
  and?: Array<ModelUserDetailsBillingAddressConditionInput | null> | null;
  or?: Array<ModelUserDetailsBillingAddressConditionInput | null> | null;
  not?: ModelUserDetailsBillingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateUserDetailsBillingAddressInput = {
  id: string;
  userDetailsUserID?: string | null;
  billingAddressId?: string | null;
  _version?: number | null;
};

export type DeleteUserDetailsBillingAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserDetailsShippingAddressInput = {
  id?: string | null;
  userDetailsUserID: string;
  shippingAddressId: string;
  _version?: number | null;
};

export type ModelUserDetailsShippingAddressConditionInput = {
  userDetailsUserID?: ModelIDInput | null;
  shippingAddressId?: ModelIDInput | null;
  and?: Array<ModelUserDetailsShippingAddressConditionInput | null> | null;
  or?: Array<ModelUserDetailsShippingAddressConditionInput | null> | null;
  not?: ModelUserDetailsShippingAddressConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type UpdateUserDetailsShippingAddressInput = {
  id: string;
  userDetailsUserID?: string | null;
  shippingAddressId?: string | null;
  _version?: number | null;
};

export type DeleteUserDetailsShippingAddressInput = {
  id: string;
  _version?: number | null;
};

export type SearchableRfqFilterInput = {
  id?: SearchableIDFilterInput | null;
  rfqNumber?: SearchableStringFilterInput | null;
  dateSent?: SearchableStringFilterInput | null;
  custRefNum?: SearchableStringFilterInput | null;
  companyName?: SearchableStringFilterInput | null;
  contact?: SearchableStringFilterInput | null;
  phone?: SearchableStringFilterInput | null;
  email?: SearchableStringFilterInput | null;
  shippingTerms?: SearchableStringFilterInput | null;
  shippingMethod?: SearchableStringFilterInput | null;
  leadTime?: SearchableIntFilterInput | null;
  paymentTerms?: SearchableStringFilterInput | null;
  dueDate?: SearchableStringFilterInput | null;
  quantityRequested?: SearchableIntFilterInput | null;
  quantityQuoted?: SearchableIntFilterInput | null;
  uom?: SearchableStringFilterInput | null;
  urgency?: SearchableStringFilterInput | null;
  discount?: SearchableFloatFilterInput | null;
  lineTotal?: SearchableFloatFilterInput | null;
  subtotal?: SearchableFloatFilterInput | null;
  salesTax?: SearchableFloatFilterInput | null;
  total?: SearchableFloatFilterInput | null;
  internalComments?: SearchableStringFilterInput | null;
  emailComments?: SearchableStringFilterInput | null;
  addressLine1?: SearchableStringFilterInput | null;
  addressLine2?: SearchableStringFilterInput | null;
  city?: SearchableStringFilterInput | null;
  state?: SearchableStringFilterInput | null;
  zip?: SearchableStringFilterInput | null;
  country?: SearchableStringFilterInput | null;
  receivingCompanyID?: SearchableIDFilterInput | null;
  sendingCompanyID?: SearchableIDFilterInput | null;
  status?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  companySentRfqsId?: SearchableIDFilterInput | null;
  companyReceivedRfqsId?: SearchableIDFilterInput | null;
  and?: Array<SearchableRfqFilterInput | null> | null;
  or?: Array<SearchableRfqFilterInput | null> | null;
  not?: SearchableRfqFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableRfqSortInput = {
  field?: SearchableRfqSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableRfqSortableFields {
  id = "id",
  rfqNumber = "rfqNumber",
  dateSent = "dateSent",
  custRefNum = "custRefNum",
  companyName = "companyName",
  contact = "contact",
  phone = "phone",
  email = "email",
  shippingTerms = "shippingTerms",
  shippingMethod = "shippingMethod",
  leadTime = "leadTime",
  paymentTerms = "paymentTerms",
  dueDate = "dueDate",
  quantityRequested = "quantityRequested",
  quantityQuoted = "quantityQuoted",
  uom = "uom",
  urgency = "urgency",
  discount = "discount",
  lineTotal = "lineTotal",
  subtotal = "subtotal",
  salesTax = "salesTax",
  total = "total",
  internalComments = "internalComments",
  emailComments = "emailComments",
  addressLine1 = "addressLine1",
  addressLine2 = "addressLine2",
  city = "city",
  state = "state",
  zip = "zip",
  country = "country",
  receivingCompanyID = "receivingCompanyID",
  sendingCompanyID = "sendingCompanyID",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companySentRfqsId = "companySentRfqsId",
  companyReceivedRfqsId = "companyReceivedRfqsId",
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}

export type SearchableRfqAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableRfqAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}

export enum SearchableRfqAggregateField {
  id = "id",
  rfqNumber = "rfqNumber",
  dateSent = "dateSent",
  custRefNum = "custRefNum",
  companyName = "companyName",
  contact = "contact",
  phone = "phone",
  email = "email",
  shippingTerms = "shippingTerms",
  shippingMethod = "shippingMethod",
  leadTime = "leadTime",
  paymentTerms = "paymentTerms",
  dueDate = "dueDate",
  quantityRequested = "quantityRequested",
  quantityQuoted = "quantityQuoted",
  uom = "uom",
  urgency = "urgency",
  discount = "discount",
  lineTotal = "lineTotal",
  subtotal = "subtotal",
  salesTax = "salesTax",
  total = "total",
  internalComments = "internalComments",
  emailComments = "emailComments",
  addressLine1 = "addressLine1",
  addressLine2 = "addressLine2",
  city = "city",
  state = "state",
  zip = "zip",
  country = "country",
  receivingCompanyID = "receivingCompanyID",
  sendingCompanyID = "sendingCompanyID",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companySentRfqsId = "companySentRfqsId",
  companyReceivedRfqsId = "companyReceivedRfqsId",
}

export type SearchableRfqConnection = {
  __typename: "SearchableRfqConnection";
  items: Array<Rfq | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type SearchableCompanyFilterInput = {
  id?: SearchableIDFilterInput | null;
  companyName?: SearchableStringFilterInput | null;
  phone?: SearchableStringFilterInput | null;
  contactEmail?: SearchableStringFilterInput | null;
  countryID?: SearchableIDFilterInput | null;
  profilePictureUrl?: SearchableStringFilterInput | null;
  fax?: SearchableStringFilterInput | null;
  cageCode?: SearchableStringFilterInput | null;
  qualityCertifications?: SearchableStringFilterInput | null;
  companyDescription?: SearchableStringFilterInput | null;
  addressId?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  companyCompanyOwnerUserID?: SearchableIDFilterInput | null;
  and?: Array<SearchableCompanyFilterInput | null> | null;
  or?: Array<SearchableCompanyFilterInput | null> | null;
  not?: SearchableCompanyFilterInput | null;
};

export type SearchableCompanySortInput = {
  field?: SearchableCompanySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCompanySortableFields {
  id = "id",
  companyName = "companyName",
  phone = "phone",
  contactEmail = "contactEmail",
  countryID = "countryID",
  profilePictureUrl = "profilePictureUrl",
  fax = "fax",
  cageCode = "cageCode",
  qualityCertifications = "qualityCertifications",
  companyDescription = "companyDescription",
  addressId = "addressId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyCompanyOwnerUserID = "companyCompanyOwnerUserID",
}

export type SearchableCompanyAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCompanyAggregateField;
};

export enum SearchableCompanyAggregateField {
  id = "id",
  companyName = "companyName",
  phone = "phone",
  contactEmail = "contactEmail",
  countryID = "countryID",
  profilePictureUrl = "profilePictureUrl",
  fax = "fax",
  cageCode = "cageCode",
  qualityCertifications = "qualityCertifications",
  companyDescription = "companyDescription",
  addressId = "addressId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyCompanyOwnerUserID = "companyCompanyOwnerUserID",
}

export type SearchableCompanyConnection = {
  __typename: "SearchableCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableItemFilterInput = {
  id?: SearchableIDFilterInput | null;
  nsn?: SearchableStringFilterInput | null;
  partNumber?: SearchableStringFilterInput | null;
  altPartNumber?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  quantity?: SearchableIntFilterInput | null;
  condition?: SearchableStringFilterInput | null;
  control?: SearchableStringFilterInput | null;
  price?: SearchableFloatFilterInput | null;
  demilitarizationCode?: SearchableStringFilterInput | null;
  scheduleB?: SearchableStringFilterInput | null;
  eccn?: SearchableStringFilterInput | null;
  isExportControlled?: SearchableBooleanFilterInput | null;
  usml?: SearchableBooleanFilterInput | null;
  companyID?: SearchableIDFilterInput | null;
  countryID?: SearchableIDFilterInput | null;
  imageUrls?: SearchableStringFilterInput | null;
  viewCount?: SearchableIntFilterInput | null;
  unitOfMeasure?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  and?: Array<SearchableItemFilterInput | null> | null;
  or?: Array<SearchableItemFilterInput | null> | null;
  not?: SearchableItemFilterInput | null;
};

export type SearchableItemSortInput = {
  field?: SearchableItemSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableItemSortableFields {
  id = "id",
  nsn = "nsn",
  partNumber = "partNumber",
  altPartNumber = "altPartNumber",
  description = "description",
  quantity = "quantity",
  condition = "condition",
  control = "control",
  price = "price",
  demilitarizationCode = "demilitarizationCode",
  scheduleB = "scheduleB",
  eccn = "eccn",
  isExportControlled = "isExportControlled",
  usml = "usml",
  companyID = "companyID",
  countryID = "countryID",
  imageUrls = "imageUrls",
  viewCount = "viewCount",
  unitOfMeasure = "unitOfMeasure",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableItemAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableItemAggregateField;
};

export enum SearchableItemAggregateField {
  id = "id",
  nsn = "nsn",
  partNumber = "partNumber",
  altPartNumber = "altPartNumber",
  description = "description",
  quantity = "quantity",
  condition = "condition",
  control = "control",
  price = "price",
  demilitarizationCode = "demilitarizationCode",
  scheduleB = "scheduleB",
  eccn = "eccn",
  isExportControlled = "isExportControlled",
  usml = "usml",
  companyID = "companyID",
  countryID = "countryID",
  imageUrls = "imageUrls",
  viewCount = "viewCount",
  unitOfMeasure = "unitOfMeasure",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableItemConnection = {
  __typename: "SearchableItemConnection";
  items: Array<Item | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableNSNDetailFilterInput = {
  nsn?: SearchableIDFilterInput | null;
  niin?: SearchableStringFilterInput | null;
  itemName?: SearchableStringFilterInput | null;
  inc?: SearchableStringFilterInput | null;
  fsc?: SearchableStringFilterInput | null;
  assignmentDate?: SearchableStringFilterInput | null;
  crit?: SearchableStringFilterInput | null;
  iig?: SearchableStringFilterInput | null;
  isc?: SearchableStringFilterInput | null;
  dateStandardized?: SearchableStringFilterInput | null;
  hmic?: SearchableStringFilterInput | null;
  dodic?: SearchableStringFilterInput | null;
  nsc?: SearchableStringFilterInput | null;
  cancellationDate?: SearchableStringFilterInput | null;
  pmic?: SearchableStringFilterInput | null;
  fiig?: SearchableStringFilterInput | null;
  esd?: SearchableStringFilterInput | null;
  scheduleB?: SearchableStringFilterInput | null;
  demil?: SearchableStringFilterInput | null;
  demilint?: SearchableStringFilterInput | null;
  tiic?: SearchableStringFilterInput | null;
  originator?: SearchableStringFilterInput | null;
  adpec?: SearchableStringFilterInput | null;
  rpdmrc?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  and?: Array<SearchableNSNDetailFilterInput | null> | null;
  or?: Array<SearchableNSNDetailFilterInput | null> | null;
  not?: SearchableNSNDetailFilterInput | null;
};

export type SearchableNSNDetailSortInput = {
  field?: SearchableNSNDetailSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableNSNDetailSortableFields {
  nsn = "nsn",
  niin = "niin",
  itemName = "itemName",
  inc = "inc",
  fsc = "fsc",
  assignmentDate = "assignmentDate",
  crit = "crit",
  iig = "iig",
  isc = "isc",
  dateStandardized = "dateStandardized",
  hmic = "hmic",
  dodic = "dodic",
  nsc = "nsc",
  cancellationDate = "cancellationDate",
  pmic = "pmic",
  fiig = "fiig",
  esd = "esd",
  scheduleB = "scheduleB",
  demil = "demil",
  demilint = "demilint",
  tiic = "tiic",
  originator = "originator",
  adpec = "adpec",
  rpdmrc = "rpdmrc",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableNSNDetailAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableNSNDetailAggregateField;
};

export enum SearchableNSNDetailAggregateField {
  nsn = "nsn",
  niin = "niin",
  itemName = "itemName",
  inc = "inc",
  fsc = "fsc",
  assignmentDate = "assignmentDate",
  crit = "crit",
  iig = "iig",
  isc = "isc",
  dateStandardized = "dateStandardized",
  hmic = "hmic",
  dodic = "dodic",
  nsc = "nsc",
  cancellationDate = "cancellationDate",
  pmic = "pmic",
  fiig = "fiig",
  esd = "esd",
  scheduleB = "scheduleB",
  demil = "demil",
  demilint = "demilint",
  tiic = "tiic",
  originator = "originator",
  adpec = "adpec",
  rpdmrc = "rpdmrc",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableNSNDetailConnection = {
  __typename: "SearchableNSNDetailConnection";
  items: Array<NSNDetail | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableContractHistoryFilterInput = {
  contractNumber?: SearchableIDFilterInput | null;
  nsn?: SearchableIDFilterInput | null;
  niin?: SearchableStringFilterInput | null;
  securityClassification?: SearchableStringFilterInput | null;
  fsc?: SearchableStringFilterInput | null;
  unit?: SearchableStringFilterInput | null;
  cage?: SearchableStringFilterInput | null;
  orderQuantity?: SearchableFloatFilterInput | null;
  awardDate?: SearchableStringFilterInput | null;
  netPrice?: SearchableFloatFilterInput | null;
  poNum?: SearchableStringFilterInput | null;
  poItemNo?: SearchableStringFilterInput | null;
  itemName?: SearchableStringFilterInput | null;
  partNumber?: SearchableStringFilterInput | null;
  standardUnitPrice?: SearchableFloatFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  and?: Array<SearchableContractHistoryFilterInput | null> | null;
  or?: Array<SearchableContractHistoryFilterInput | null> | null;
  not?: SearchableContractHistoryFilterInput | null;
};

export type SearchableContractHistorySortInput = {
  field?: SearchableContractHistorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableContractHistorySortableFields {
  contractNumber = "contractNumber",
  nsn = "nsn",
  niin = "niin",
  securityClassification = "securityClassification",
  fsc = "fsc",
  unit = "unit",
  cage = "cage",
  orderQuantity = "orderQuantity",
  awardDate = "awardDate",
  netPrice = "netPrice",
  poNum = "poNum",
  poItemNo = "poItemNo",
  itemName = "itemName",
  partNumber = "partNumber",
  standardUnitPrice = "standardUnitPrice",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableContractHistoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableContractHistoryAggregateField;
};

export enum SearchableContractHistoryAggregateField {
  contractNumber = "contractNumber",
  nsn = "nsn",
  niin = "niin",
  securityClassification = "securityClassification",
  fsc = "fsc",
  unit = "unit",
  cage = "cage",
  orderQuantity = "orderQuantity",
  awardDate = "awardDate",
  netPrice = "netPrice",
  poNum = "poNum",
  poItemNo = "poItemNo",
  itemName = "itemName",
  partNumber = "partNumber",
  standardUnitPrice = "standardUnitPrice",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}

export type SearchableContractHistoryConnection = {
  __typename: "SearchableContractHistoryConnection";
  items: Array<ContractHistory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelRfqFilterInput = {
  id?: ModelIDInput | null;
  rfqNumber?: ModelStringInput | null;
  dateSent?: ModelStringInput | null;
  custRefNum?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  contact?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  shippingTerms?: ModelStringInput | null;
  shippingMethod?: ModelStringInput | null;
  leadTime?: ModelIntInput | null;
  paymentTerms?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  quantityRequested?: ModelIntInput | null;
  quantityQuoted?: ModelIntInput | null;
  uom?: ModelStringInput | null;
  urgency?: ModelStringInput | null;
  discount?: ModelFloatInput | null;
  lineTotal?: ModelFloatInput | null;
  subtotal?: ModelFloatInput | null;
  salesTax?: ModelFloatInput | null;
  total?: ModelFloatInput | null;
  internalComments?: ModelStringInput | null;
  emailComments?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  country?: ModelStringInput | null;
  receivingCompanyID?: ModelIDInput | null;
  sendingCompanyID?: ModelIDInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelRfqFilterInput | null> | null;
  or?: Array<ModelRfqFilterInput | null> | null;
  not?: ModelRfqFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  companySentRfqsId?: ModelIDInput | null;
  companyReceivedRfqsId?: ModelIDInput | null;
};

export type ModelCountryFilterInput = {
  id?: ModelIDInput | null;
  countryName?: ModelStringInput | null;
  code?: ModelStringInput | null;
  and?: Array<ModelCountryFilterInput | null> | null;
  or?: Array<ModelCountryFilterInput | null> | null;
  not?: ModelCountryFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCountryConnection = {
  __typename: "ModelCountryConnection";
  items: Array<Country | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelShippingAddressFilterInput = {
  id?: ModelIDInput | null;
  unitNumber?: ModelStringInput | null;
  streetNumber?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  regi?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  isDefault?: ModelBooleanInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelShippingAddressFilterInput | null> | null;
  or?: Array<ModelShippingAddressFilterInput | null> | null;
  not?: ModelShippingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelBillingAddressFilterInput = {
  id?: ModelIDInput | null;
  unitNumber?: ModelStringInput | null;
  streetNumber?: ModelStringInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  region?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  isDefault?: ModelBooleanInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelBillingAddressFilterInput | null> | null;
  or?: Array<ModelBillingAddressFilterInput | null> | null;
  not?: ModelBillingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  profilePictureUrl?: ModelStringInput | null;
  fax?: ModelStringInput | null;
  cageCode?: ModelStringInput | null;
  qualityCertifications?: ModelStringInput | null;
  companyDescription?: ModelStringInput | null;
  addressId?: ModelIDInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  companyCompanyOwnerUserID?: ModelIDInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  type?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelNotificationFilterInput | null> | null;
  or?: Array<ModelNotificationFilterInput | null> | null;
  not?: ModelNotificationFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  companyNotificationsId?: ModelIDInput | null;
};

export type ModelItemMROFilterInput = {
  id?: ModelIDInput | null;
  nsn?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  altPartNumber?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  certification?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  imageUrls?: ModelStringInput | null;
  and?: Array<ModelItemMROFilterInput | null> | null;
  or?: Array<ModelItemMROFilterInput | null> | null;
  not?: ModelItemMROFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null;
  nsn?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  altPartNumber?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  condition?: ModelStringInput | null;
  control?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  demilitarizationCode?: ModelStringInput | null;
  scheduleB?: ModelStringInput | null;
  eccn?: ModelStringInput | null;
  isExportControlled?: ModelBooleanInput | null;
  usml?: ModelBooleanInput | null;
  companyID?: ModelIDInput | null;
  countryID?: ModelIDInput | null;
  imageUrls?: ModelStringInput | null;
  viewCount?: ModelIntInput | null;
  unitOfMeasure?: ModelStringInput | null;
  and?: Array<ModelItemFilterInput | null> | null;
  or?: Array<ModelItemFilterInput | null> | null;
  not?: ModelItemFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCompanyItemsImportFilterInput = {
  id?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  importName?: ModelStringInput | null;
  importStatus?: ModelStringInput | null;
  importProgress?: ModelFloatInput | null;
  importFileKey?: ModelStringInput | null;
  and?: Array<ModelCompanyItemsImportFilterInput | null> | null;
  or?: Array<ModelCompanyItemsImportFilterInput | null> | null;
  not?: ModelCompanyItemsImportFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelCompanyItemsImportConnection = {
  __typename: "ModelCompanyItemsImportConnection";
  items: Array<CompanyItemsImport | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCustomerRfqEmailFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  dateSent?: ModelStringInput | null;
  htmlBody?: ModelStringInput | null;
  and?: Array<ModelCustomerRfqEmailFilterInput | null> | null;
  or?: Array<ModelCustomerRfqEmailFilterInput | null> | null;
  not?: ModelCustomerRfqEmailFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCustomerRfqEmailConnection = {
  __typename: "ModelCustomerRfqEmailConnection";
  items: Array<CustomerRfqEmail | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNSNDetailFilterInput = {
  nsn?: ModelIDInput | null;
  niin?: ModelStringInput | null;
  itemName?: ModelStringInput | null;
  inc?: ModelStringInput | null;
  fsc?: ModelStringInput | null;
  assignmentDate?: ModelStringInput | null;
  crit?: ModelStringInput | null;
  iig?: ModelStringInput | null;
  isc?: ModelStringInput | null;
  dateStandardized?: ModelStringInput | null;
  hmic?: ModelStringInput | null;
  dodic?: ModelStringInput | null;
  nsc?: ModelStringInput | null;
  cancellationDate?: ModelStringInput | null;
  pmic?: ModelStringInput | null;
  fiig?: ModelStringInput | null;
  esd?: ModelStringInput | null;
  scheduleB?: ModelStringInput | null;
  demil?: ModelStringInput | null;
  demilint?: ModelStringInput | null;
  tiic?: ModelStringInput | null;
  originator?: ModelStringInput | null;
  adpec?: ModelStringInput | null;
  rpdmrc?: ModelStringInput | null;
  and?: Array<ModelNSNDetailFilterInput | null> | null;
  or?: Array<ModelNSNDetailFilterInput | null> | null;
  not?: ModelNSNDetailFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelNSNDetailConnection = {
  __typename: "ModelNSNDetailConnection";
  items: Array<NSNDetail | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelContractHistoryFilterInput = {
  contractNumber?: ModelIDInput | null;
  nsn?: ModelIDInput | null;
  niin?: ModelStringInput | null;
  securityClassification?: ModelStringInput | null;
  fsc?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  cage?: ModelStringInput | null;
  orderQuantity?: ModelFloatInput | null;
  awardDate?: ModelStringInput | null;
  netPrice?: ModelFloatInput | null;
  poNum?: ModelStringInput | null;
  poItemNo?: ModelStringInput | null;
  itemName?: ModelStringInput | null;
  partNumber?: ModelStringInput | null;
  standardUnitPrice?: ModelFloatInput | null;
  and?: Array<ModelContractHistoryFilterInput | null> | null;
  or?: Array<ModelContractHistoryFilterInput | null> | null;
  not?: ModelContractHistoryFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelRfqItemsFilterInput = {
  id?: ModelIDInput | null;
  rfqId?: ModelIDInput | null;
  itemId?: ModelIDInput | null;
  and?: Array<ModelRfqItemsFilterInput | null> | null;
  or?: Array<ModelRfqItemsFilterInput | null> | null;
  not?: ModelRfqItemsFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCompanyShippingAddressFilterInput = {
  id?: ModelIDInput | null;
  shippingAddressId?: ModelIDInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelCompanyShippingAddressFilterInput | null> | null;
  or?: Array<ModelCompanyShippingAddressFilterInput | null> | null;
  not?: ModelCompanyShippingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCompanyBillingAddressFilterInput = {
  id?: ModelIDInput | null;
  billingAddressId?: ModelIDInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelCompanyBillingAddressFilterInput | null> | null;
  or?: Array<ModelCompanyBillingAddressFilterInput | null> | null;
  not?: ModelCompanyBillingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelUserDetailsFilterInput = {
  userID?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  roles?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  isCompanyOwner?: ModelBooleanInput | null;
  and?: Array<ModelUserDetailsFilterInput | null> | null;
  or?: Array<ModelUserDetailsFilterInput | null> | null;
  not?: ModelUserDetailsFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelItemViewHistoryFilterInput = {
  id?: ModelIDInput | null;
  itemViewDate?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  itemID?: ModelIDInput | null;
  and?: Array<ModelItemViewHistoryFilterInput | null> | null;
  or?: Array<ModelItemViewHistoryFilterInput | null> | null;
  not?: ModelItemViewHistoryFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelMessageBoardFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelMessageBoardFilterInput | null> | null;
  or?: Array<ModelMessageBoardFilterInput | null> | null;
  not?: ModelMessageBoardFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  companyMessageBoardsId?: ModelIDInput | null;
};

export type SearchableMessageBoardFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  companyID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  companyMessageBoardsId?: SearchableIDFilterInput | null;
  and?: Array<SearchableMessageBoardFilterInput | null> | null;
  or?: Array<SearchableMessageBoardFilterInput | null> | null;
  not?: SearchableMessageBoardFilterInput | null;
};

export type SearchableMessageBoardSortInput = {
  field?: SearchableMessageBoardSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableMessageBoardSortableFields {
  id = "id",
  name = "name",
  description = "description",
  userID = "userID",
  companyID = "companyID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyMessageBoardsId = "companyMessageBoardsId",
}

export type SearchableMessageBoardAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableMessageBoardAggregateField;
};

export enum SearchableMessageBoardAggregateField {
  id = "id",
  name = "name",
  description = "description",
  userID = "userID",
  companyID = "companyID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyMessageBoardsId = "companyMessageBoardsId",
}

export type SearchableMessageBoardConnection = {
  __typename: "SearchableMessageBoardConnection";
  items: Array<MessageBoard | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  messageBoardID?: ModelIDInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  companyMessagesId?: ModelIDInput | null;
  messageBoardMessagesId?: ModelIDInput | null;
};

export type SearchableMessageFilterInput = {
  id?: SearchableIDFilterInput | null;
  content?: SearchableStringFilterInput | null;
  timestamp?: SearchableStringFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  companyID?: SearchableIDFilterInput | null;
  messageBoardID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  _version?: SearchableIntFilterInput | null;
  _deleted?: SearchableBooleanFilterInput | null;
  _lastChangedAt?: SearchableIntFilterInput | null;
  companyMessagesId?: SearchableIDFilterInput | null;
  messageBoardMessagesId?: SearchableIDFilterInput | null;
  and?: Array<SearchableMessageFilterInput | null> | null;
  or?: Array<SearchableMessageFilterInput | null> | null;
  not?: SearchableMessageFilterInput | null;
};

export type SearchableMessageSortInput = {
  field?: SearchableMessageSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableMessageSortableFields {
  id = "id",
  content = "content",
  timestamp = "timestamp",
  userID = "userID",
  companyID = "companyID",
  messageBoardID = "messageBoardID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyMessagesId = "companyMessagesId",
  messageBoardMessagesId = "messageBoardMessagesId",
}

export type SearchableMessageAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableMessageAggregateField;
};

export enum SearchableMessageAggregateField {
  id = "id",
  content = "content",
  timestamp = "timestamp",
  userID = "userID",
  companyID = "companyID",
  messageBoardID = "messageBoardID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
  companyMessagesId = "companyMessagesId",
  messageBoardMessagesId = "messageBoardMessagesId",
}

export type SearchableMessageConnection = {
  __typename: "SearchableMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelUserDetailsBillingAddressFilterInput = {
  id?: ModelIDInput | null;
  userDetailsUserID?: ModelIDInput | null;
  billingAddressId?: ModelIDInput | null;
  and?: Array<ModelUserDetailsBillingAddressFilterInput | null> | null;
  or?: Array<ModelUserDetailsBillingAddressFilterInput | null> | null;
  not?: ModelUserDetailsBillingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelUserDetailsShippingAddressFilterInput = {
  id?: ModelIDInput | null;
  userDetailsUserID?: ModelIDInput | null;
  shippingAddressId?: ModelIDInput | null;
  and?: Array<ModelUserDetailsShippingAddressFilterInput | null> | null;
  or?: Array<ModelUserDetailsShippingAddressFilterInput | null> | null;
  not?: ModelUserDetailsShippingAddressFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionRfqFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  rfqNumber?: ModelSubscriptionStringInput | null;
  dateSent?: ModelSubscriptionStringInput | null;
  custRefNum?: ModelSubscriptionStringInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  contact?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  shippingTerms?: ModelSubscriptionStringInput | null;
  shippingMethod?: ModelSubscriptionStringInput | null;
  leadTime?: ModelSubscriptionIntInput | null;
  paymentTerms?: ModelSubscriptionStringInput | null;
  dueDate?: ModelSubscriptionStringInput | null;
  quantityRequested?: ModelSubscriptionIntInput | null;
  quantityQuoted?: ModelSubscriptionIntInput | null;
  uom?: ModelSubscriptionStringInput | null;
  urgency?: ModelSubscriptionStringInput | null;
  discount?: ModelSubscriptionFloatInput | null;
  lineTotal?: ModelSubscriptionFloatInput | null;
  subtotal?: ModelSubscriptionFloatInput | null;
  salesTax?: ModelSubscriptionFloatInput | null;
  total?: ModelSubscriptionFloatInput | null;
  internalComments?: ModelSubscriptionStringInput | null;
  emailComments?: ModelSubscriptionStringInput | null;
  addressLine1?: ModelSubscriptionStringInput | null;
  addressLine2?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  zip?: ModelSubscriptionStringInput | null;
  country?: ModelSubscriptionStringInput | null;
  receivingCompanyID?: ModelSubscriptionIDInput | null;
  sendingCompanyID?: ModelSubscriptionIDInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRfqFilterInput | null> | null;
  or?: Array<ModelSubscriptionRfqFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionCountryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  countryName?: ModelSubscriptionStringInput | null;
  code?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCountryFilterInput | null> | null;
  or?: Array<ModelSubscriptionCountryFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionShippingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  unitNumber?: ModelSubscriptionStringInput | null;
  streetNumber?: ModelSubscriptionStringInput | null;
  addressLine1?: ModelSubscriptionStringInput | null;
  addressLine2?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  regi?: ModelSubscriptionStringInput | null;
  postalCode?: ModelSubscriptionStringInput | null;
  isDefault?: ModelSubscriptionBooleanInput | null;
  countryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionShippingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionShippingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionBillingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  unitNumber?: ModelSubscriptionStringInput | null;
  streetNumber?: ModelSubscriptionStringInput | null;
  addressLine1?: ModelSubscriptionStringInput | null;
  addressLine2?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  region?: ModelSubscriptionStringInput | null;
  postalCode?: ModelSubscriptionStringInput | null;
  isDefault?: ModelSubscriptionBooleanInput | null;
  countryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionBillingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionBillingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  contactEmail?: ModelSubscriptionStringInput | null;
  countryID?: ModelSubscriptionIDInput | null;
  profilePictureUrl?: ModelSubscriptionStringInput | null;
  fax?: ModelSubscriptionStringInput | null;
  cageCode?: ModelSubscriptionStringInput | null;
  qualityCertifications?: ModelSubscriptionStringInput | null;
  companyDescription?: ModelSubscriptionStringInput | null;
  addressId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  message?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionNotificationFilterInput | null> | null;
  or?: Array<ModelSubscriptionNotificationFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionItemMROFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nsn?: ModelSubscriptionStringInput | null;
  partNumber?: ModelSubscriptionStringInput | null;
  altPartNumber?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  quantity?: ModelSubscriptionIntInput | null;
  price?: ModelSubscriptionFloatInput | null;
  certification?: ModelSubscriptionStringInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  imageUrls?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionItemMROFilterInput | null> | null;
  or?: Array<ModelSubscriptionItemMROFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nsn?: ModelSubscriptionStringInput | null;
  partNumber?: ModelSubscriptionStringInput | null;
  altPartNumber?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  quantity?: ModelSubscriptionIntInput | null;
  condition?: ModelSubscriptionStringInput | null;
  control?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionFloatInput | null;
  demilitarizationCode?: ModelSubscriptionStringInput | null;
  scheduleB?: ModelSubscriptionStringInput | null;
  eccn?: ModelSubscriptionStringInput | null;
  isExportControlled?: ModelSubscriptionBooleanInput | null;
  usml?: ModelSubscriptionBooleanInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  countryID?: ModelSubscriptionIDInput | null;
  imageUrls?: ModelSubscriptionStringInput | null;
  viewCount?: ModelSubscriptionIntInput | null;
  unitOfMeasure?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionItemFilterInput | null> | null;
  or?: Array<ModelSubscriptionItemFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionCompanyItemsImportFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  importName?: ModelSubscriptionStringInput | null;
  importStatus?: ModelSubscriptionStringInput | null;
  importProgress?: ModelSubscriptionFloatInput | null;
  importFileKey?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCompanyItemsImportFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyItemsImportFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionCustomerRfqEmailFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  dateSent?: ModelSubscriptionStringInput | null;
  htmlBody?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCustomerRfqEmailFilterInput | null> | null;
  or?: Array<ModelSubscriptionCustomerRfqEmailFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionNSNDetailFilterInput = {
  nsn?: ModelSubscriptionIDInput | null;
  niin?: ModelSubscriptionStringInput | null;
  itemName?: ModelSubscriptionStringInput | null;
  inc?: ModelSubscriptionStringInput | null;
  fsc?: ModelSubscriptionStringInput | null;
  assignmentDate?: ModelSubscriptionStringInput | null;
  crit?: ModelSubscriptionStringInput | null;
  iig?: ModelSubscriptionStringInput | null;
  isc?: ModelSubscriptionStringInput | null;
  dateStandardized?: ModelSubscriptionStringInput | null;
  hmic?: ModelSubscriptionStringInput | null;
  dodic?: ModelSubscriptionStringInput | null;
  nsc?: ModelSubscriptionStringInput | null;
  cancellationDate?: ModelSubscriptionStringInput | null;
  pmic?: ModelSubscriptionStringInput | null;
  fiig?: ModelSubscriptionStringInput | null;
  esd?: ModelSubscriptionStringInput | null;
  scheduleB?: ModelSubscriptionStringInput | null;
  demil?: ModelSubscriptionStringInput | null;
  demilint?: ModelSubscriptionStringInput | null;
  tiic?: ModelSubscriptionStringInput | null;
  originator?: ModelSubscriptionStringInput | null;
  adpec?: ModelSubscriptionStringInput | null;
  rpdmrc?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionNSNDetailFilterInput | null> | null;
  or?: Array<ModelSubscriptionNSNDetailFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionContractHistoryFilterInput = {
  contractNumber?: ModelSubscriptionIDInput | null;
  nsn?: ModelSubscriptionIDInput | null;
  niin?: ModelSubscriptionStringInput | null;
  securityClassification?: ModelSubscriptionStringInput | null;
  fsc?: ModelSubscriptionStringInput | null;
  unit?: ModelSubscriptionStringInput | null;
  cage?: ModelSubscriptionStringInput | null;
  orderQuantity?: ModelSubscriptionFloatInput | null;
  awardDate?: ModelSubscriptionStringInput | null;
  netPrice?: ModelSubscriptionFloatInput | null;
  poNum?: ModelSubscriptionStringInput | null;
  poItemNo?: ModelSubscriptionStringInput | null;
  itemName?: ModelSubscriptionStringInput | null;
  partNumber?: ModelSubscriptionStringInput | null;
  standardUnitPrice?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionContractHistoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionContractHistoryFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionRfqItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  rfqId?: ModelSubscriptionIDInput | null;
  itemId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionRfqItemsFilterInput | null> | null;
  or?: Array<ModelSubscriptionRfqItemsFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionCompanyShippingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  shippingAddressId?: ModelSubscriptionIDInput | null;
  companyId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCompanyShippingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyShippingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionCompanyBillingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  billingAddressId?: ModelSubscriptionIDInput | null;
  companyId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCompanyBillingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyBillingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionUserDetailsFilterInput = {
  userID?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  roles?: ModelSubscriptionStringInput | null;
  contactEmail?: ModelSubscriptionStringInput | null;
  contactPhone?: ModelSubscriptionStringInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  isCompanyOwner?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionUserDetailsFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserDetailsFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionItemViewHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  itemViewDate?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  itemID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionItemViewHistoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionItemViewHistoryFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionMessageBoardFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionMessageBoardFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageBoardFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  timestamp?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  companyID?: ModelSubscriptionIDInput | null;
  messageBoardID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionUserDetailsBillingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userDetailsUserID?: ModelSubscriptionIDInput | null;
  billingAddressId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserDetailsBillingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserDetailsBillingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionUserDetailsShippingAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userDetailsUserID?: ModelSubscriptionIDInput | null;
  shippingAddressId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserDetailsShippingAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserDetailsShippingAddressFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type CreateRfqMutationVariables = {
  input: CreateRfqInput;
  condition?: ModelRfqConditionInput | null;
};

export type CreateRfqMutation = {
  createRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type UpdateRfqMutationVariables = {
  input: UpdateRfqInput;
  condition?: ModelRfqConditionInput | null;
};

export type UpdateRfqMutation = {
  updateRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type DeleteRfqMutationVariables = {
  input: DeleteRfqInput;
  condition?: ModelRfqConditionInput | null;
};

export type DeleteRfqMutation = {
  deleteRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type CreateCountryMutationVariables = {
  input: CreateCountryInput;
  condition?: ModelCountryConditionInput | null;
};

export type CreateCountryMutation = {
  createCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCountryMutationVariables = {
  input: UpdateCountryInput;
  condition?: ModelCountryConditionInput | null;
};

export type UpdateCountryMutation = {
  updateCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCountryMutationVariables = {
  input: DeleteCountryInput;
  condition?: ModelCountryConditionInput | null;
};

export type DeleteCountryMutation = {
  deleteCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateShippingAddressMutationVariables = {
  input: CreateShippingAddressInput;
  condition?: ModelShippingAddressConditionInput | null;
};

export type CreateShippingAddressMutation = {
  createShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateShippingAddressMutationVariables = {
  input: UpdateShippingAddressInput;
  condition?: ModelShippingAddressConditionInput | null;
};

export type UpdateShippingAddressMutation = {
  updateShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteShippingAddressMutationVariables = {
  input: DeleteShippingAddressInput;
  condition?: ModelShippingAddressConditionInput | null;
};

export type DeleteShippingAddressMutation = {
  deleteShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateBillingAddressMutationVariables = {
  input: CreateBillingAddressInput;
  condition?: ModelBillingAddressConditionInput | null;
};

export type CreateBillingAddressMutation = {
  createBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateBillingAddressMutationVariables = {
  input: UpdateBillingAddressInput;
  condition?: ModelBillingAddressConditionInput | null;
};

export type UpdateBillingAddressMutation = {
  updateBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteBillingAddressMutationVariables = {
  input: DeleteBillingAddressInput;
  condition?: ModelBillingAddressConditionInput | null;
};

export type DeleteBillingAddressMutation = {
  deleteBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type CreateCompanyMutation = {
  createCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyMutation = {
  updateCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type DeleteCompanyMutation = {
  deleteCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type CreateNotificationMutation = {
  createNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type UpdateNotificationMutation = {
  updateNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type DeleteNotificationMutation = {
  deleteNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type CreateItemMROMutationVariables = {
  input: CreateItemMROInput;
  condition?: ModelItemMROConditionInput | null;
};

export type CreateItemMROMutation = {
  createItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateItemMROMutationVariables = {
  input: UpdateItemMROInput;
  condition?: ModelItemMROConditionInput | null;
};

export type UpdateItemMROMutation = {
  updateItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteItemMROMutationVariables = {
  input: DeleteItemMROInput;
  condition?: ModelItemMROConditionInput | null;
};

export type DeleteItemMROMutation = {
  deleteItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateItemMutationVariables = {
  input: CreateItemInput;
  condition?: ModelItemConditionInput | null;
};

export type CreateItemMutation = {
  createItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput;
  condition?: ModelItemConditionInput | null;
};

export type UpdateItemMutation = {
  updateItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput;
  condition?: ModelItemConditionInput | null;
};

export type DeleteItemMutation = {
  deleteItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCompanyItemsImportMutationVariables = {
  input: CreateCompanyItemsImportInput;
  condition?: ModelCompanyItemsImportConditionInput | null;
};

export type CreateCompanyItemsImportMutation = {
  createCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCompanyItemsImportMutationVariables = {
  input: UpdateCompanyItemsImportInput;
  condition?: ModelCompanyItemsImportConditionInput | null;
};

export type UpdateCompanyItemsImportMutation = {
  updateCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCompanyItemsImportMutationVariables = {
  input: DeleteCompanyItemsImportInput;
  condition?: ModelCompanyItemsImportConditionInput | null;
};

export type DeleteCompanyItemsImportMutation = {
  deleteCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCustomerRfqEmailMutationVariables = {
  input: CreateCustomerRfqEmailInput;
  condition?: ModelCustomerRfqEmailConditionInput | null;
};

export type CreateCustomerRfqEmailMutation = {
  createCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCustomerRfqEmailMutationVariables = {
  input: UpdateCustomerRfqEmailInput;
  condition?: ModelCustomerRfqEmailConditionInput | null;
};

export type UpdateCustomerRfqEmailMutation = {
  updateCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCustomerRfqEmailMutationVariables = {
  input: DeleteCustomerRfqEmailInput;
  condition?: ModelCustomerRfqEmailConditionInput | null;
};

export type DeleteCustomerRfqEmailMutation = {
  deleteCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateNSNDetailMutationVariables = {
  input: CreateNSNDetailInput;
  condition?: ModelNSNDetailConditionInput | null;
};

export type CreateNSNDetailMutation = {
  createNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateNSNDetailMutationVariables = {
  input: UpdateNSNDetailInput;
  condition?: ModelNSNDetailConditionInput | null;
};

export type UpdateNSNDetailMutation = {
  updateNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteNSNDetailMutationVariables = {
  input: DeleteNSNDetailInput;
  condition?: ModelNSNDetailConditionInput | null;
};

export type DeleteNSNDetailMutation = {
  deleteNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateContractHistoryMutationVariables = {
  input: CreateContractHistoryInput;
  condition?: ModelContractHistoryConditionInput | null;
};

export type CreateContractHistoryMutation = {
  createContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateContractHistoryMutationVariables = {
  input: UpdateContractHistoryInput;
  condition?: ModelContractHistoryConditionInput | null;
};

export type UpdateContractHistoryMutation = {
  updateContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteContractHistoryMutationVariables = {
  input: DeleteContractHistoryInput;
  condition?: ModelContractHistoryConditionInput | null;
};

export type DeleteContractHistoryMutation = {
  deleteContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateRfqItemsMutationVariables = {
  input: CreateRfqItemsInput;
  condition?: ModelRfqItemsConditionInput | null;
};

export type CreateRfqItemsMutation = {
  createRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateRfqItemsMutationVariables = {
  input: UpdateRfqItemsInput;
  condition?: ModelRfqItemsConditionInput | null;
};

export type UpdateRfqItemsMutation = {
  updateRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteRfqItemsMutationVariables = {
  input: DeleteRfqItemsInput;
  condition?: ModelRfqItemsConditionInput | null;
};

export type DeleteRfqItemsMutation = {
  deleteRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCompanyShippingAddressMutationVariables = {
  input: CreateCompanyShippingAddressInput;
  condition?: ModelCompanyShippingAddressConditionInput | null;
};

export type CreateCompanyShippingAddressMutation = {
  createCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCompanyShippingAddressMutationVariables = {
  input: UpdateCompanyShippingAddressInput;
  condition?: ModelCompanyShippingAddressConditionInput | null;
};

export type UpdateCompanyShippingAddressMutation = {
  updateCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCompanyShippingAddressMutationVariables = {
  input: DeleteCompanyShippingAddressInput;
  condition?: ModelCompanyShippingAddressConditionInput | null;
};

export type DeleteCompanyShippingAddressMutation = {
  deleteCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCompanyBillingAddressMutationVariables = {
  input: CreateCompanyBillingAddressInput;
  condition?: ModelCompanyBillingAddressConditionInput | null;
};

export type CreateCompanyBillingAddressMutation = {
  createCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCompanyBillingAddressMutationVariables = {
  input: UpdateCompanyBillingAddressInput;
  condition?: ModelCompanyBillingAddressConditionInput | null;
};

export type UpdateCompanyBillingAddressMutation = {
  updateCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCompanyBillingAddressMutationVariables = {
  input: DeleteCompanyBillingAddressInput;
  condition?: ModelCompanyBillingAddressConditionInput | null;
};

export type DeleteCompanyBillingAddressMutation = {
  deleteCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateUserDetailsMutationVariables = {
  input: CreateUserDetailsInput;
  condition?: ModelUserDetailsConditionInput | null;
};

export type CreateUserDetailsMutation = {
  createUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserDetailsMutationVariables = {
  input: UpdateUserDetailsInput;
  condition?: ModelUserDetailsConditionInput | null;
};

export type UpdateUserDetailsMutation = {
  updateUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserDetailsMutationVariables = {
  input: DeleteUserDetailsInput;
  condition?: ModelUserDetailsConditionInput | null;
};

export type DeleteUserDetailsMutation = {
  deleteUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateItemViewHistoryMutationVariables = {
  input: CreateItemViewHistoryInput;
  condition?: ModelItemViewHistoryConditionInput | null;
};

export type CreateItemViewHistoryMutation = {
  createItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateItemViewHistoryMutationVariables = {
  input: UpdateItemViewHistoryInput;
  condition?: ModelItemViewHistoryConditionInput | null;
};

export type UpdateItemViewHistoryMutation = {
  updateItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteItemViewHistoryMutationVariables = {
  input: DeleteItemViewHistoryInput;
  condition?: ModelItemViewHistoryConditionInput | null;
};

export type DeleteItemViewHistoryMutation = {
  deleteItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateMessageBoardMutationVariables = {
  input: CreateMessageBoardInput;
  condition?: ModelMessageBoardConditionInput | null;
};

export type CreateMessageBoardMutation = {
  createMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateMessageBoardMutationVariables = {
  input: UpdateMessageBoardInput;
  condition?: ModelMessageBoardConditionInput | null;
};

export type UpdateMessageBoardMutation = {
  updateMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteMessageBoardMutationVariables = {
  input: DeleteMessageBoardInput;
  condition?: ModelMessageBoardConditionInput | null;
};

export type DeleteMessageBoardMutation = {
  deleteMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type CreateUserDetailsBillingAddressMutationVariables = {
  input: CreateUserDetailsBillingAddressInput;
  condition?: ModelUserDetailsBillingAddressConditionInput | null;
};

export type CreateUserDetailsBillingAddressMutation = {
  createUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserDetailsBillingAddressMutationVariables = {
  input: UpdateUserDetailsBillingAddressInput;
  condition?: ModelUserDetailsBillingAddressConditionInput | null;
};

export type UpdateUserDetailsBillingAddressMutation = {
  updateUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserDetailsBillingAddressMutationVariables = {
  input: DeleteUserDetailsBillingAddressInput;
  condition?: ModelUserDetailsBillingAddressConditionInput | null;
};

export type DeleteUserDetailsBillingAddressMutation = {
  deleteUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateUserDetailsShippingAddressMutationVariables = {
  input: CreateUserDetailsShippingAddressInput;
  condition?: ModelUserDetailsShippingAddressConditionInput | null;
};

export type CreateUserDetailsShippingAddressMutation = {
  createUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserDetailsShippingAddressMutationVariables = {
  input: UpdateUserDetailsShippingAddressInput;
  condition?: ModelUserDetailsShippingAddressConditionInput | null;
};

export type UpdateUserDetailsShippingAddressMutation = {
  updateUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserDetailsShippingAddressMutationVariables = {
  input: DeleteUserDetailsShippingAddressInput;
  condition?: ModelUserDetailsShippingAddressConditionInput | null;
};

export type DeleteUserDetailsShippingAddressMutation = {
  deleteUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type SearchRfqsQueryVariables = {
  filter?: SearchableRfqFilterInput | null;
  sort?: Array<SearchableRfqSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableRfqAggregationInput | null> | null;
};

export type SearchRfqsQuery = {
  searchRfqs?: {
    __typename: "SearchableRfqConnection";
    items: Array<{
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type SearchCompaniesQueryVariables = {
  filter?: SearchableCompanyFilterInput | null;
  sort?: Array<SearchableCompanySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCompanyAggregationInput | null> | null;
};

export type SearchCompaniesQuery = {
  searchCompanies?: {
    __typename: "SearchableCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type SearchItemsQueryVariables = {
  filter?: SearchableItemFilterInput | null;
  sort?: Array<SearchableItemSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableItemAggregationInput | null> | null;
};

export type SearchItemsQuery = {
  searchItems?: {
    __typename: "SearchableItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type SearchNSNDetailsQueryVariables = {
  filter?: SearchableNSNDetailFilterInput | null;
  sort?: Array<SearchableNSNDetailSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableNSNDetailAggregationInput | null> | null;
};

export type SearchNSNDetailsQuery = {
  searchNSNDetails?: {
    __typename: "SearchableNSNDetailConnection";
    items: Array<{
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type SearchContractHistoriesQueryVariables = {
  filter?: SearchableContractHistoryFilterInput | null;
  sort?: Array<SearchableContractHistorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableContractHistoryAggregationInput | null> | null;
};

export type SearchContractHistoriesQuery = {
  searchContractHistories?: {
    __typename: "SearchableContractHistoryConnection";
    items: Array<{
      __typename: "ContractHistory";
      contractNumber: string;
      nsn: string;
      niin?: string | null;
      securityClassification?: string | null;
      fsc?: string | null;
      unit?: string | null;
      cage?: string | null;
      orderQuantity?: number | null;
      awardDate?: string | null;
      netPrice?: number | null;
      poNum?: string | null;
      poItemNo?: string | null;
      itemName?: string | null;
      partNumber?: string | null;
      standardUnitPrice?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type GetRfqQueryVariables = {
  id: string;
};

export type GetRfqQuery = {
  getRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type ListRfqsQueryVariables = {
  filter?: ModelRfqFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRfqsQuery = {
  listRfqs?: {
    __typename: "ModelRfqConnection";
    items: Array<{
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncRfqsQueryVariables = {
  filter?: ModelRfqFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncRfqsQuery = {
  syncRfqs?: {
    __typename: "ModelRfqConnection";
    items: Array<{
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCountryQueryVariables = {
  id: string;
};

export type GetCountryQuery = {
  getCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCountriesQueryVariables = {
  filter?: ModelCountryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCountriesQuery = {
  listCountries?: {
    __typename: "ModelCountryConnection";
    items: Array<{
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCountriesQueryVariables = {
  filter?: ModelCountryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCountriesQuery = {
  syncCountries?: {
    __typename: "ModelCountryConnection";
    items: Array<{
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetShippingAddressQueryVariables = {
  id: string;
};

export type GetShippingAddressQuery = {
  getShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListShippingAddressesQueryVariables = {
  filter?: ModelShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListShippingAddressesQuery = {
  listShippingAddresses?: {
    __typename: "ModelShippingAddressConnection";
    items: Array<{
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncShippingAddressesQueryVariables = {
  filter?: ModelShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncShippingAddressesQuery = {
  syncShippingAddresses?: {
    __typename: "ModelShippingAddressConnection";
    items: Array<{
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetBillingAddressQueryVariables = {
  id: string;
};

export type GetBillingAddressQuery = {
  getBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListBillingAddressesQueryVariables = {
  filter?: ModelBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBillingAddressesQuery = {
  listBillingAddresses?: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncBillingAddressesQueryVariables = {
  filter?: ModelBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncBillingAddressesQuery = {
  syncBillingAddresses?: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCompanyQueryVariables = {
  id: string;
};

export type GetCompanyQuery = {
  getCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompaniesQuery = {
  listCompanies?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCompaniesQuery = {
  syncCompanies?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetNotificationQueryVariables = {
  id: string;
};

export type GetNotificationQuery = {
  getNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListNotificationsQuery = {
  listNotifications?: {
    __typename: "ModelNotificationConnection";
    items: Array<{
      __typename: "Notification";
      id: string;
      message: string;
      type: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyNotificationsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncNotificationsQuery = {
  syncNotifications?: {
    __typename: "ModelNotificationConnection";
    items: Array<{
      __typename: "Notification";
      id: string;
      message: string;
      type: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyNotificationsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetItemMROQueryVariables = {
  id: string;
};

export type GetItemMROQuery = {
  getItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListItemMROSQueryVariables = {
  filter?: ModelItemMROFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListItemMROSQuery = {
  listItemMROS?: {
    __typename: "ModelItemMROConnection";
    items: Array<{
      __typename: "ItemMRO";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      price?: number | null;
      certification?: string | null;
      companyID: string;
      imageUrls?: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncItemMROSQueryVariables = {
  filter?: ModelItemMROFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncItemMROSQuery = {
  syncItemMROS?: {
    __typename: "ModelItemMROConnection";
    items: Array<{
      __typename: "ItemMRO";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      price?: number | null;
      certification?: string | null;
      companyID: string;
      imageUrls?: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetItemQueryVariables = {
  id: string;
};

export type GetItemQuery = {
  getItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListItemsQuery = {
  listItems?: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncItemsQuery = {
  syncItems?: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCompanyItemsImportQueryVariables = {
  id: string;
};

export type GetCompanyItemsImportQuery = {
  getCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCompanyItemsImportsQueryVariables = {
  id?: string | null;
  filter?: ModelCompanyItemsImportFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListCompanyItemsImportsQuery = {
  listCompanyItemsImports?: {
    __typename: "ModelCompanyItemsImportConnection";
    items: Array<{
      __typename: "CompanyItemsImport";
      id: string;
      companyID: string;
      importName?: string | null;
      importStatus?: string | null;
      importProgress?: number | null;
      importFileKey?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCompanyItemsImportsQueryVariables = {
  filter?: ModelCompanyItemsImportFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCompanyItemsImportsQuery = {
  syncCompanyItemsImports?: {
    __typename: "ModelCompanyItemsImportConnection";
    items: Array<{
      __typename: "CompanyItemsImport";
      id: string;
      companyID: string;
      importName?: string | null;
      importStatus?: string | null;
      importProgress?: number | null;
      importFileKey?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCustomerRfqEmailQueryVariables = {
  id: string;
};

export type GetCustomerRfqEmailQuery = {
  getCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCustomerRfqEmailsQueryVariables = {
  filter?: ModelCustomerRfqEmailFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomerRfqEmailsQuery = {
  listCustomerRfqEmails?: {
    __typename: "ModelCustomerRfqEmailConnection";
    items: Array<{
      __typename: "CustomerRfqEmail";
      id: string;
      email: string;
      dateSent: string;
      htmlBody: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCustomerRfqEmailsQueryVariables = {
  filter?: ModelCustomerRfqEmailFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCustomerRfqEmailsQuery = {
  syncCustomerRfqEmails?: {
    __typename: "ModelCustomerRfqEmailConnection";
    items: Array<{
      __typename: "CustomerRfqEmail";
      id: string;
      email: string;
      dateSent: string;
      htmlBody: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetNSNDetailQueryVariables = {
  nsn: string;
};

export type GetNSNDetailQuery = {
  getNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListNSNDetailsQueryVariables = {
  nsn?: string | null;
  filter?: ModelNSNDetailFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListNSNDetailsQuery = {
  listNSNDetails?: {
    __typename: "ModelNSNDetailConnection";
    items: Array<{
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncNSNDetailsQueryVariables = {
  filter?: ModelNSNDetailFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncNSNDetailsQuery = {
  syncNSNDetails?: {
    __typename: "ModelNSNDetailConnection";
    items: Array<{
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetContractHistoryQueryVariables = {
  contractNumber: string;
};

export type GetContractHistoryQuery = {
  getContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListContractHistoriesQueryVariables = {
  contractNumber?: string | null;
  filter?: ModelContractHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListContractHistoriesQuery = {
  listContractHistories?: {
    __typename: "ModelContractHistoryConnection";
    items: Array<{
      __typename: "ContractHistory";
      contractNumber: string;
      nsn: string;
      niin?: string | null;
      securityClassification?: string | null;
      fsc?: string | null;
      unit?: string | null;
      cage?: string | null;
      orderQuantity?: number | null;
      awardDate?: string | null;
      netPrice?: number | null;
      poNum?: string | null;
      poItemNo?: string | null;
      itemName?: string | null;
      partNumber?: string | null;
      standardUnitPrice?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncContractHistoriesQueryVariables = {
  filter?: ModelContractHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncContractHistoriesQuery = {
  syncContractHistories?: {
    __typename: "ModelContractHistoryConnection";
    items: Array<{
      __typename: "ContractHistory";
      contractNumber: string;
      nsn: string;
      niin?: string | null;
      securityClassification?: string | null;
      fsc?: string | null;
      unit?: string | null;
      cage?: string | null;
      orderQuantity?: number | null;
      awardDate?: string | null;
      netPrice?: number | null;
      poNum?: string | null;
      poItemNo?: string | null;
      itemName?: string | null;
      partNumber?: string | null;
      standardUnitPrice?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetRfqItemsQueryVariables = {
  id: string;
};

export type GetRfqItemsQuery = {
  getRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListRfqItemsQueryVariables = {
  filter?: ModelRfqItemsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRfqItemsQuery = {
  listRfqItems?: {
    __typename: "ModelRfqItemsConnection";
    items: Array<{
      __typename: "RfqItems";
      id: string;
      rfqId: string;
      itemId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncRfqItemsQueryVariables = {
  filter?: ModelRfqItemsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncRfqItemsQuery = {
  syncRfqItems?: {
    __typename: "ModelRfqItemsConnection";
    items: Array<{
      __typename: "RfqItems";
      id: string;
      rfqId: string;
      itemId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCompanyShippingAddressQueryVariables = {
  id: string;
};

export type GetCompanyShippingAddressQuery = {
  getCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCompanyShippingAddressesQueryVariables = {
  filter?: ModelCompanyShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompanyShippingAddressesQuery = {
  listCompanyShippingAddresses?: {
    __typename: "ModelCompanyShippingAddressConnection";
    items: Array<{
      __typename: "CompanyShippingAddress";
      id: string;
      shippingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCompanyShippingAddressesQueryVariables = {
  filter?: ModelCompanyShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCompanyShippingAddressesQuery = {
  syncCompanyShippingAddresses?: {
    __typename: "ModelCompanyShippingAddressConnection";
    items: Array<{
      __typename: "CompanyShippingAddress";
      id: string;
      shippingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCompanyBillingAddressQueryVariables = {
  id: string;
};

export type GetCompanyBillingAddressQuery = {
  getCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCompanyBillingAddressesQueryVariables = {
  filter?: ModelCompanyBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompanyBillingAddressesQuery = {
  listCompanyBillingAddresses?: {
    __typename: "ModelCompanyBillingAddressConnection";
    items: Array<{
      __typename: "CompanyBillingAddress";
      id: string;
      billingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCompanyBillingAddressesQueryVariables = {
  filter?: ModelCompanyBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCompanyBillingAddressesQuery = {
  syncCompanyBillingAddresses?: {
    __typename: "ModelCompanyBillingAddressConnection";
    items: Array<{
      __typename: "CompanyBillingAddress";
      id: string;
      billingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type RfqsByReceivingCompanyIDQueryVariables = {
  receivingCompanyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelRfqFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type RfqsByReceivingCompanyIDQuery = {
  rfqsByReceivingCompanyID?: {
    __typename: "ModelRfqConnection";
    items: Array<{
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type RfqsBySendingCompanyIDQueryVariables = {
  sendingCompanyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelRfqFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type RfqsBySendingCompanyIDQuery = {
  rfqsBySendingCompanyID?: {
    __typename: "ModelRfqConnection";
    items: Array<{
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ShippingAddressesByCountryIDQueryVariables = {
  countryID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ShippingAddressesByCountryIDQuery = {
  shippingAddressesByCountryID?: {
    __typename: "ModelShippingAddressConnection";
    items: Array<{
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type BillingAddressesByCountryIDQueryVariables = {
  countryID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type BillingAddressesByCountryIDQuery = {
  billingAddressesByCountryID?: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CompaniesByCountryIDQueryVariables = {
  countryID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompaniesByCountryIDQuery = {
  companiesByCountryID?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ByCompanyQueryVariables = {
  companyID: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ByCompanyQuery = {
  byCompany?: {
    __typename: "ModelNotificationConnection";
    items: Array<{
      __typename: "Notification";
      id: string;
      message: string;
      type: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyNotificationsId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ItemMROSByCompanyIDQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelItemMROFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ItemMROSByCompanyIDQuery = {
  itemMROSByCompanyID?: {
    __typename: "ModelItemMROConnection";
    items: Array<{
      __typename: "ItemMRO";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      price?: number | null;
      certification?: string | null;
      companyID: string;
      imageUrls?: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ItemsByCompanyIDQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelItemFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ItemsByCompanyIDQuery = {
  itemsByCompanyID?: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ItemsByCountryIDQueryVariables = {
  countryID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelItemFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ItemsByCountryIDQuery = {
  itemsByCountryID?: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type ContractHistoriesByNsnQueryVariables = {
  nsn: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelContractHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ContractHistoriesByNsnQuery = {
  contractHistoriesByNsn?: {
    __typename: "ModelContractHistoryConnection";
    items: Array<{
      __typename: "ContractHistory";
      contractNumber: string;
      nsn: string;
      niin?: string | null;
      securityClassification?: string | null;
      fsc?: string | null;
      unit?: string | null;
      cage?: string | null;
      orderQuantity?: number | null;
      awardDate?: string | null;
      netPrice?: number | null;
      poNum?: string | null;
      poItemNo?: string | null;
      itemName?: string | null;
      partNumber?: string | null;
      standardUnitPrice?: number | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type RfqItemsByRfqIdQueryVariables = {
  rfqId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelRfqItemsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type RfqItemsByRfqIdQuery = {
  rfqItemsByRfqId?: {
    __typename: "ModelRfqItemsConnection";
    items: Array<{
      __typename: "RfqItems";
      id: string;
      rfqId: string;
      itemId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type RfqItemsByItemIdQueryVariables = {
  itemId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelRfqItemsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type RfqItemsByItemIdQuery = {
  rfqItemsByItemId?: {
    __typename: "ModelRfqItemsConnection";
    items: Array<{
      __typename: "RfqItems";
      id: string;
      rfqId: string;
      itemId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CompanyShippingAddressesByShippingAddressIdQueryVariables = {
  shippingAddressId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyShippingAddressesByShippingAddressIdQuery = {
  companyShippingAddressesByShippingAddressId?: {
    __typename: "ModelCompanyShippingAddressConnection";
    items: Array<{
      __typename: "CompanyShippingAddress";
      id: string;
      shippingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CompanyShippingAddressesByCompanyIdQueryVariables = {
  companyId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyShippingAddressesByCompanyIdQuery = {
  companyShippingAddressesByCompanyId?: {
    __typename: "ModelCompanyShippingAddressConnection";
    items: Array<{
      __typename: "CompanyShippingAddress";
      id: string;
      shippingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CompanyBillingAddressesByBillingAddressIdQueryVariables = {
  billingAddressId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyBillingAddressesByBillingAddressIdQuery = {
  companyBillingAddressesByBillingAddressId?: {
    __typename: "ModelCompanyBillingAddressConnection";
    items: Array<{
      __typename: "CompanyBillingAddress";
      id: string;
      billingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CompanyBillingAddressesByCompanyIdQueryVariables = {
  companyId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCompanyBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CompanyBillingAddressesByCompanyIdQuery = {
  companyBillingAddressesByCompanyId?: {
    __typename: "ModelCompanyBillingAddressConnection";
    items: Array<{
      __typename: "CompanyBillingAddress";
      id: string;
      billingAddressId: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserDetailsQueryVariables = {
  userID: string;
};

export type GetUserDetailsQuery = {
  getUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUserDetailsQueryVariables = {
  userID?: string | null;
  filter?: ModelUserDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListUserDetailsQuery = {
  listUserDetails?: {
    __typename: "ModelUserDetailsConnection";
    items: Array<{
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserDetailsQueryVariables = {
  filter?: ModelUserDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserDetailsQuery = {
  syncUserDetails?: {
    __typename: "ModelUserDetailsConnection";
    items: Array<{
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserDetailsByCompanyIDQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserDetailsByCompanyIDQuery = {
  userDetailsByCompanyID?: {
    __typename: "ModelUserDetailsConnection";
    items: Array<{
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetItemViewHistoryQueryVariables = {
  id: string;
};

export type GetItemViewHistoryQuery = {
  getItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListItemViewHistoriesQueryVariables = {
  filter?: ModelItemViewHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListItemViewHistoriesQuery = {
  listItemViewHistories?: {
    __typename: "ModelItemViewHistoryConnection";
    items: Array<{
      __typename: "ItemViewHistory";
      id: string;
      itemViewDate: string;
      userID: string;
      itemID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncItemViewHistoriesQueryVariables = {
  filter?: ModelItemViewHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncItemViewHistoriesQuery = {
  syncItemViewHistories?: {
    __typename: "ModelItemViewHistoryConnection";
    items: Array<{
      __typename: "ItemViewHistory";
      id: string;
      itemViewDate: string;
      userID: string;
      itemID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetMessageBoardQueryVariables = {
  id: string;
};

export type GetMessageBoardQuery = {
  getMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListMessageBoardsQueryVariables = {
  filter?: ModelMessageBoardFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessageBoardsQuery = {
  listMessageBoards?: {
    __typename: "ModelMessageBoardConnection";
    items: Array<{
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncMessageBoardsQueryVariables = {
  filter?: ModelMessageBoardFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncMessageBoardsQuery = {
  syncMessageBoards?: {
    __typename: "ModelMessageBoardConnection";
    items: Array<{
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type MessageBoardsByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMessageBoardFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MessageBoardsByUserIDQuery = {
  messageBoardsByUserID?: {
    __typename: "ModelMessageBoardConnection";
    items: Array<{
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type MessageBoardsByCompanyIDQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMessageBoardFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MessageBoardsByCompanyIDQuery = {
  messageBoardsByCompanyID?: {
    __typename: "ModelMessageBoardConnection";
    items: Array<{
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SearchMessageBoardsQueryVariables = {
  filter?: SearchableMessageBoardFilterInput | null;
  sort?: Array<SearchableMessageBoardSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableMessageBoardAggregationInput | null> | null;
};

export type SearchMessageBoardsQuery = {
  searchMessageBoards?: {
    __typename: "SearchableMessageBoardConnection";
    items: Array<{
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      timestamp: string;
      userID: string;
      companyID: string;
      messageBoardID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessagesId?: string | null;
      messageBoardMessagesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncMessagesQuery = {
  syncMessages?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      timestamp: string;
      userID: string;
      companyID: string;
      messageBoardID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessagesId?: string | null;
      messageBoardMessagesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type MessagesByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MessagesByUserIDQuery = {
  messagesByUserID?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      timestamp: string;
      userID: string;
      companyID: string;
      messageBoardID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessagesId?: string | null;
      messageBoardMessagesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type MessagesByCompanyIDQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MessagesByCompanyIDQuery = {
  messagesByCompanyID?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      timestamp: string;
      userID: string;
      companyID: string;
      messageBoardID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessagesId?: string | null;
      messageBoardMessagesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SearchMessagesQueryVariables = {
  filter?: SearchableMessageFilterInput | null;
  sort?: Array<SearchableMessageSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableMessageAggregationInput | null> | null;
};

export type SearchMessagesQuery = {
  searchMessages?: {
    __typename: "SearchableMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      timestamp: string;
      userID: string;
      companyID: string;
      messageBoardID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessagesId?: string | null;
      messageBoardMessagesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type GetUserDetailsBillingAddressQueryVariables = {
  id: string;
};

export type GetUserDetailsBillingAddressQuery = {
  getUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUserDetailsBillingAddressesQueryVariables = {
  filter?: ModelUserDetailsBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserDetailsBillingAddressesQuery = {
  listUserDetailsBillingAddresses?: {
    __typename: "ModelUserDetailsBillingAddressConnection";
    items: Array<{
      __typename: "UserDetailsBillingAddress";
      id: string;
      userDetailsUserID: string;
      billingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserDetailsBillingAddressesQueryVariables = {
  filter?: ModelUserDetailsBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserDetailsBillingAddressesQuery = {
  syncUserDetailsBillingAddresses?: {
    __typename: "ModelUserDetailsBillingAddressConnection";
    items: Array<{
      __typename: "UserDetailsBillingAddress";
      id: string;
      userDetailsUserID: string;
      billingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserDetailsBillingAddressesByUserDetailsUserIDQueryVariables = {
  userDetailsUserID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserDetailsBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserDetailsBillingAddressesByUserDetailsUserIDQuery = {
  userDetailsBillingAddressesByUserDetailsUserID?: {
    __typename: "ModelUserDetailsBillingAddressConnection";
    items: Array<{
      __typename: "UserDetailsBillingAddress";
      id: string;
      userDetailsUserID: string;
      billingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserDetailsBillingAddressesByBillingAddressIdQueryVariables = {
  billingAddressId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserDetailsBillingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserDetailsBillingAddressesByBillingAddressIdQuery = {
  userDetailsBillingAddressesByBillingAddressId?: {
    __typename: "ModelUserDetailsBillingAddressConnection";
    items: Array<{
      __typename: "UserDetailsBillingAddress";
      id: string;
      userDetailsUserID: string;
      billingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserDetailsShippingAddressQueryVariables = {
  id: string;
};

export type GetUserDetailsShippingAddressQuery = {
  getUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUserDetailsShippingAddressesQueryVariables = {
  filter?: ModelUserDetailsShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserDetailsShippingAddressesQuery = {
  listUserDetailsShippingAddresses?: {
    __typename: "ModelUserDetailsShippingAddressConnection";
    items: Array<{
      __typename: "UserDetailsShippingAddress";
      id: string;
      userDetailsUserID: string;
      shippingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserDetailsShippingAddressesQueryVariables = {
  filter?: ModelUserDetailsShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserDetailsShippingAddressesQuery = {
  syncUserDetailsShippingAddresses?: {
    __typename: "ModelUserDetailsShippingAddressConnection";
    items: Array<{
      __typename: "UserDetailsShippingAddress";
      id: string;
      userDetailsUserID: string;
      shippingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserDetailsShippingAddressesByUserDetailsUserIDQueryVariables = {
  userDetailsUserID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserDetailsShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserDetailsShippingAddressesByUserDetailsUserIDQuery = {
  userDetailsShippingAddressesByUserDetailsUserID?: {
    __typename: "ModelUserDetailsShippingAddressConnection";
    items: Array<{
      __typename: "UserDetailsShippingAddress";
      id: string;
      userDetailsUserID: string;
      shippingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserDetailsShippingAddressesByShippingAddressIdQueryVariables = {
  shippingAddressId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserDetailsShippingAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserDetailsShippingAddressesByShippingAddressIdQuery = {
  userDetailsShippingAddressesByShippingAddressId?: {
    __typename: "ModelUserDetailsShippingAddressConnection";
    items: Array<{
      __typename: "UserDetailsShippingAddress";
      id: string;
      userDetailsUserID: string;
      shippingAddressId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateRfqSubscriptionVariables = {
  filter?: ModelSubscriptionRfqFilterInput | null;
};

export type OnCreateRfqSubscription = {
  onCreateRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type OnUpdateRfqSubscriptionVariables = {
  filter?: ModelSubscriptionRfqFilterInput | null;
};

export type OnUpdateRfqSubscription = {
  onUpdateRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type OnDeleteRfqSubscriptionVariables = {
  filter?: ModelSubscriptionRfqFilterInput | null;
};

export type OnDeleteRfqSubscription = {
  onDeleteRfq?: {
    __typename: "Rfq";
    id: string;
    rfqNumber?: string | null;
    dateSent?: string | null;
    custRefNum?: string | null;
    companyName?: string | null;
    contact?: string | null;
    phone?: string | null;
    email?: string | null;
    shippingTerms?: string | null;
    shippingMethod?: string | null;
    leadTime?: number | null;
    paymentTerms?: string | null;
    dueDate?: string | null;
    quantityRequested?: Array<number | null> | null;
    quantityQuoted?: Array<number | null> | null;
    uom?: string | null;
    urgency?: string | null;
    discount?: number | null;
    lineTotal?: number | null;
    subtotal?: number | null;
    salesTax?: number | null;
    total?: number | null;
    internalComments?: string | null;
    emailComments?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    Items?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivingCompanyID: string;
    sendingCompanyID: string;
    ReceivingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    SendingCompany?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companySentRfqsId?: string | null;
    companyReceivedRfqsId?: string | null;
  } | null;
};

export type OnCreateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null;
};

export type OnCreateCountrySubscription = {
  onCreateCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null;
};

export type OnUpdateCountrySubscription = {
  onUpdateCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null;
};

export type OnDeleteCountrySubscription = {
  onDeleteCountry?: {
    __typename: "Country";
    id: string;
    countryName?: string | null;
    code?: string | null;
    BillingAddresses?: {
      __typename: "ModelBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionShippingAddressFilterInput | null;
};

export type OnCreateShippingAddressSubscription = {
  onCreateShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionShippingAddressFilterInput | null;
};

export type OnUpdateShippingAddressSubscription = {
  onUpdateShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionShippingAddressFilterInput | null;
};

export type OnDeleteShippingAddressSubscription = {
  onDeleteShippingAddress?: {
    __typename: "ShippingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    regi?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionBillingAddressFilterInput | null;
};

export type OnCreateBillingAddressSubscription = {
  onCreateBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionBillingAddressFilterInput | null;
};

export type OnUpdateBillingAddressSubscription = {
  onUpdateBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionBillingAddressFilterInput | null;
};

export type OnDeleteBillingAddressSubscription = {
  onDeleteBillingAddress?: {
    __typename: "BillingAddress";
    id: string;
    unitNumber?: string | null;
    streetNumber?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    region?: string | null;
    postalCode?: string | null;
    isDefault?: boolean | null;
    CompanyBillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    UserBillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnCreateCompanySubscription = {
  onCreateCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?: {
    __typename: "Company";
    id: string;
    companyName?: string | null;
    phone?: string | null;
    contactEmail?: string | null;
    Items?: {
      __typename: "ModelItemConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ItemMROS?: {
      __typename: "ModelItemMROConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    BillingAddresses?: {
      __typename: "ModelCompanyBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyMembers?: {
      __typename: "ModelUserDetailsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    CompanyOwner?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelCompanyShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID?: string | null;
    profilePictureUrl?: string | null;
    fax?: string | null;
    cageCode?: string | null;
    qualityCertifications?: Array<string | null> | null;
    companyDescription?: string | null;
    sentRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    receivedRfqs?: {
      __typename: "ModelRfqConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    addressId?: string | null;
    address?: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Notifications?: {
      __typename: "ModelNotificationConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyCompanyOwnerUserID?: string | null;
  } | null;
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?: {
    __typename: "Notification";
    id: string;
    message: string;
    type: string;
    companyID: string;
    createdAt: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyNotificationsId?: string | null;
  } | null;
};

export type OnCreateItemMROSubscriptionVariables = {
  filter?: ModelSubscriptionItemMROFilterInput | null;
};

export type OnCreateItemMROSubscription = {
  onCreateItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateItemMROSubscriptionVariables = {
  filter?: ModelSubscriptionItemMROFilterInput | null;
};

export type OnUpdateItemMROSubscription = {
  onUpdateItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteItemMROSubscriptionVariables = {
  filter?: ModelSubscriptionItemMROFilterInput | null;
};

export type OnDeleteItemMROSubscription = {
  onDeleteItemMRO?: {
    __typename: "ItemMRO";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    price?: number | null;
    certification?: string | null;
    companyID: string;
    imageUrls?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null;
};

export type OnCreateItemSubscription = {
  onCreateItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null;
};

export type OnUpdateItemSubscription = {
  onUpdateItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null;
};

export type OnDeleteItemSubscription = {
  onDeleteItem?: {
    __typename: "Item";
    id: string;
    nsn?: string | null;
    partNumber?: string | null;
    altPartNumber?: string | null;
    description?: string | null;
    quantity?: number | null;
    condition?: string | null;
    control?: string | null;
    price?: number | null;
    demilitarizationCode?: string | null;
    scheduleB?: string | null;
    eccn?: string | null;
    isExportControlled?: boolean | null;
    usml?: boolean | null;
    companyID: string;
    countryID?: string | null;
    Country?: {
      __typename: "Country";
      id: string;
      countryName?: string | null;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    imageUrls?: Array<string | null> | null;
    Rfqs?: {
      __typename: "ModelRfqItemsConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    viewCount?: number | null;
    unitOfMeasure?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCompanyItemsImportSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyItemsImportFilterInput | null;
};

export type OnCreateCompanyItemsImportSubscription = {
  onCreateCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCompanyItemsImportSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyItemsImportFilterInput | null;
};

export type OnUpdateCompanyItemsImportSubscription = {
  onUpdateCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCompanyItemsImportSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyItemsImportFilterInput | null;
};

export type OnDeleteCompanyItemsImportSubscription = {
  onDeleteCompanyItemsImport?: {
    __typename: "CompanyItemsImport";
    id: string;
    companyID: string;
    importName?: string | null;
    importStatus?: string | null;
    importProgress?: number | null;
    importFileKey?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCustomerRfqEmailSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerRfqEmailFilterInput | null;
};

export type OnCreateCustomerRfqEmailSubscription = {
  onCreateCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCustomerRfqEmailSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerRfqEmailFilterInput | null;
};

export type OnUpdateCustomerRfqEmailSubscription = {
  onUpdateCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCustomerRfqEmailSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerRfqEmailFilterInput | null;
};

export type OnDeleteCustomerRfqEmailSubscription = {
  onDeleteCustomerRfqEmail?: {
    __typename: "CustomerRfqEmail";
    id: string;
    email: string;
    dateSent: string;
    htmlBody: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateNSNDetailSubscriptionVariables = {
  filter?: ModelSubscriptionNSNDetailFilterInput | null;
};

export type OnCreateNSNDetailSubscription = {
  onCreateNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateNSNDetailSubscriptionVariables = {
  filter?: ModelSubscriptionNSNDetailFilterInput | null;
};

export type OnUpdateNSNDetailSubscription = {
  onUpdateNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteNSNDetailSubscriptionVariables = {
  filter?: ModelSubscriptionNSNDetailFilterInput | null;
};

export type OnDeleteNSNDetailSubscription = {
  onDeleteNSNDetail?: {
    __typename: "NSNDetail";
    nsn: string;
    niin?: string | null;
    itemName?: string | null;
    inc?: string | null;
    fsc?: string | null;
    assignmentDate?: string | null;
    crit?: string | null;
    iig?: string | null;
    isc?: string | null;
    dateStandardized?: string | null;
    hmic?: string | null;
    dodic?: string | null;
    nsc?: string | null;
    cancellationDate?: string | null;
    pmic?: string | null;
    fiig?: string | null;
    esd?: string | null;
    scheduleB?: string | null;
    demil?: string | null;
    demilint?: string | null;
    tiic?: string | null;
    originator?: string | null;
    adpec?: string | null;
    rpdmrc?: string | null;
    PartInformation?: Array<{
      __typename: "PartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      status?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    AdditionalPartInformation?: Array<{
      __typename: "AdditionalPartInformation";
      partNumber?: string | null;
      cage?: string | null;
      company?: string | null;
      source?: string | null;
      rncc?: string | null;
      rnvc?: string | null;
      dac?: string | null;
      rnaac?: string | null;
      rnfc?: string | null;
      rnsc?: string | null;
      rnjc?: string | null;
      sadc?: string | null;
      hcc?: string | null;
      msds?: string | null;
    } | null> | null;
    ManagementInformation?: Array<{
      __typename: "ManagementInformation";
      moec?: string | null;
      sos?: string | null;
      aac?: string | null;
      rc?: string | null;
      slc?: string | null;
      ciic?: string | null;
      upq?: string | null;
      usc?: string | null;
      unitPrice?: string | null;
      ui?: string | null;
      uicf?: string | null;
      mcd?: string | null;
      actionDate?: string | null;
      ch?: string | null;
    } | null> | null;
    PhraseInformation?: Array<{
      __typename: "PhraseInformation";
      moec?: string | null;
      pc?: string | null;
      phrase?: string | null;
      qpa?: string | null;
      uom?: string | null;
      oou?: string | null;
      jtc?: string | null;
    } | null> | null;
    TechnicalCharacteristicsInformation?: Array<{
      __typename: "TechnicalCharacteristicsInformation";
      mrc?: string | null;
      requirementStatement?: string | null;
      replyStatement?: string | null;
    } | null> | null;
    MOERulesInformation?: Array<{
      __typename: "MOERulesInformation";
      moeRule?: string | null;
      formerMOER?: string | null;
      effective?: string | null;
      amc?: string | null;
      amsc?: string | null;
      imc?: string | null;
      imca?: string | null;
      collaborators?: string | null;
      receivers?: string | null;
    } | null> | null;
    ReplacementAndObsoleteInformation?: {
      __typename: "ReplacementAndObsoleteInformation";
    } | null;
    FreightInformation?: {
      __typename: "FreightInformation";
      description?: string | null;
      originatingActivity?: string | null;
      hazardousMaterial?: string | null;
      nationalMotorFreightClassificationNumber?: string | null;
      lessThanOneTruckload?: string | null;
      nmfcSubItem?: string | null;
      uniformFreightClassificationNumber?: string | null;
      railVarianceCode?: string | null;
      lessThanOneCarload?: string | null;
      waterCommodityCode?: string | null;
      typeOfCargoCode?: string | null;
      specialHandlingCode?: string | null;
      airCommoditySpecialHandlingCode?: string | null;
      airDimensionCode?: string | null;
      integrityCode?: string | null;
    } | null;
    PackagingInformation?: {
      __typename: "PackagingInformation";
      source?: string | null;
      status?: string | null;
      priSecICC?: string | null;
      containerNSN?: string | null;
      categoryCode?: string | null;
      lvlAPkgReq?: string | null;
      unitPackSize?: string | null;
      presMaterial?: string | null;
      lvlBPkgReq?: string | null;
      unitPackWeight?: string | null;
      presMethod?: string | null;
      lvlCPkgReq?: string | null;
      unitPackCube?: string | null;
      wrappingMat?: string | null;
      optProcInd?: string | null;
      unpkgItemDims?: string | null;
      specMarking?: string | null;
      suppInst?: string | null;
      containerFSC?: string | null;
      spiNumber?: string | null;
      spiRevision?: string | null;
      unpkgWeight?: string | null;
      spiDate?: string | null;
      pkgDesignActivity?: string | null;
      interContainerQty?: string | null;
      interContainerCode?: string | null;
      cleanDryProcedure?: string | null;
      unitContainer?: string | null;
      itemTypeStorage?: string | null;
      unitContainerLevel?: string | null;
      cushDunMaterial?: string | null;
      cushDunThickness?: string | null;
    } | null;
    ContractHistories?: {
      __typename: "ModelContractHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateContractHistorySubscriptionVariables = {
  filter?: ModelSubscriptionContractHistoryFilterInput | null;
};

export type OnCreateContractHistorySubscription = {
  onCreateContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateContractHistorySubscriptionVariables = {
  filter?: ModelSubscriptionContractHistoryFilterInput | null;
};

export type OnUpdateContractHistorySubscription = {
  onUpdateContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteContractHistorySubscriptionVariables = {
  filter?: ModelSubscriptionContractHistoryFilterInput | null;
};

export type OnDeleteContractHistorySubscription = {
  onDeleteContractHistory?: {
    __typename: "ContractHistory";
    contractNumber: string;
    nsn: string;
    NSNDetail?: {
      __typename: "NSNDetail";
      nsn: string;
      niin?: string | null;
      itemName?: string | null;
      inc?: string | null;
      fsc?: string | null;
      assignmentDate?: string | null;
      crit?: string | null;
      iig?: string | null;
      isc?: string | null;
      dateStandardized?: string | null;
      hmic?: string | null;
      dodic?: string | null;
      nsc?: string | null;
      cancellationDate?: string | null;
      pmic?: string | null;
      fiig?: string | null;
      esd?: string | null;
      scheduleB?: string | null;
      demil?: string | null;
      demilint?: string | null;
      tiic?: string | null;
      originator?: string | null;
      adpec?: string | null;
      rpdmrc?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    niin?: string | null;
    securityClassification?: string | null;
    fsc?: string | null;
    unit?: string | null;
    cage?: string | null;
    orderQuantity?: number | null;
    awardDate?: string | null;
    netPrice?: number | null;
    poNum?: string | null;
    poItemNo?: string | null;
    itemName?: string | null;
    partNumber?: string | null;
    standardUnitPrice?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateRfqItemsSubscriptionVariables = {
  filter?: ModelSubscriptionRfqItemsFilterInput | null;
};

export type OnCreateRfqItemsSubscription = {
  onCreateRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateRfqItemsSubscriptionVariables = {
  filter?: ModelSubscriptionRfqItemsFilterInput | null;
};

export type OnUpdateRfqItemsSubscription = {
  onUpdateRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteRfqItemsSubscriptionVariables = {
  filter?: ModelSubscriptionRfqItemsFilterInput | null;
};

export type OnDeleteRfqItemsSubscription = {
  onDeleteRfqItems?: {
    __typename: "RfqItems";
    id: string;
    rfqId: string;
    itemId: string;
    rfq: {
      __typename: "Rfq";
      id: string;
      rfqNumber?: string | null;
      dateSent?: string | null;
      custRefNum?: string | null;
      companyName?: string | null;
      contact?: string | null;
      phone?: string | null;
      email?: string | null;
      shippingTerms?: string | null;
      shippingMethod?: string | null;
      leadTime?: number | null;
      paymentTerms?: string | null;
      dueDate?: string | null;
      quantityRequested?: Array<number | null> | null;
      quantityQuoted?: Array<number | null> | null;
      uom?: string | null;
      urgency?: string | null;
      discount?: number | null;
      lineTotal?: number | null;
      subtotal?: number | null;
      salesTax?: number | null;
      total?: number | null;
      internalComments?: string | null;
      emailComments?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country?: string | null;
      receivingCompanyID: string;
      sendingCompanyID: string;
      status?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companySentRfqsId?: string | null;
      companyReceivedRfqsId?: string | null;
    };
    item: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCompanyShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyShippingAddressFilterInput | null;
};

export type OnCreateCompanyShippingAddressSubscription = {
  onCreateCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCompanyShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyShippingAddressFilterInput | null;
};

export type OnUpdateCompanyShippingAddressSubscription = {
  onUpdateCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCompanyShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyShippingAddressFilterInput | null;
};

export type OnDeleteCompanyShippingAddressSubscription = {
  onDeleteCompanyShippingAddress?: {
    __typename: "CompanyShippingAddress";
    id: string;
    shippingAddressId: string;
    companyId: string;
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCompanyBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyBillingAddressFilterInput | null;
};

export type OnCreateCompanyBillingAddressSubscription = {
  onCreateCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCompanyBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyBillingAddressFilterInput | null;
};

export type OnUpdateCompanyBillingAddressSubscription = {
  onUpdateCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCompanyBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyBillingAddressFilterInput | null;
};

export type OnDeleteCompanyBillingAddressSubscription = {
  onDeleteCompanyBillingAddress?: {
    __typename: "CompanyBillingAddress";
    id: string;
    billingAddressId: string;
    companyId: string;
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserDetailsSubscription = {
  onCreateUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserDetailsSubscription = {
  onUpdateUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserDetailsSubscription = {
  onDeleteUserDetails?: {
    __typename: "UserDetails";
    userID: string;
    firstName?: string | null;
    lastName?: string | null;
    roles?: Array<string | null> | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    companyID?: string | null;
    BillingAddresses?: {
      __typename: "ModelUserDetailsBillingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    ShippingAddresses?: {
      __typename: "ModelUserDetailsShippingAddressConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    isCompanyOwner?: boolean | null;
    ItemViewHistories?: {
      __typename: "ModelItemViewHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    MessageBoards?: {
      __typename: "ModelMessageBoardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateItemViewHistorySubscriptionVariables = {
  filter?: ModelSubscriptionItemViewHistoryFilterInput | null;
  owner?: string | null;
};

export type OnCreateItemViewHistorySubscription = {
  onCreateItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateItemViewHistorySubscriptionVariables = {
  filter?: ModelSubscriptionItemViewHistoryFilterInput | null;
  owner?: string | null;
};

export type OnUpdateItemViewHistorySubscription = {
  onUpdateItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteItemViewHistorySubscriptionVariables = {
  filter?: ModelSubscriptionItemViewHistoryFilterInput | null;
  owner?: string | null;
};

export type OnDeleteItemViewHistorySubscription = {
  onDeleteItemViewHistory?: {
    __typename: "ItemViewHistory";
    id: string;
    itemViewDate: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    itemID: string;
    Item?: {
      __typename: "Item";
      id: string;
      nsn?: string | null;
      partNumber?: string | null;
      altPartNumber?: string | null;
      description?: string | null;
      quantity?: number | null;
      condition?: string | null;
      control?: string | null;
      price?: number | null;
      demilitarizationCode?: string | null;
      scheduleB?: string | null;
      eccn?: string | null;
      isExportControlled?: boolean | null;
      usml?: boolean | null;
      companyID: string;
      countryID?: string | null;
      imageUrls?: Array<string | null> | null;
      viewCount?: number | null;
      unitOfMeasure?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateMessageBoardSubscriptionVariables = {
  filter?: ModelSubscriptionMessageBoardFilterInput | null;
  owner?: string | null;
};

export type OnCreateMessageBoardSubscription = {
  onCreateMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateMessageBoardSubscriptionVariables = {
  filter?: ModelSubscriptionMessageBoardFilterInput | null;
  owner?: string | null;
};

export type OnUpdateMessageBoardSubscription = {
  onUpdateMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteMessageBoardSubscriptionVariables = {
  filter?: ModelSubscriptionMessageBoardFilterInput | null;
  owner?: string | null;
};

export type OnDeleteMessageBoardSubscription = {
  onDeleteMessageBoard?: {
    __typename: "MessageBoard";
    id: string;
    name: string;
    description?: string | null;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    Messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessageBoardsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
  owner?: string | null;
};

export type OnCreateMessageSubscription = {
  onCreateMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
  owner?: string | null;
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
  owner?: string | null;
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?: {
    __typename: "Message";
    id: string;
    content: string;
    timestamp: string;
    userID: string;
    User?: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    companyID: string;
    Company?: {
      __typename: "Company";
      id: string;
      companyName?: string | null;
      phone?: string | null;
      contactEmail?: string | null;
      countryID?: string | null;
      profilePictureUrl?: string | null;
      fax?: string | null;
      cageCode?: string | null;
      qualityCertifications?: Array<string | null> | null;
      companyDescription?: string | null;
      addressId?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyCompanyOwnerUserID?: string | null;
    } | null;
    messageBoardID: string;
    MessageBoard?: {
      __typename: "MessageBoard";
      id: string;
      name: string;
      description?: string | null;
      userID: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      companyMessageBoardsId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    companyMessagesId?: string | null;
    messageBoardMessagesId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnCreateUserDetailsBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsBillingAddressFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserDetailsBillingAddressSubscription = {
  onCreateUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserDetailsBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsBillingAddressFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserDetailsBillingAddressSubscription = {
  onUpdateUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserDetailsBillingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsBillingAddressFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserDetailsBillingAddressSubscription = {
  onDeleteUserDetailsBillingAddress?: {
    __typename: "UserDetailsBillingAddress";
    id: string;
    userDetailsUserID: string;
    billingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    billingAddress: {
      __typename: "BillingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      region?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateUserDetailsShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsShippingAddressFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserDetailsShippingAddressSubscription = {
  onCreateUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserDetailsShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsShippingAddressFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserDetailsShippingAddressSubscription = {
  onUpdateUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserDetailsShippingAddressSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsShippingAddressFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserDetailsShippingAddressSubscription = {
  onDeleteUserDetailsShippingAddress?: {
    __typename: "UserDetailsShippingAddress";
    id: string;
    userDetailsUserID: string;
    shippingAddressId: string;
    userDetails: {
      __typename: "UserDetails";
      userID: string;
      firstName?: string | null;
      lastName?: string | null;
      roles?: Array<string | null> | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      companyID?: string | null;
      isCompanyOwner?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    shippingAddress: {
      __typename: "ShippingAddress";
      id: string;
      unitNumber?: string | null;
      streetNumber?: string | null;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      regi?: string | null;
      postalCode?: string | null;
      isDefault?: boolean | null;
      countryID: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};
