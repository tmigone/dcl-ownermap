import * as GraphClient from "../.graphclient";
import {
  execute,
  ParcelOwnersDocument,
  ParcelOwnersQuery,
} from "../.graphclient";
import { ExecutionResult } from "graphql";
import fs from "fs";

type Parcel = Pick<GraphClient.Parcel, "x" | "y"> & {
  owner: Pick<GraphClient.Account, "id">;
};

interface ParcelOwner {
  id: string;
  parcels: Parcel[];
}

async function main() {
  // Get'em parcels
  const parcels = await getAllParcels();
  console.log(`Got ${parcels.length} parcels.`);
  fs.writeFileSync(
    `data/raw-${new Date().toJSON().slice(0, 10)}.json`,
    JSON.stringify(parcels, null, 2)
  );

  // Filter out parcels outside the 301x301 grid
  const ogGrid = parcels.filter(
    (p) => Math.abs(p.x) <= 150 && Math.abs(p.y) <= 150
  );
  fs.writeFileSync(
    `data/grid-${new Date().toJSON().slice(0, 10)}.json`,
    JSON.stringify(ogGrid, null, 2)
  );
  console.log(
    `Got ${ogGrid.length} parcels in the 150x150 grid. This is ${
      ogGrid.length === 301 * 301 ? "good" : "bad"
    }`
  );

  // Reorg by owner
  const byOwner = ogGrid.reduce((acc: ParcelOwner[], p) => {
    const owner = p.owner.id;
    const existing = acc.find((o) => o.id === owner);

    if (typeof existing === "undefined") {
      acc.push({ id: owner, parcels: [p] });
    } else {
      existing.parcels.push(p);
    }

    return acc;
  }, []);
  console.log(`Found ${byOwner.length} unique owners.`);
  fs.writeFileSync(
    `data/owner-${new Date().toJSON().slice(0, 10)}.json`,
    JSON.stringify(byOwner, null, 2)
  );

  // Print out the top 10 whales
  const whales = byOwner.sort((a, b) => b.parcels.length - a.parcels.length).slice(0, 10);
  console.log(`Whales: `);
  whales.map(w => console.log(`- ${w.id} has ${w.parcels.length} parcels`));
  fs.writeFileSync(
    `data/whales-${new Date().toJSON().slice(0, 10)}.json`,
    JSON.stringify(whales, null, 2)
  );
}

main();

// Paginate manually as autoPagination seems broken
async function getParcels(first: number, skip: number): Promise<Parcel[]> {
  const result: ExecutionResult<ParcelOwnersQuery> = await execute(
    ParcelOwnersDocument,
    { first, skip }
  );
  return result.data ? result.data.parcels : [];
}

async function getAllParcels(): Promise<Parcel[]> {
  const PAGE_SIZE = 1000;

  let skip = 0;
  let allItems: Parcel[] = [];

  console.log(`Fetching all parcels with ${PAGE_SIZE} items per page`);

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const items = await getParcels(PAGE_SIZE, skip);
    allItems = [...allItems, ...items];

    console.log(
      `Got ${items.length} new items, count is now ${allItems.length}`
    );

    if (items.length < PAGE_SIZE) {
      break;
    }
    skip += PAGE_SIZE;
  }
  return allItems;
}
