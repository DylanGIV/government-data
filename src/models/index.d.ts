import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerAdditionalPartInformation = {
  readonly partNumber?: string | null;
  readonly cage?: string | null;
  readonly company?: string | null;
  readonly source?: string | null;
  readonly rncc?: string | null;
  readonly rnvc?: string | null;
  readonly dac?: string | null;
  readonly rnaac?: string | null;
  readonly rnfc?: string | null;
  readonly rnsc?: string | null;
  readonly rnjc?: string | null;
  readonly sadc?: string | null;
  readonly hcc?: string | null;
  readonly msds?: string | null;
}

type LazyAdditionalPartInformation = {
  readonly partNumber?: string | null;
  readonly cage?: string | null;
  readonly company?: string | null;
  readonly source?: string | null;
  readonly rncc?: string | null;
  readonly rnvc?: string | null;
  readonly dac?: string | null;
  readonly rnaac?: string | null;
  readonly rnfc?: string | null;
  readonly rnsc?: string | null;
  readonly rnjc?: string | null;
  readonly sadc?: string | null;
  readonly hcc?: string | null;
  readonly msds?: string | null;
}

export declare type AdditionalPartInformation = LazyLoading extends LazyLoadingDisabled ? EagerAdditionalPartInformation : LazyAdditionalPartInformation

export declare const AdditionalPartInformation: (new (init: ModelInit<AdditionalPartInformation>) => AdditionalPartInformation)

type EagerManagementInformation = {
  readonly moec?: string | null;
  readonly sos?: string | null;
  readonly aac?: string | null;
  readonly rc?: string | null;
  readonly slc?: string | null;
  readonly ciic?: string | null;
  readonly upq?: string | null;
  readonly usc?: string | null;
  readonly unitPrice?: string | null;
  readonly ui?: string | null;
  readonly uicf?: string | null;
  readonly mcd?: string | null;
  readonly actionDate?: string | null;
  readonly ch?: string | null;
}

type LazyManagementInformation = {
  readonly moec?: string | null;
  readonly sos?: string | null;
  readonly aac?: string | null;
  readonly rc?: string | null;
  readonly slc?: string | null;
  readonly ciic?: string | null;
  readonly upq?: string | null;
  readonly usc?: string | null;
  readonly unitPrice?: string | null;
  readonly ui?: string | null;
  readonly uicf?: string | null;
  readonly mcd?: string | null;
  readonly actionDate?: string | null;
  readonly ch?: string | null;
}

export declare type ManagementInformation = LazyLoading extends LazyLoadingDisabled ? EagerManagementInformation : LazyManagementInformation

export declare const ManagementInformation: (new (init: ModelInit<ManagementInformation>) => ManagementInformation)

type EagerPhraseInformation = {
  readonly moec?: string | null;
  readonly pc?: string | null;
  readonly phrase?: string | null;
  readonly qpa?: string | null;
  readonly uom?: string | null;
  readonly oou?: string | null;
  readonly jtc?: string | null;
}

type LazyPhraseInformation = {
  readonly moec?: string | null;
  readonly pc?: string | null;
  readonly phrase?: string | null;
  readonly qpa?: string | null;
  readonly uom?: string | null;
  readonly oou?: string | null;
  readonly jtc?: string | null;
}

export declare type PhraseInformation = LazyLoading extends LazyLoadingDisabled ? EagerPhraseInformation : LazyPhraseInformation

export declare const PhraseInformation: (new (init: ModelInit<PhraseInformation>) => PhraseInformation)

type EagerReplacedReplacementNIINInformation = {
  readonly fsc?: string | null;
  readonly niin?: string | null;
  readonly isc?: string | null;
  readonly originator?: string | null;
  readonly nsc?: string | null;
  readonly stdDate?: string | null;
  readonly status?: string | null;
}

type LazyReplacedReplacementNIINInformation = {
  readonly fsc?: string | null;
  readonly niin?: string | null;
  readonly isc?: string | null;
  readonly originator?: string | null;
  readonly nsc?: string | null;
  readonly stdDate?: string | null;
  readonly status?: string | null;
}

export declare type ReplacedReplacementNIINInformation = LazyLoading extends LazyLoadingDisabled ? EagerReplacedReplacementNIINInformation : LazyReplacedReplacementNIINInformation

export declare const ReplacedReplacementNIINInformation: (new (init: ModelInit<ReplacedReplacementNIINInformation>) => ReplacedReplacementNIINInformation)

type EagerObsoleteNIINInformation = {
  readonly fsc?: string | null;
  readonly niin?: string | null;
  readonly demil?: string | null;
  readonly nsc?: string | null;
  readonly cancelled?: string | null;
}

