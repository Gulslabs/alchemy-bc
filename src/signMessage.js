import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { hashMessage } from "./hashMessage.js";
// import {toHex} from 'ethereum-cryptography/utils.js';

//const privKey = secp256k1.utils.randomPrivateKey();
// const pubKey = secp256k1.getPublicKey(privKey, false);

const PRIVATE_KEY =  "f171447e35215ed7b9ed0147c9c4a6cfed78e5c936ebea759d51cc4cfbad5d93";
export const PUBLIC_KEY =  "04c573a91aecb8e3f472369d17aa21e9b791c5d2bd779f23f85646cb7e2a52b131dc05f7f355dc5e23e49f75e40db601954ad1f91dfc0891b2b3bfe00198d5ec62";

export async function signMessage(msg) {
//   console.log("Private Key:", toHex(privKey));
//   console.log("Public Key:", toHex(pubKey));
  //return await secp256k1.sign(hashMessage(msg), privKey);
  return await secp256k1.sign(hashMessage(msg), PRIVATE_KEY);
}
