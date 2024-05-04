import { sha256 } from "ethereum-cryptography/sha256";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";

const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

export function findColor(hash) {
  return COLORS.find(x => toHex(sha256(utf8ToBytes(x))) === toHex(hash));
}
