// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rfq, UserDetails, Country, ShippingAddress, BillingAddress, Company, Notification, ItemMRO, Item, ItemViewHistory, MessageBoard, Message, CompanyItemsImport, CustomerRfqEmail, NSNDetail, PartInformation, ContractHistory, RfqItems, UserDetailsBillingAddress, UserDetailsShippingAddress, CompanyShippingAddress, CompanyBillingAddress, AdditionalPartInformation, ManagementInformation, PhraseInformation, ReplacedReplacementNIINInformation, ObsoleteNIINInformation, TechnicalCharacteristicsInformation, MOERulesInformation, ReplacementAndObsoleteInformation, FreightInformation, PackagingInformation } = initSchema(schema);

export {
  Rfq,
  UserDetails,
  Country,
  ShippingAddress,
  BillingAddress,
  Company,
  Notification,
  ItemMRO,
  Item,
  ItemViewHistory,
  MessageBoard,
  Message,
  CompanyItemsImport,
  CustomerRfqEmail,
  NSNDetail,
  PartInformation,
  ContractHistory,
  RfqItems,
  UserDetailsBillingAddress,
  UserDetailsShippingAddress,
  CompanyShippingAddress,
  CompanyBillingAddress,
  AdditionalPartInformation,
  ManagementInformation,
  PhraseInformation,
  ReplacedReplacementNIINInformation,
  ObsoleteNIINInformation,
  TechnicalCharacteristicsInformation,
  MOERulesInformation,
  ReplacementAndObsoleteInformation,
  FreightInformation,
  PackagingInformation
};