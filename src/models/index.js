// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rfq, Item, Country, BillingAddress, Company, ItemMRO, UserDetails, ShippingAddress, ItemViewHistory, Message, MessageBoard, Notification, CompanyItemsImport, CustomerRfqEmail, RfqItems, CompanyBillingAddress, UserDetailsBillingAddress, CompanyShippingAddress, UserDetailsShippingAddress } = initSchema(schema);

export {
  Rfq,
  Item,
  Country,
  BillingAddress,
  Company,
  ItemMRO,
  UserDetails,
  ShippingAddress,
  ItemViewHistory,
  Message,
  MessageBoard,
  Notification,
  CompanyItemsImport,
  CustomerRfqEmail,
  RfqItems,
  CompanyBillingAddress,
  UserDetailsBillingAddress,
  CompanyShippingAddress,
  UserDetailsShippingAddress
};