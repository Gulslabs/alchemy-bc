import { Block, BlockChain } from "../src/blockChain.js";
import pkg from "crypto-js";
const { SHA256 } = pkg;
import { assert } from "chai";

describe("BlockChain", () => {
  let blockChain;
  beforeEach(() => {
    blockChain = new BlockChain();
    blockChain.addBlock(new Block("Dan"));
    blockChain.addBlock(new Block("Peter"));
    blockChain.addBlock(new Block("James"));
  });
  it("should be a valid blockchian", () => {
    assert(blockChain.isValid());
  });

  describe("tampering with a previousHash", () => {
    beforeEach(() => {
      blockChain.chain[1].previousHash = SHA256("gibberish");
    });
    it("should not be considered valid", () => {
      assert(!blockChain.isValid());
    });
  });

  describe("tampering with data", function () {
    beforeEach(() => {
      blockChain.chain[0].data = "Something Else";
    });

    it("should not be considered valid", function () {
      assert(!blockChain.isValid());
    });
  });
});
