const express = require("express");
const keccak = require("ethereum-cryptography/keccak");
const utils = require("ethereum-cryptography/utils");
const secp256 = require("ethereum-cryptography/secp256k1");
const JSONbig = require("json-bigint");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "1f841c5ac715b50b88bbe80688e7af56d70e1cd4": 100,
  "56c9903bf751969c2b91bec3cd3d6f4990596a2e": 50,
  "9e3f1cf846999d77c7875d0098220c2e034cad4e": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // get signature from client-side application.
  // recover the public key from signature, get public address and that will become the sender.
  // sender should not be passed as input.
  const { signature, recipient, amount } = req.body;
  const { r, s, recovery } = signature;
  console.log(`Signature: ${signature}`);
  console.log(`r: ${signature.r}`);
   const dummy1 = JSONbig.stringify(signature);
  // console.log(`jsonbig.stringify(signature): ${dummy1}`);
  // console.log(`r1: ${dummy1.recover}`);
  const dummy2 = JSONbig.parse(dummy1);
  console.log(`jsonbig.parse(JSONbig.stringify(signature)): ${dummy2}`);
  const mySign = { r: dummy2.r, s: dummy2.s, recover:  dummy2.recover};
  console.log(`My Sign:  ${JSONbig.parse(mySign)}`); 
  const publicKey = mySign.recoverPublicKey(keccak.keccak256(utils.utf8ToBytes(amount.toString()))).toHex();
  console.log(`Public Key: ${publicKey}`);
  // console.log(`r2: ${dummy2.recover}`);
  // const dummy3 = JSON.stringify(signature); 
  // console.log(`JSON.stringify(signature): ${dummy3}`);
  // console.log(`r3: ${dummy3.recover}`);
  // const dummy4 = JSONbig.parse(signature); 
//  console.log(`jsonbig.parse(signature): ${dummy4}`);
  //  const signatureObj = JSONbig.parse(signature);
  //  console.log(`Signature: ${signatureObj}`);
  //  const sig = new secp256.Signature(BigInt(signature.r), BigInt(signature.s), signature.recovery);
  //  const publicKey = sig.recoverPublicKey(keccak.keccak256(utils.utf8ToBytes(amount.toString()))).toHex();
  //  const sender = keccak(publicKey.slice(1)).slice(-20);
  //  setInitialBalance(sender);
  //  setInitialBalance(recipient);
  // if (balances[sender] < amount) {
  //   res.status(400).send({ message: "Not enough funds!" });
  // } else {
  //   balances[sender] -= amount;
  //   balances[recipient] += amount;
  //   res.send({ balance: balances[sender] });
  //}
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
