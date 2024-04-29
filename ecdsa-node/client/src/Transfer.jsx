import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { utf8ToBytes } from 'ethereum-cryptography/utils';
import { useState } from "react";
import server from "./server";
import * as jsonBig from "json-bigint"
function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [signature, setSignature] = useState("");
  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();
    //setSignature(await secp256k1.sign(sendAmount, privateKey));
    console.log(`Private key: ${privateKey}. SendAmount: ${sendAmount}`);
    const signature = secp256k1.sign(keccak256(utf8ToBytes(sendAmount)), privateKey)    
    const mySig = {
      r: signature.r, 
      s: signature.s, 
      recover: signature.recovery
    };     
    console.log(`My Sign : ${jsonBig.stringify(signature)}`);    
    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        signature: jsonBig.stringify(signature),
        amount: parseInt(sendAmount),
        recipient
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <div className="container transfer">
      <h1>Send Transaction</h1>
      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>
      <label>
        Recipient Public Address
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>
      <button className="button" onClick={transfer}>Transfer</button>
    </div>
  );
}
export default Transfer;
