import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { hashMessage } from "./hashMessage.js";
import * as utils from "ethereum-cryptography/utils";
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

export async function endToEnd() {
  const privateKey = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
  const messageHash = "a33321f98e4ff1c283c76998f14f57447545d339b3db534c6d886decb4209f28";
  const publicKey = secp256k1.getPublicKey(privateKey);
  
  console.log(`Private Key: ${privateKey}\nPublic Key: ${utils.toHex(publicKey)}`);

  const signature = secp256k1.sign(messageHash, privateKey);
  const recovedPublicKey =  await signature.recoverPublicKey(messageHash).toHex();
  const isSigned = secp256k1.verify(signature, messageHash, publicKey);
  console.log(`Recovered Public Key: ${recovedPublicKey}\nIs Signed: ${isSigned}`);
}