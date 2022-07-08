import {
  execute,
  ParcelOwnersDocument,
  ParcelOwnersQuery,
  Parcel,
  Account,
} from "../.graphclient";
import { ExecutionResult } from "graphql";
import fs from "fs";

type ParcelDetails = Pick<Parcel, "x" | "y"> & { owner: Pick<Account, "id"> };

async function main() {
  const parcels = await getAllParcels();
  const short = parcels.map(
    (parcel) => `(${parcel.x},${parcel.y}):${parcel.owner.id}`
  );

  fs.writeFileSync("data/parcels.json", JSON.stringify(parcels, null, 2));
  fs.writeFileSync("data/short.json", JSON.stringify(short, null, 2));
}

main();

async function getParcels(first: number, skip: number): Promise<ParcelDetails[]> {
  const result: ExecutionResult<ParcelOwnersQuery> = await execute(
    ParcelOwnersDocument,
    { first, skip }
  );
  return result.data ? result.data.parcels : [];
}

async function getAllParcels(): Promise<ParcelDetails[]> {
  const PAGE_SIZE = 1000;

  let skip = 0;
  let allItems: ParcelDetails[] = [];

  console.log(`Fetching all parcels with ${PAGE_SIZE} items per page`);
  
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const items = await getParcels(PAGE_SIZE, skip);
    allItems = [...allItems, ...items];

    console.log(`Got ${items.length} new items, count is now ${allItems.length}`);

    if (items.length < PAGE_SIZE) {
      break;
    }
    skip += PAGE_SIZE;
  }
  return allItems;
}
