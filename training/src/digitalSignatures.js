import {keccak256} from 'ethereum-cryptography/keccak';
import { toHex } from "ethereum-cryptography/utils";

/*
 *  pubkey is in Uint8Array format. It contains the ethereum address(of a EOA within)
 */
export function getAddress(pubKey) {
    // console.log(pubKey);
    // // the first-byte indicates format of the public key(compressed or uncompressed)
    // // slice of the first byte. 
    // pubKey = pubKey.slice(1);
    // // take keccak for rest of public key. 
    // pubKey = keccak256(pubKey);
    // // the last 20 bytes represent the address. 
    // console.log(toHex(pubKey));
    // return pubKey.slice(-20);
     // the first byte indicates whether this is in compressed form or not
     return keccak256(pubKey.slice(1)).slice(-20);
}