export class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs; 
        this.outputUTXOs = outputUTXOs; 
    }
    execute() {        
        for (var i in this.inputUTXOs) {
            var txo = this.inputUTXOs[i];
            if (txo.spent){                
                throw new Error('Spend Input transaction found');
            }
        }
    }
}

