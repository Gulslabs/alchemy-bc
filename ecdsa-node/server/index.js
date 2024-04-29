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
  const parsedSignature = JSONbig.parse(signature); 
  const recreateSig = {r: parsedSignature.r, s: parsedSignature.s}
  console.log(`My Sign: ${parsedSignature.recovery}`);
   
  const publicKey = recreateSig.recoverPublicKey(keccak.keccak256(utils.utf8ToBytes(amount.toString()))).toHex();
  console.log(`Public Key: ${publicKey}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
