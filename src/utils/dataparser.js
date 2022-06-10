import { BELLVALAIRE_DATA } from "../dummy_data/bellvalaire";
import { NASHVILLIANS_DATA } from "../dummy_data/nashvillians";
import { CHAINSMOKERS_DATA } from "../dummy_data/chainsmokers";

export default function dataParser(band) {
  const data = (band === "bellvalaire") ? BELLVALAIRE_DATA : (band === "nashvillians") ? NASHVILLIANS_DATA : CHAINSMOKERS_DATA;
  return data;
}