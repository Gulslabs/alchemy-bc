import pkg from 'crypto-js';
const { SHA256 } = pkg;

export class Block {

    constructor(_data) {
        this.data = _data; 
    }

    toHash() {
        if(this.previousHash) {
            return SHA256(this.data + this.previousHash);
        }        
      return SHA256(this.data);     
    }
}

export class BlockChain {

    constructor() {
        this.chain = [new Block("Hello World!")];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length -1].toHash(); 
        this.chain.push(block);
    }

    isValid() {
        for(let i=1; i<this.chain.length-1; i++) {
            if(this.chain[i].previousHash.toString() === this.chain[i-1].toHash().toString()) {
                continue;
            }
            else {
                return false; 
            }
        }
        return true; 
    }
}