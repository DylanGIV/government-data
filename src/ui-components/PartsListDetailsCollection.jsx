/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Item } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import PartsListDetails from "./PartsListDetails";
import { Collection } from "@aws-amplify/ui-react";
export default function PartsListDetailsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Item,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Country: await item.Country,
          Company: await item.Company,
          ItemViewHistories: await item.ItemViewHistories.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={5}
      templateColumns="1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "PartsListDetailsCollection")}
      {...rest}
    >
      {(item, index) => (
        <PartsListDetails
          item={item}
          height="auto"
          width="auto"
          margin="0 0 1px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PartsListDetails>
      )}
    </Collection>
  );
}
