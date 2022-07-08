import fs from "fs";
import { Parcel } from '../.graphclient'

const data = JSON.parse(fs.readFileSync("data/parcels.json", "utf8"));

console.log(data);
console.log(data.length);

console.log(data.filter((parcel: Parcel) => parcel.x.length === 0 || parcel.y.length === 0));

const unique = new Set(data.map((d: Parcel) => ({ x: d.x, y: d.y })));
console.log(unique.size);
