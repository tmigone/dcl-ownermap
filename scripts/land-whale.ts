import { ethers } from "hardhat";
import { LANDRegistry__factory } from "../typechain-types";

const LAND_GRID_SIZE = 300;

interface Land {
  x: number;
  y: number;
}

interface LandOwner {
  address: string;
  lands: Land[];
}

async function main() {
  const landRegistry = LANDRegistry__factory.connect(
    "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
    ethers.provider
  );
  
  const owners: LandOwner[] = [];
  
  for (let i = -LAND_GRID_SIZE/2; i <= LAND_GRID_SIZE/2; i++) {
    for (let j = -LAND_GRID_SIZE/2; j <= LAND_GRID_SIZE/2; j++) {
      const owner = await landRegistry.ownerOfLand(i, j);
      const exists = owners.find(o => o.address === owner);
      if (exists) {
        exists.lands.push({ x: i, y: j });
      } else {
        owners.push({ address: owner, lands: [{ x: i, y: j }] });
      }
    }
  }

  console.log(owners.sort((a, b) => b.lands.length - a.lands.length).slice(0, 10));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
