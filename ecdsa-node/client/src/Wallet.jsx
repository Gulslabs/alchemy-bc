import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from 'ethereum-cryptography/keccak';
import * as utils from "ethereum-cryptography/utils";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const privteKey = evt.target.value;
    setPrivateKey(privteKey);
    const address = utils.toHex(keccak256(secp256k1.getPublicKey(privteKey).slice(1)).slice(-20))
    if (address) {
      setAddress(address)
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>
      <label>
        Private Key
        <input placeholder="Type in your Private Key 0x1" value={privateKey} onChange={onChange}></input>
      </label>
      <div className="balance">Balance: {balance}</div>
      <div className="balance">Public Address: {address.slice(0, 15)}...</div>
    </div>
  );
}

export default Wallet;
