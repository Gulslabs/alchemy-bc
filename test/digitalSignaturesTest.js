import { getAddress } from "../src/digitalSignatures.js";
import {secp256k1} from 'ethereum-cryptography/secp256k1';
import { assert } from "chai";
import { toHex } from "ethereum-cryptography/utils";

//Warning: This is a very common private key; do you it for in real-token use-case
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"; 
const EXPECTED_ADDRESS = "16bB6031CBF3a12B899aB99D96B64b7bbD719705";

describe('Get Address', ()=>{
    it('should get the address from public key', async ()=>{
        const pubKey = secp256k1.getPublicKey(PRIVATE_KEY);
        const address  = toHex(getAddress(pubKey));
        assert.equal(address.toLowerCase(), EXPECTED_ADDRESS.toLowerCase());
    });
});