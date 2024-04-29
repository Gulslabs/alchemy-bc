import { secp256k1 } from "ethereum-cryptography/secp256k1";
import {keccak256} from 'ethereum-cryptography/keccak';
import * as utils from "ethereum-cryptography/utils";
// export function generate() { update package.json  /*"type": "module", Just to run generate file. the run node scripts/generate */ 
  const privKey = secp256k1.utils.randomPrivateKey();
  const pubKey = secp256k1.getPublicKey(privKey);
  console.log(
    `Private Key : ${utils.toHex(privKey)} \nPublic Key  : ${utils.toHex(pubKey)}\nAddress: ${utils.toHex(keccak256(pubKey.slice(1)).slice(-20))}`
  );
//}