type LazyObsoleteNIINInformation = {
  readonly fsc?: string | null;
  readonly niin?: string | null;
  readonly demil?: string | null;
  readonly nsc?: string | null;
  readonly cancelled?: string | null;
}

export declare type ObsoleteNIINInformation = LazyLoading extends LazyLoadingDisabled ? EagerObsoleteNIINInformation : LazyObsoleteNIINInformation

export declare const ObsoleteNIINInformation: (new (init: ModelInit<ObsoleteNIINInformation>) => ObsoleteNIINInformation)

type EagerTechnicalCharacteristicsInformation = {
  readonly mrc?: string | null;
  readonly requirementStatement?: string | null;
  readonly replyStatement?: string | null;
}

type LazyTechnicalCharacteristicsInformation = {
  readonly mrc?: string | null;
  readonly requirementStatement?: string | null;
  readonly replyStatement?: string | null;
}

export declare type TechnicalCharacteristicsInformation = LazyLoading extends LazyLoadingDisabled ? EagerTechnicalCharacteristicsInformation : LazyTechnicalCharacteristicsInformation

export declare const TechnicalCharacteristicsInformation: (new (init: ModelInit<TechnicalCharacteristicsInformation>) => TechnicalCharacteristicsInformation)

type EagerMOERulesInformation = {
  readonly moeRule?: string | null;
  readonly formerMOER?: string | null;
  readonly effective?: string | null;
  readonly amc?: string | null;
  readonly amsc?: string | null;
  readonly imc?: string | null;
  readonly imca?: string | null;
  readonly collaborators?: string | null;
  readonly receivers?: string | null;
}

type LazyMOERulesInformation = {
  readonly moeRule?: string | null;
  readonly formerMOER?: string | null;
  readonly effective?: string | null;
  readonly amc?: string | null;
  readonly amsc?: string | null;
  readonly imc?: string | null;
  readonly imca?: string | null;
  readonly collaborators?: string | null;
  readonly receivers?: string | null;
}

export declare type MOERulesInformation = LazyLoading extends LazyLoadingDisabled ? EagerMOERulesInformation : LazyMOERulesInformation

export declare const MOERulesInformation: (new (init: ModelInit<MOERulesInformation>) => MOERulesInformation)

type EagerReplacementAndObsoleteInformation = {
  readonly ReplacedReplacementNIINInformation?: (ReplacedReplacementNIINInformation | null)[] | null;
  readonly ObsoleteNIINInformation?: (ObsoleteNIINInformation | null)[] | null;
}

type LazyReplacementAndObsoleteInformation = {
  readonly ReplacedReplacementNIINInformation?: (ReplacedReplacementNIINInformation | null)[] | null;
  readonly ObsoleteNIINInformation?: (ObsoleteNIINInformation | null)[] | null;
}

export declare type ReplacementAndObsoleteInformation = LazyLoading extends LazyLoadingDisabled ? EagerReplacementAndObsoleteInformation : LazyReplacementAndObsoleteInformation

export declare const ReplacementAndObsoleteInformation: (new (init: ModelInit<ReplacementAndObsoleteInformation>) => ReplacementAndObsoleteInformation)

type EagerFreightInformation = {
  readonly description?: string | null;
  readonly originatingActivity?: string | null;
  readonly hazardousMaterial?: string | null;
  readonly nationalMotorFreightClassificationNumber?: string | null;
  readonly lessThanOneTruckload?: string | null;
  readonly nmfcSubItem?: string | null;
  readonly uniformFreightClassificationNumber?: string | null;
  readonly railVarianceCode?: string | null;
  readonly lessThanOneCarload?: string | null;
  readonly waterCommodityCode?: string | null;
  readonly typeOfCargoCode?: string | null;
  readonly specialHandlingCode?: string | null;
  readonly airCommoditySpecialHandlingCode?: string | null;
  readonly airDimensionCode?: string | null;
  readonly integrityCode?: string | null;
}

type LazyFreightInformation = {
  readonly description?: string | null;
  readonly originatingActivity?: string | null;
  readonly hazardousMaterial?: string | null;
  readonly nationalMotorFreightClassificationNumber?: string | null;
  readonly lessThanOneTruckload?: string | null;
  readonly nmfcSubItem?: string | null;
  readonly uniformFreightClassificationNumber?: string | null;
  readonly railVarianceCode?: string | null;
  readonly lessThanOneCarload?: string | null;
  readonly waterCommodityCode?: string | null;
  readonly typeOfCargoCode?: string | null;
  readonly specialHandlingCode?: string | null;
  readonly airCommoditySpecialHandlingCode?: string | null;
  readonly airDimensionCode?: string | null;
  readonly integrityCode?: string | null;
}

export declare type FreightInformation = LazyLoading extends LazyLoadingDisabled ? EagerFreightInformation : LazyFreightInformation

