import pkg from 'crypto-js';
const { SHA256 } = pkg;
export  const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
export const MAX_TRANSACTIONS = 10;
export const mempool = []; 
export  const blocks = [];

export  function addTransaction(transaction) {
    mempool.push(transaction);
}

export function mine() {
    // add transactions all or a max of 10. 
    const transactions = [];
    while(mempool.length>0 && transactions.length < MAX_TRANSACTIONS) {
        transactions.push(mempool.pop());
    }
    const block = {id: blocks.length, transactions};
    block.nonce = 0; 
    let hash; 
    while(true) {
        // keep generating hashes of the block until desired difficulty is met. 
        hash = SHA256(JSON.stringify(block)).toString(); 
        block.nonce++; 
        if(BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break; 
        }
    }
    // push the blocks. 
    blocks.push({...block, hash});
}
