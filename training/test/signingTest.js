import { assert } from "chai";
import { signMessage, PUBLIC_KEY, endToEnd } from "../src/signMessage.js";
import { recoverKey } from "../src/recoverKeys.js";

describe("Signing and Key Recovery", () => {
  it("should recover public key from the signature", async () => {
    const signature = await signMessage("Hello World!");
    const publickey = await recoverKey("Hello World!", signature);
    console.log("Public Key from Recovery:", publickey);
    console.log("Signature:", signature);
    //assert.equal(PUBLIC_KEY, toHex(publickey));
  });
  it("End To End Should Work", async () =>{
    await endToEnd(); 
  }); 
});