export declare const FreightInformation: (new (init: ModelInit<FreightInformation>) => FreightInformation)

type EagerPackagingInformation = {
  readonly source?: string | null;
  readonly status?: string | null;
  readonly priSecICC?: string | null;
  readonly containerNSN?: string | null;
  readonly categoryCode?: string | null;
  readonly lvlAPkgReq?: string | null;
  readonly unitPackSize?: string | null;
  readonly presMaterial?: string | null;
  readonly lvlBPkgReq?: string | null;
  readonly unitPackWeight?: string | null;
  readonly presMethod?: string | null;
  readonly lvlCPkgReq?: string | null;
  readonly unitPackCube?: string | null;
  readonly wrappingMat?: string | null;
  readonly optProcInd?: string | null;
  readonly unpkgItemDims?: string | null;
  readonly specMarking?: string | null;
  readonly suppInst?: string | null;
  readonly containerFSC?: string | null;
  readonly spiNumber?: string | null;
  readonly spiRevision?: string | null;
  readonly unpkgWeight?: string | null;
  readonly spiDate?: string | null;
  readonly pkgDesignActivity?: string | null;
  readonly interContainerQty?: string | null;
  readonly interContainerCode?: string | null;
  readonly cleanDryProcedure?: string | null;
  readonly unitContainer?: string | null;
  readonly itemTypeStorage?: string | null;
  readonly unitContainerLevel?: string | null;
  readonly cushDunMaterial?: string | null;
  readonly cushDunThickness?: string | null;
}

type LazyPackagingInformation = {
  readonly source?: string | null;
  readonly status?: string | null;
  readonly priSecICC?: string | null;
  readonly containerNSN?: string | null;
  readonly categoryCode?: string | null;
  readonly lvlAPkgReq?: string | null;
  readonly unitPackSize?: string | null;
  readonly presMaterial?: string | null;
  readonly lvlBPkgReq?: string | null;
  readonly unitPackWeight?: string | null;
  readonly presMethod?: string | null;
  readonly lvlCPkgReq?: string | null;
  readonly unitPackCube?: string | null;
  readonly wrappingMat?: string | null;
  readonly optProcInd?: string | null;
  readonly unpkgItemDims?: string | null;
  readonly specMarking?: string | null;
  readonly suppInst?: string | null;
  readonly containerFSC?: string | null;
  readonly spiNumber?: string | null;
  readonly spiRevision?: string | null;
  readonly unpkgWeight?: string | null;
  readonly spiDate?: string | null;
  readonly pkgDesignActivity?: string | null;
  readonly interContainerQty?: string | null;
  readonly interContainerCode?: string | null;
  readonly cleanDryProcedure?: string | null;
  readonly unitContainer?: string | null;
  readonly itemTypeStorage?: string | null;
  readonly unitContainerLevel?: string | null;
  readonly cushDunMaterial?: string | null;
  readonly cushDunThickness?: string | null;
}

export declare type PackagingInformation = LazyLoading extends LazyLoadingDisabled ? EagerPackagingInformation : LazyPackagingInformation

export declare const PackagingInformation: (new (init: ModelInit<PackagingInformation>) => PackagingInformation)

type EagerRfq = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rfq, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqNumber?: string | null;
  readonly dateSent?: string | null;
  readonly custRefNum?: string | null;
  readonly companyName?: string | null;
  readonly contact?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly shippingTerms?: string | null;
  readonly shippingMethod?: string | null;
  readonly leadTime?: number | null;
  readonly paymentTerms?: string | null;
  readonly dueDate?: string | null;
  readonly quantityRequested?: (number | null)[] | null;
  readonly quantityQuoted?: (number | null)[] | null;
  readonly uom?: string | null;
  readonly urgency?: string | null;
  readonly discount?: number | null;
  readonly lineTotal?: number | null;
  readonly subtotal?: number | null;
  readonly salesTax?: number | null;
  readonly total?: number | null;
  readonly internalComments?: string | null;
  readonly emailComments?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
  readonly Items?: (RfqItems | null)[] | null;
  readonly receivingCompanyID: string;
  readonly sendingCompanyID: string;
  readonly ReceivingCompany?: Company | null;
  readonly SendingCompany?: Company | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companySentRfqsId?: string | null;
  readonly companyReceivedRfqsId?: string | null;
}

