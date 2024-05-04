import { hashMessage } from "./hashMessage.js";

export async function recoverKey(message, signature) {   
    
    return await signature.recoverPublicKey(hashMessage(message));
}





