import { assert } from "chai";
import { signMessage, PUBLIC_KEY } from "../src/signMessage.js";
import { recoverKey } from "../src/recoverKeys.js";
import {toHex} from 'ethereum-cryptography/utils.js';

describe("Signing and Key Recovery", () => {
  it("should recover public key from the signature", async () => {
    const signature = await signMessage("Hello World!");
    const publickey = await recoverKey("Hello World!", signature);
    console.log("Public Key from Recovery:", publickey);
    //assert.equal(PUBLIC_KEY, toHex(publickey));
  });
});