type LazyRfq = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rfq, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqNumber?: string | null;
  readonly dateSent?: string | null;
  readonly custRefNum?: string | null;
  readonly companyName?: string | null;
  readonly contact?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly shippingTerms?: string | null;
  readonly shippingMethod?: string | null;
  readonly leadTime?: number | null;
  readonly paymentTerms?: string | null;
  readonly dueDate?: string | null;
  readonly quantityRequested?: (number | null)[] | null;
  readonly quantityQuoted?: (number | null)[] | null;
  readonly uom?: string | null;
  readonly urgency?: string | null;
  readonly discount?: number | null;
  readonly lineTotal?: number | null;
  readonly subtotal?: number | null;
  readonly salesTax?: number | null;
  readonly total?: number | null;
  readonly internalComments?: string | null;
  readonly emailComments?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
  readonly Items: AsyncCollection<RfqItems>;
  readonly receivingCompanyID: string;
  readonly sendingCompanyID: string;
  readonly ReceivingCompany: AsyncItem<Company | undefined>;
  readonly SendingCompany: AsyncItem<Company | undefined>;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companySentRfqsId?: string | null;
  readonly companyReceivedRfqsId?: string | null;
}

export declare type Rfq = LazyLoading extends LazyLoadingDisabled ? EagerRfq : LazyRfq

export declare const Rfq: (new (init: ModelInit<Rfq>) => Rfq) & {
  copyOf(source: Rfq, mutator: (draft: MutableModel<Rfq>) => MutableModel<Rfq> | void): Rfq;
}

type EagerUserDetails = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserDetails, 'userID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly roles?: (string | null)[] | null;
  readonly contactEmail?: string | null;
  readonly contactPhone?: string | null;
  readonly companyID?: string | null;
  readonly BillingAddresses?: (UserDetailsBillingAddress | null)[] | null;
  readonly ShippingAddresses?: (UserDetailsShippingAddress | null)[] | null;
  readonly isCompanyOwner?: boolean | null;
  readonly ItemViewHistories?: (ItemViewHistory | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly MessageBoards?: (MessageBoard | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetails = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserDetails, 'userID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly roles?: (string | null)[] | null;
  readonly contactEmail?: string | null;
  readonly contactPhone?: string | null;
  readonly companyID?: string | null;
  readonly BillingAddresses: AsyncCollection<UserDetailsBillingAddress>;
  readonly ShippingAddresses: AsyncCollection<UserDetailsShippingAddress>;
  readonly isCompanyOwner?: boolean | null;
  readonly ItemViewHistories: AsyncCollection<ItemViewHistory>;
  readonly Messages: AsyncCollection<Message>;
  readonly MessageBoards: AsyncCollection<MessageBoard>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetails = LazyLoading extends LazyLoadingDisabled ? EagerUserDetails : LazyUserDetails

export declare const UserDetails: (new (init: ModelInit<UserDetails>) => UserDetails) & {
  copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails>) => MutableModel<UserDetails> | void): UserDetails;
}

type EagerCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly countryName?: string | null;
  readonly code?: string | null;
  readonly BillingAddresses?: (BillingAddress | null)[] | null;
  readonly ShippingAddresses?: (ShippingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly countryName?: string | null;
  readonly code?: string | null;
  readonly BillingAddresses: AsyncCollection<BillingAddress>;
  readonly ShippingAddresses: AsyncCollection<ShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Country = LazyLoading extends LazyLoadingDisabled ? EagerCountry : LazyCountry

export declare const Country: (new (init: ModelInit<Country>) => Country) & {
  copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
}

type EagerShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly regi?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly countryID: string;
  readonly country?: Country | null;
  readonly UserShippingAddresses?: (UserDetailsShippingAddress | null)[] | null;
  readonly CompanyShippingAddresses?: (CompanyShippingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly regi?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly countryID: string;
  readonly country: AsyncItem<Country | undefined>;
  readonly UserShippingAddresses: AsyncCollection<UserDetailsShippingAddress>;
  readonly CompanyShippingAddresses: AsyncCollection<CompanyShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddress : LazyShippingAddress

export declare const ShippingAddress: (new (init: ModelInit<ShippingAddress>) => ShippingAddress) & {
  copyOf(source: ShippingAddress, mutator: (draft: MutableModel<ShippingAddress>) => MutableModel<ShippingAddress> | void): ShippingAddress;
}

type EagerBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly CompanyBillingAddresses?: (CompanyBillingAddress | null)[] | null;
  readonly countryID: string;
  readonly country?: Country | null;
  readonly UserBillingAddresses?: (UserDetailsBillingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly unitNumber?: string | null;
  readonly streetNumber?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly isDefault?: boolean | null;
  readonly CompanyBillingAddresses: AsyncCollection<CompanyBillingAddress>;
  readonly countryID: string;
  readonly country: AsyncItem<Country | undefined>;
  readonly UserBillingAddresses: AsyncCollection<UserDetailsBillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddress : LazyBillingAddress

export declare const BillingAddress: (new (init: ModelInit<BillingAddress>) => BillingAddress) & {
  copyOf(source: BillingAddress, mutator: (draft: MutableModel<BillingAddress>) => MutableModel<BillingAddress> | void): BillingAddress;
}

type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly phone?: string | null;
  readonly contactEmail?: string | null;
  readonly Items?: (Item | null)[] | null;
  readonly ItemMROS?: (ItemMRO | null)[] | null;
  readonly BillingAddresses?: (CompanyBillingAddress | null)[] | null;
  readonly CompanyMembers?: (UserDetails | null)[] | null;
  readonly CompanyOwner?: UserDetails | null;
  readonly ShippingAddresses?: (CompanyShippingAddress | null)[] | null;
  readonly countryID?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly fax?: string | null;
  readonly cageCode?: string | null;
  readonly qualityCertifications?: (string | null)[] | null;
  readonly companyDescription?: string | null;
  readonly sentRfqs?: (Rfq | null)[] | null;
  readonly receivedRfqs?: (Rfq | null)[] | null;
  readonly country?: Country | null;
  readonly addressId?: string | null;
  readonly address?: ShippingAddress | null;
  readonly MessageBoards?: (MessageBoard | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyCompanyOwnerUserID?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly phone?: string | null;
  readonly contactEmail?: string | null;
  readonly Items: AsyncCollection<Item>;
  readonly ItemMROS: AsyncCollection<ItemMRO>;
  readonly BillingAddresses: AsyncCollection<CompanyBillingAddress>;
  readonly CompanyMembers: AsyncCollection<UserDetails>;
  readonly CompanyOwner: AsyncItem<UserDetails | undefined>;
  readonly ShippingAddresses: AsyncCollection<CompanyShippingAddress>;
  readonly countryID?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly fax?: string | null;
  readonly cageCode?: string | null;
  readonly qualityCertifications?: (string | null)[] | null;
  readonly companyDescription?: string | null;
  readonly sentRfqs: AsyncCollection<Rfq>;
  readonly receivedRfqs: AsyncCollection<Rfq>;
  readonly country: AsyncItem<Country | undefined>;
  readonly addressId?: string | null;
  readonly address: AsyncItem<ShippingAddress | undefined>;
  readonly MessageBoards: AsyncCollection<MessageBoard>;
  readonly Messages: AsyncCollection<Message>;
  readonly Notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyCompanyOwnerUserID?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly type: string;
  readonly companyID: string;
  readonly createdAt: string;
  readonly Company?: Company | null;
  readonly updatedAt?: string | null;
  readonly companyNotificationsId?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly type: string;
  readonly companyID: string;
  readonly createdAt: string;
  readonly Company: AsyncItem<Company | undefined>;
  readonly updatedAt?: string | null;
  readonly companyNotificationsId?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly certification?: string | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemMRO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemMRO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly certification?: string | null;
  readonly companyID: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemMRO = LazyLoading extends LazyLoadingDisabled ? EagerItemMRO : LazyItemMRO

export declare const ItemMRO: (new (init: ModelInit<ItemMRO>) => ItemMRO) & {
  copyOf(source: ItemMRO, mutator: (draft: MutableModel<ItemMRO>) => MutableModel<ItemMRO> | void): ItemMRO;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly demilitarizationCode?: string | null;
  readonly scheduleB?: string | null;
  readonly eccn?: string | null;
  readonly isExportControlled?: boolean | null;
  readonly usml?: boolean | null;
  readonly companyID: string;
  readonly countryID?: string | null;
  readonly Country?: Country | null;
  readonly imageUrls?: (string | null)[] | null;
  readonly Rfqs?: (RfqItems | null)[] | null;
  readonly Company?: Company | null;
  readonly ItemViewHistories?: (ItemViewHistory | null)[] | null;
  readonly viewCount?: number | null;
  readonly unitOfMeasure?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn?: string | null;
  readonly partNumber?: string | null;
  readonly altPartNumber?: string | null;
  readonly description?: string | null;
  readonly quantity?: number | null;
  readonly condition?: string | null;
  readonly control?: string | null;
  readonly price?: number | null;
  readonly demilitarizationCode?: string | null;
  readonly scheduleB?: string | null;
  readonly eccn?: string | null;
  readonly isExportControlled?: boolean | null;
  readonly usml?: boolean | null;
  readonly companyID: string;
  readonly countryID?: string | null;
  readonly Country: AsyncItem<Country | undefined>;
  readonly imageUrls?: (string | null)[] | null;
  readonly Rfqs: AsyncCollection<RfqItems>;
  readonly Company: AsyncItem<Company | undefined>;
  readonly ItemViewHistories: AsyncCollection<ItemViewHistory>;
  readonly viewCount?: number | null;
  readonly unitOfMeasure?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerItemViewHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemViewHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemViewDate: string;
  readonly userID: string;
  readonly User?: UserDetails | null;
  readonly itemID: string;
  readonly Item?: Item | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemViewHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemViewHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemViewDate: string;
  readonly userID: string;
  readonly User: AsyncItem<UserDetails | undefined>;
  readonly itemID: string;
  readonly Item: AsyncItem<Item | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemViewHistory = LazyLoading extends LazyLoadingDisabled ? EagerItemViewHistory : LazyItemViewHistory

export declare const ItemViewHistory: (new (init: ModelInit<ItemViewHistory>) => ItemViewHistory) & {
  copyOf(source: ItemViewHistory, mutator: (draft: MutableModel<ItemViewHistory>) => MutableModel<ItemViewHistory> | void): ItemViewHistory;
}

type EagerMessageBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageBoard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly userID: string;
  readonly User?: UserDetails | null;
  readonly companyID: string;
  readonly Company?: Company | null;
  readonly Messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyMessageBoardsId?: string | null;
}

type LazyMessageBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageBoard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly userID: string;
  readonly User: AsyncItem<UserDetails | undefined>;
  readonly companyID: string;
  readonly Company: AsyncItem<Company | undefined>;
  readonly Messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyMessageBoardsId?: string | null;
}

export declare type MessageBoard = LazyLoading extends LazyLoadingDisabled ? EagerMessageBoard : LazyMessageBoard

export declare const MessageBoard: (new (init: ModelInit<MessageBoard>) => MessageBoard) & {
  copyOf(source: MessageBoard, mutator: (draft: MutableModel<MessageBoard>) => MutableModel<MessageBoard> | void): MessageBoard;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly userID: string;
  readonly User?: UserDetails | null;
  readonly companyID: string;
  readonly Company?: Company | null;
  readonly messageBoardID: string;
  readonly MessageBoard?: MessageBoard | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyMessagesId?: string | null;
  readonly messageBoardMessagesId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly userID: string;
  readonly User: AsyncItem<UserDetails | undefined>;
  readonly companyID: string;
  readonly Company: AsyncItem<Company | undefined>;
  readonly messageBoardID: string;
  readonly MessageBoard: AsyncItem<MessageBoard | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyMessagesId?: string | null;
  readonly messageBoardMessagesId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerCompanyItemsImport = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CompanyItemsImport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyID: string;
  readonly importName?: string | null;
  readonly importStatus?: string | null;
  readonly importProgress?: number | null;
  readonly importFileKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyItemsImport = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CompanyItemsImport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyID: string;
  readonly importName?: string | null;
  readonly importStatus?: string | null;
  readonly importProgress?: number | null;
  readonly importFileKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyItemsImport = LazyLoading extends LazyLoadingDisabled ? EagerCompanyItemsImport : LazyCompanyItemsImport

export declare const CompanyItemsImport: (new (init: ModelInit<CompanyItemsImport>) => CompanyItemsImport) & {
  copyOf(source: CompanyItemsImport, mutator: (draft: MutableModel<CompanyItemsImport>) => MutableModel<CompanyItemsImport> | void): CompanyItemsImport;
}

type EagerCustomerRfqEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerRfqEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly dateSent: string;
  readonly htmlBody: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomerRfqEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerRfqEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly dateSent: string;
  readonly htmlBody: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CustomerRfqEmail = LazyLoading extends LazyLoadingDisabled ? EagerCustomerRfqEmail : LazyCustomerRfqEmail

export declare const CustomerRfqEmail: (new (init: ModelInit<CustomerRfqEmail>) => CustomerRfqEmail) & {
  copyOf(source: CustomerRfqEmail, mutator: (draft: MutableModel<CustomerRfqEmail>) => MutableModel<CustomerRfqEmail> | void): CustomerRfqEmail;
}

type EagerNSNDetail = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<NSNDetail, 'nsn'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly nsn: string;
  readonly niin?: string | null;
  readonly itemName?: string | null;
  readonly inc?: string | null;
  readonly fsc?: string | null;
  readonly assignmentDate?: string | null;
  readonly crit?: string | null;
  readonly iig?: string | null;
  readonly isc?: string | null;
  readonly dateStandardized?: string | null;
  readonly hmic?: string | null;
  readonly dodic?: string | null;
  readonly nsc?: string | null;
  readonly cancellationDate?: string | null;
  readonly pmic?: string | null;
  readonly fiig?: string | null;
  readonly esd?: string | null;
  readonly scheduleB?: string | null;
  readonly demil?: string | null;
  readonly demilint?: string | null;
  readonly tiic?: string | null;
  readonly originator?: string | null;
  readonly adpec?: string | null;
  readonly rpdmrc?: string | null;
  readonly PartInformation?: (PartInformation | null)[] | null;
  readonly AdditionalPartInformation?: (AdditionalPartInformation | null)[] | null;
  readonly ManagementInformation?: (ManagementInformation | null)[] | null;
  readonly PhraseInformation?: (PhraseInformation | null)[] | null;
  readonly TechnicalCharacteristicsInformation?: (TechnicalCharacteristicsInformation | null)[] | null;
  readonly MOERulesInformation?: (MOERulesInformation | null)[] | null;
  readonly ReplacementAndObsoleteInformation?: ReplacementAndObsoleteInformation | null;
  readonly FreightInformation?: FreightInformation | null;
  readonly PackagingInformation?: PackagingInformation | null;
  readonly ContractHistories?: (ContractHistory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNSNDetail = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<NSNDetail, 'nsn'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly nsn: string;
  readonly niin?: string | null;
  readonly itemName?: string | null;
  readonly inc?: string | null;
  readonly fsc?: string | null;
  readonly assignmentDate?: string | null;
  readonly crit?: string | null;
  readonly iig?: string | null;
  readonly isc?: string | null;
  readonly dateStandardized?: string | null;
  readonly hmic?: string | null;
  readonly dodic?: string | null;
  readonly nsc?: string | null;
  readonly cancellationDate?: string | null;
  readonly pmic?: string | null;
  readonly fiig?: string | null;
  readonly esd?: string | null;
  readonly scheduleB?: string | null;
  readonly demil?: string | null;
  readonly demilint?: string | null;
  readonly tiic?: string | null;
  readonly originator?: string | null;
  readonly adpec?: string | null;
  readonly rpdmrc?: string | null;
  readonly PartInformation: AsyncCollection<PartInformation>;
  readonly AdditionalPartInformation?: (AdditionalPartInformation | null)[] | null;
  readonly ManagementInformation?: (ManagementInformation | null)[] | null;
  readonly PhraseInformation?: (PhraseInformation | null)[] | null;
  readonly TechnicalCharacteristicsInformation?: (TechnicalCharacteristicsInformation | null)[] | null;
  readonly MOERulesInformation?: (MOERulesInformation | null)[] | null;
  readonly ReplacementAndObsoleteInformation?: ReplacementAndObsoleteInformation | null;
  readonly FreightInformation?: FreightInformation | null;
  readonly PackagingInformation?: PackagingInformation | null;
  readonly ContractHistories: AsyncCollection<ContractHistory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NSNDetail = LazyLoading extends LazyLoadingDisabled ? EagerNSNDetail : LazyNSNDetail

export declare const NSNDetail: (new (init: ModelInit<NSNDetail>) => NSNDetail) & {
  copyOf(source: NSNDetail, mutator: (draft: MutableModel<NSNDetail>) => MutableModel<NSNDetail> | void): NSNDetail;
}

type EagerPartInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PartInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn: string;
  readonly partNumber?: string | null;
  readonly cage?: string | null;
  readonly company?: string | null;
  readonly status?: string | null;
  readonly rncc?: string | null;
  readonly rnvc?: string | null;
  readonly dac?: string | null;
  readonly rnaac?: string | null;
  readonly rnfc?: string | null;
  readonly rnsc?: string | null;
  readonly rnjc?: string | null;
  readonly sadc?: string | null;
  readonly hcc?: string | null;
  readonly msds?: string | null;
  readonly NSNDetail?: NSNDetail | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPartInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PartInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nsn: string;
  readonly partNumber?: string | null;
  readonly cage?: string | null;
  readonly company?: string | null;
  readonly status?: string | null;
  readonly rncc?: string | null;
  readonly rnvc?: string | null;
  readonly dac?: string | null;
  readonly rnaac?: string | null;
  readonly rnfc?: string | null;
  readonly rnsc?: string | null;
  readonly rnjc?: string | null;
  readonly sadc?: string | null;
  readonly hcc?: string | null;
  readonly msds?: string | null;
  readonly NSNDetail: AsyncItem<NSNDetail | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PartInformation = LazyLoading extends LazyLoadingDisabled ? EagerPartInformation : LazyPartInformation

export declare const PartInformation: (new (init: ModelInit<PartInformation>) => PartInformation) & {
  copyOf(source: PartInformation, mutator: (draft: MutableModel<PartInformation>) => MutableModel<PartInformation> | void): PartInformation;
}

type EagerContractHistory = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<ContractHistory, 'contractNumber'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly contractNumber: string;
  readonly nsn: string;
  readonly NSNDetail?: NSNDetail | null;
  readonly niin?: string | null;
  readonly securityClassification?: string | null;
  readonly fsc?: string | null;
  readonly unit?: string | null;
  readonly cage?: string | null;
  readonly orderQuantity?: number | null;
  readonly awardDate?: string | null;
  readonly netPrice?: number | null;
  readonly poNum?: string | null;
  readonly poItemNo?: string | null;
  readonly itemName?: string | null;
  readonly partNumber?: string | null;
  readonly standardUnitPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContractHistory = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<ContractHistory, 'contractNumber'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly contractNumber: string;
  readonly nsn: string;
  readonly NSNDetail: AsyncItem<NSNDetail | undefined>;
  readonly niin?: string | null;
  readonly securityClassification?: string | null;
  readonly fsc?: string | null;
  readonly unit?: string | null;
  readonly cage?: string | null;
  readonly orderQuantity?: number | null;
  readonly awardDate?: string | null;
  readonly netPrice?: number | null;
  readonly poNum?: string | null;
  readonly poItemNo?: string | null;
  readonly itemName?: string | null;
  readonly partNumber?: string | null;
  readonly standardUnitPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContractHistory = LazyLoading extends LazyLoadingDisabled ? EagerContractHistory : LazyContractHistory

export declare const ContractHistory: (new (init: ModelInit<ContractHistory>) => ContractHistory) & {
  copyOf(source: ContractHistory, mutator: (draft: MutableModel<ContractHistory>) => MutableModel<ContractHistory> | void): ContractHistory;
}

type EagerRfqItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RfqItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqId?: string | null;
  readonly itemId?: string | null;
  readonly rfq: Rfq;
  readonly item: Item;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRfqItems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RfqItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rfqId?: string | null;
  readonly itemId?: string | null;
  readonly rfq: AsyncItem<Rfq>;
  readonly item: AsyncItem<Item>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RfqItems = LazyLoading extends LazyLoadingDisabled ? EagerRfqItems : LazyRfqItems

export declare const RfqItems: (new (init: ModelInit<RfqItems>) => RfqItems) & {
  copyOf(source: RfqItems, mutator: (draft: MutableModel<RfqItems>) => MutableModel<RfqItems> | void): RfqItems;
}

type EagerUserDetailsBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsUserID?: string | null;
  readonly billingAddressId?: string | null;
  readonly userDetails: UserDetails;
  readonly billingAddress: BillingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetailsBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsUserID?: string | null;
  readonly billingAddressId?: string | null;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetailsBillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerUserDetailsBillingAddress : LazyUserDetailsBillingAddress

export declare const UserDetailsBillingAddress: (new (init: ModelInit<UserDetailsBillingAddress>) => UserDetailsBillingAddress) & {
  copyOf(source: UserDetailsBillingAddress, mutator: (draft: MutableModel<UserDetailsBillingAddress>) => MutableModel<UserDetailsBillingAddress> | void): UserDetailsBillingAddress;
}

type EagerUserDetailsShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsUserID?: string | null;
  readonly shippingAddressId?: string | null;
  readonly userDetails: UserDetails;
  readonly shippingAddress: ShippingAddress;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetailsShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetailsShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDetailsUserID?: string | null;
  readonly shippingAddressId?: string | null;
  readonly userDetails: AsyncItem<UserDetails>;
  readonly shippingAddress: AsyncItem<ShippingAddress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetailsShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerUserDetailsShippingAddress : LazyUserDetailsShippingAddress

export declare const UserDetailsShippingAddress: (new (init: ModelInit<UserDetailsShippingAddress>) => UserDetailsShippingAddress) & {
  copyOf(source: UserDetailsShippingAddress, mutator: (draft: MutableModel<UserDetailsShippingAddress>) => MutableModel<UserDetailsShippingAddress> | void): UserDetailsShippingAddress;
}

type EagerCompanyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shippingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly shippingAddress: ShippingAddress;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyShippingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyShippingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shippingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly shippingAddress: AsyncItem<ShippingAddress>;
  readonly company: AsyncItem<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerCompanyShippingAddress : LazyCompanyShippingAddress

export declare const CompanyShippingAddress: (new (init: ModelInit<CompanyShippingAddress>) => CompanyShippingAddress) & {
  copyOf(source: CompanyShippingAddress, mutator: (draft: MutableModel<CompanyShippingAddress>) => MutableModel<CompanyShippingAddress> | void): CompanyShippingAddress;
}

type EagerCompanyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly billingAddress: BillingAddress;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyBillingAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyBillingAddress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly billingAddressId?: string | null;
  readonly companyId?: string | null;
  readonly billingAddress: AsyncItem<BillingAddress>;
  readonly company: AsyncItem<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyBillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerCompanyBillingAddress : LazyCompanyBillingAddress

export declare const CompanyBillingAddress: (new (init: ModelInit<CompanyBillingAddress>) => CompanyBillingAddress) & {
  copyOf(source: CompanyBillingAddress, mutator: (draft: MutableModel<CompanyBillingAddress>) => MutableModel<CompanyBillingAddress> | void): CompanyBillingAddress;
}