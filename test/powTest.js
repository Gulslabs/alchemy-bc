import {
  mine,
  addTransaction,
  blocks,
  mempool,
  TARGET_DIFFICULTY,
} from "../src/pow.js";
import { assert } from "chai";
import pkg from "crypto-js";
const { SHA256 } = pkg;

describe("mine", () => {
  describe("with 5 mempool transactions", () => {
    before(() => {
      for (let i = 0; i < 5; i++) {
        addTransaction({ sender: "bob", to: "alice", amount: "1 BTC" });
      }
    });
    describe("after mining", () => {
      before(() => {
        mine();
      });
      it("should add the blocks", () => {
        assert.equal(blocks.length, 1);
      });
      it("should store the transactions on the block", () => {
        assert.equal(blocks[blocks.length - 1].transactions.length, 5);
      });
      it("should clear the mempool", () => {
        assert.equal(mempool.length, 0);
      });
      it("should have a nonce", () => {
        assert.isDefined(
          blocks[blocks.length - 1].nonce,
          "did not find a nonce on the block"
        );
      });
      it("should have a hash lower than the target difficulty", () => {
        const actual = blocks[blocks.length - 1].hash.toString();
        const isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
        assert(
          isLess,
          "expected the hash to be less than the target difficulty"
        );
      });
    });
  });
});
